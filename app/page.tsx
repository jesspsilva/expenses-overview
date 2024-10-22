"use client";
import { useState, useEffect } from 'react';
import type { Expense } from './types/expense';

import getGoogleSheetsExpensesData from './utils/get-expenses-data';

export default function Home() {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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
    </div>
  );
}
