"use client";
import { useState, useEffect } from "react";
import type { Expense } from "./types/expense";
import { subDays } from "date-fns";

import fetchExpensesData from "./utils/expenses-data";

import PageHeader from "@/components/page-header/page-header";
import DataTable from "@/components/table/data-table";
import { columns as tableColumns } from "@/components/table/columns";

import type { DateRange } from "react-day-picker";

import {
  filterExpensesByDateRange,
  filterExpensesByCategory,
  filterExpensesByCard,
  filterExpensesByOwner,
} from "./utils/expenses-filters";

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
      } catch (err) {
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

  const onFiltersChange = {
    date: (newDate: DateRange | undefined) => {
      setDate(newDate || { from: undefined, to: undefined });
    },
    category: (category: string) => {
      setSelectedCategory(category);
    },
    card: (card: string) => {
      setSelectedCard(card);
    },
    owner: (owner: string) => {
      setSelectedOwner(owner);
    },
  };

  const filters = {
    categories: {
      values: categories,
      selectedValue: selectedCategory,
      placeholder: "Select Category",
    },
    cards: {
      values: cards,
      selectedValue: selectedCard,
      placeholder: "Select Card",
    },
    owners: {
      values: owners,
      selectedValue: selectedOwner,
      placeholder: "Select Owner",
    },
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Expenses Overview</h1>
      <PageHeader date={date} filters={filters} onChange={onFiltersChange} />
      <section className="mt-4">
        <DataTable data={filteredExpenses} columns={tableColumns} />
      </section>
    </div>
  );
}
