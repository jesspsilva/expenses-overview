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

export const filterExpensesByCategory = (
  expenses: Expense[],
  category: string,
) => {
  if (!category || category === "All") return expenses;
  
  return expenses.filter((expense) => expense.category === category);
};
