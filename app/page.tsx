"use client";
import { useState, useEffect } from 'react';
import type { Expense } from './types/expense';

import getGoogleSheetsExpensesData from './hooks/get-expenses-data';

import { MonthSelect } from '@/components/month-select';

export default function Home() {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedMonth, setSelectedMonth] = useState<string>('');
  const [selectedYear, setSelectedYear] = useState<number>(2024);

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
      <MonthSelect value={selectedMonth} selectedYear={selectedYear} onChange={(value) => setSelectedMonth(value)} />
    </div>
  );
}
