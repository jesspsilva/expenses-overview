"use client";
import { useState, useEffect } from "react";
import type { Expense } from "./types/expense";
import { subDays } from "date-fns";

import getGoogleSheetsExpensesData from "./hooks/get-expenses-data";

import PageHeader from "@/components/page-header/page-header";
import DataTable from "@/components/table/data-table";
import { columns as tableColumns } from "@/components/table/columns";

import type { DateRange, SelectRangeEventHandler } from "react-day-picker";


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

  const sortExpensesByDate = (expenses: Expense[]) => {
    return expenses.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  };

  useEffect(() => {
    async function fetchExpensesData() {
      setIsLoading(true);
      setError(null);
      try {
        const data = await getGoogleSheetsExpensesData();
        setExpenses(sortExpensesByDate(data));
      } catch (err) {
        setError("Fail to load expenses data");
      } finally {
        setIsLoading(false);
      }
    }

    fetchExpensesData();
  }, []);

  useEffect(() => {
    if (!date.from || !date.to) return;

    const filteredExpenses = expenses.filter((expense) => {
      const [day, month, year] = expense.date.split('/');
      const expenseDate = new Date(
        parseInt(year, 10),
        parseInt(month, 10) - 1,
        parseInt(day, 10)
      );

      return date.from && date.to && expenseDate >= date.from && expenseDate <= date.to;
    }) || expenses;
    setFilteredExpenses(filteredExpenses);
  }, [date, expenses]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Expenses Overview</h1>
      <PageHeader date={date} onSelect={setDate as SelectRangeEventHandler} />
      <section className="mt-4">
        <DataTable data={filteredExpenses} columns={tableColumns} />
      </section>
    </div>
  );
}
