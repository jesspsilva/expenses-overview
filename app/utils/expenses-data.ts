import type { Expense } from "../types/expense";

import getGoogleSheetsExpensesData from "../hooks/get-expenses-data";

const sortExpensesByDate = (expenses: Expense[]) => {
  return expenses.sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
  );
};

export default async function fetchExpensesData() {
  try {
    const data = await getGoogleSheetsExpensesData();
    const sortedExpenses = sortExpensesByDate(data);
    
    const categories = Array.from(
      new Set(data.map((expense) => expense.category)),
    );
    categories.unshift("All");

    return {
      expenses: sortedExpenses,
      categories,
    };
  } catch (error) {
    throw new Error("Failed to load expenses data");
  }
}