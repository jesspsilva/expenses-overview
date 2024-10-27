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

  useEffect(() => {
    async function loadExpenses() {
      setIsLoading(true);
      setError(null);
      try {
        const { expenses, categories } =
          await fetchExpensesData();
        setExpenses(expenses);
        setCategories(categories);
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

    const filteredExpensesByDate = filterExpensesByDateRange(
      expenses,
      date.from,
      date.to,
    );

    if (!selectedCategory || selectedCategory === "All") {
      setFilteredExpenses(filteredExpensesByDate);
      return;
    }

    const filteredExpensesByCategory = filterExpensesByCategory(
      filteredExpensesByDate,
      selectedCategory,
    );
    setFilteredExpenses(filteredExpensesByCategory);
  }, [date, expenses, selectedCategory]);

  const onFiltersChange = {
    date: (newDate: DateRange | undefined) => {
      setDate(newDate || { from: undefined, to: undefined });
    },
    category: (category: string) => {
      console.log("category", category);
      setSelectedCategory(category);
    },
  };

  const filters = {
    categories: {
      values: categories,
      selectedValue: selectedCategory,
      placeholder: "Select Category"
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Expenses Overview</h1>
      <PageHeader
        date={date}
        filters={filters}
        onChange={onFiltersChange}
      />
      <section className="mt-4">
        <DataTable data={filteredExpenses} columns={tableColumns} />
      </section>
    </div>
  );
}
