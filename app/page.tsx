"use client";
import { useState, useEffect } from 'react';
import type { Expense } from './types/expense';
import { subDays } from "date-fns"

import getGoogleSheetsExpensesData from './hooks/get-expenses-data';

import DateRangePicker from '@/components/date-range-picker';
import DataTable from '@/components/table/data-table';
import { columns as tableColumns } from '@/components/table/columns';

import type { DateRange } from "react-day-picker"

export default function Home() {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const today = new Date();
  const [date, setDate] = useState<DateRange>({
    from: subDays(today, 30),
    to: today,
  })

  useEffect(() => {
    async function fetchExpensesData() {
      setIsLoading(true);
      setError(null);
      try {
        const data = await getGoogleSheetsExpensesData();
        setExpenses(data);
      } catch (err) {
        setError('Fail to load expenses data');
      } finally {
        setIsLoading(false);
      }
    }

    fetchExpensesData();
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Expenses Overview</h1>
      <DateRangePicker date={date} onSelect={(value) => setDate(value as DateRange)} />
      <section className="mt-4">
        <DataTable data={expenses} columns={tableColumns} />
      </section>
    </div>
  );
}
