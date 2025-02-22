import fetchGoogleSheetsData from "./google-sheets";

import type { Expense } from "../../types/expense";

const sortExpensesByDate = (expenses: Expense[]) => {
  return expenses.sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
  );
};

export default async function fetchExpensesData() {
  try {
    const csvData = await fetchGoogleSheetsData();
    const data = csvData.map((row) => ({
        ...row,
        owner: row.owner.trim(),
        category: row.category.trim(),
        card: row.card.trim(),
      }));
    const sortedExpenses = sortExpensesByDate(data);

    const categories = Array.from(
      new Set(data.map((expense) => expense.category)),
    );

    const cards = Array.from(new Set(data.map((expense) => expense.card)));

    const owners = Array.from(
      new Set(data.map((expense) => expense.owner)),
    );

    return {
      expenses: sortedExpenses,
      categories,
      cards,
      owners,
    };
  } catch {
    throw new Error("Failed to load expenses data");
  }
}
