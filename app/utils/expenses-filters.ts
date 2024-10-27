import type { Expense } from "../types/expense";

export const filterExpensesByDateRange = (
  expenses: Expense[],
  dateFrom: Date | undefined,
  dateTo: Date | undefined,
) => {
  if (!dateFrom || !dateTo) return expenses;

  return expenses.filter((expense) => {
    const [day, month, year] = expense.date.split("/");
    const expenseDate = new Date(
      parseInt(year, 10),
      parseInt(month, 10) - 1,
      parseInt(day, 10),
    );

    return expenseDate >= dateFrom && expenseDate <= dateTo;
  });
};
const filterExpensesByField = (
  expenses: Expense[],
  field: keyof Expense,
  value: string,
) => {
  if (!value || value === "All") return expenses;

  return expenses.filter((expense) => expense[field] === value);
};

export const filterExpensesByCategory = (
  expenses: Expense[],
  category: string,
) => filterExpensesByField(expenses, "category", category);

export const filterExpensesByCard = (expenses: Expense[], card: string) =>
  filterExpensesByField(expenses, "card", card);

export const filterExpensesByOwner = (expenses: Expense[], owner: string) =>
  filterExpensesByField(expenses, "owner", owner);
