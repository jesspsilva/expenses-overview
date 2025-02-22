"use client";
import {
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { subDays } from "date-fns";
import { useEffect, useState } from "react";

import ExpenseDialog from "@/components/ui/expense-dialog";
import PageHeader from "@/components/page-header/page-header";
import { columns as tableColumns } from "@/components/table/config/columns";
import Table from "@/components/table/table";
import LoadingSpinner from "@/components/ui/loading-spinner";
import { Toaster } from "@/components/ui/toaster";
import { Card } from "@/components/ui/card";

import useTotalOfExpenses from "./hooks/use-total-of-expenses";

import fetchExpensesData from "./services/expenses/fetch-expenses";
import { createBadgeColorsMap } from "./utils/badge-colors";
import {
  createFilters,
  filterExpensesByCard,
  filterExpensesByCategory,
  filterExpensesByDateRange,
  filterExpensesByOwner,
} from "./utils/expenses-filters";

import type { Expense } from "./types/expense";
import type { DateRange } from "react-day-picker";
import useTotalReimbursement from "./hooks/use-total-reimbursement";

export default function Home() {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [filteredExpenses, setFilteredExpenses] = useState<Expense[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const today = new Date();
  const [date, setDate] = useState<DateRange>({
    from: subDays(today, 30),
    to: today,
  });
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [cards, setCards] = useState<string[]>([]);
  const [selectedCard, setSelectedCard] = useState<string>("");
  const [owners, setOwners] = useState<string[]>([]);
  const [selectedOwner, setSelectedOwner] = useState<string>("");
  const table = useReactTable({
    data: filteredExpenses,
    columns: tableColumns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  useEffect(() => {
    async function loadExpenses() {
      setIsLoading(true);
      setError(null);
      try {
        const { expenses, categories, cards, owners } =
          await fetchExpensesData();
        setExpenses(expenses);
        setCategories(categories);
        setCards(cards);
        setOwners(owners);
      } catch {
        setError("Failed to load expenses data");
      } finally {
        setIsLoading(false);
      }
    }

    loadExpenses();
  }, []);

  useEffect(() => {
    if (!date.from || !date.to) return;

    const filtered = expenses
      .filter(
        (expense) =>
          filterExpensesByDateRange([expense], date.from!, date.to!).length > 0,
      )
      .filter(
        (expense) =>
          filterExpensesByCategory([expense], selectedCategory).length > 0,
      )
      .filter(
        (expense) => filterExpensesByCard([expense], selectedCard).length > 0,
      )
      .filter(
        (expense) => filterExpensesByOwner([expense], selectedOwner).length > 0,
      );

    setFilteredExpenses(filtered);
  }, [date, expenses, selectedCategory, selectedCard, selectedOwner]);

  const formattedTotalOfExpenses =
    (filteredExpenses && useTotalOfExpenses(filteredExpenses)) || "0€";

  const formattedTotalOfReimbursement =
    (filteredExpenses && useTotalReimbursement(filteredExpenses)) || "0€";

  const filters = createFilters(
    {
      date,
      categories,
      selectedCategory,
      cards,
      selectedCard,
      owners,
      selectedOwner,
    },
    {
      setDate,
      setSelectedCategory,
      setSelectedCard,
      setSelectedOwner,
    },
  );

  const valuesForBadges = [...owners, ...cards, ...categories];
  const badgesColorsMap = createBadgeColorsMap(valuesForBadges);

  if (isLoading)
    return (
      <div className="h-screen w-screen flex justify-center items-center">
        <LoadingSpinner />
      </div>
    );
  if (error) return <div>Error: {error}</div>;
  
  return (
    <div className="container mx-auto p-4">
      <header className="flex flex-col">
        <div className="flex items-center justify-between mb-10">
          <h1 className="text-2xl font-bold mb-4">Expenses Overview</h1>
          <ExpenseDialog data={{ categories, cards, owners }} />
        </div>
        <section className="grid grid-cols-1 gap-4 md:grid-cols-3 mb-8">
          <Card title="Total Expenses" value={formattedTotalOfExpenses} />
          <Card
            title="Total Reimbursement"
            value={formattedTotalOfReimbursement}
          />
        </section>
        <PageHeader filters={filters} table={table} />
      </header>
      <section className="mt-4">
        <Table table={table} badgeColors={badgesColorsMap} />
      </section>
      <Toaster />
    </div>
  );
}
