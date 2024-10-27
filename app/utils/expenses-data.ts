import type { Expense } from "../types/expense";

import getGoogleSheetsExpensesData from "../hooks/get-expenses-data";

const sortExpensesByDate = (expenses: Expense[]) => {
  return expenses.sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
  );
};

export default async function fetchExpensesData() {
  try {
    const csvData = await getGoogleSheetsExpensesData();
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
    categories.unshift("All");

    const cards = Array.from(new Set(data.map((expense) => expense.card)));
    cards.unshift("All");

    const owners = Array.from(
      new Set(data.map((expense) => expense.owner)),
    );
    owners.unshift("All");

    return {
      expenses: sortedExpenses,
      categories,
      cards,
      owners,
    };
  } catch (error) {
    throw new Error("Failed to load expenses data");
  }
}
