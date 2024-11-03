import type { Expense } from "../types/expense";
import type { DateRange } from "react-day-picker";

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

type FilterState = {
  setDate: (date: DateRange) => void;
  setSelectedCategory: (category: string) => void;
  setSelectedCard: (card: string) => void;
  setSelectedOwner: (owner: string) => void;
};

export function createFilters(
  state: {
    date: DateRange;
    categories: string[];
    selectedCategory: string;
    cards: string[];
    selectedCard: string;
    owners: string[];
    selectedOwner: string;
  },
  setState: FilterState
) {
  return {
    date: {
      onChange: (newDate: DateRange | undefined) => 
        setState.setDate(newDate || { from: undefined, to: undefined }),
      values: state.date,
    },
    categories: {
      values: state.categories,
      selectedValue: state.selectedCategory,
      placeholder: "Select Category",
      onChange: setState.setSelectedCategory,
    },
    cards: {
      values: state.cards,
      selectedValue: state.selectedCard,
      placeholder: "Select Card",
      onChange: setState.setSelectedCard,
    },
    owners: {
      values: state.owners,
      selectedValue: state.selectedOwner,
      placeholder: "Select Owner",
      onChange: setState.setSelectedOwner,
    },
  };
}