import { useMemo } from "react";
import { Expense } from "@/types/expense";
import useFormatToEuro from "./use-format-to-euro";
import useFormatAmountToNumber from "./use-format-amount-to-number";

const useTotalOfExpenses = (expenses: Expense[]) => {
  const totalOfExpenses = useMemo(() => {
    return expenses
      .filter((expense: Expense) => expense.category !== "Reembolso")
      .reduce((acc: number, expense: Expense) => {
        const value = useFormatAmountToNumber(expense);
        return acc + value;
      }, 0);
  }, [expenses]);

  const formattedTotalOfExpenses = useMemo(() => {
    return useFormatToEuro(totalOfExpenses);
  }, [totalOfExpenses]);

  return formattedTotalOfExpenses;
};

export default useTotalOfExpenses;
