import { useMemo } from "react";
import { Expense } from "@/types/expense";
import useFormatToEuro from "./use-format-to-euro";
import useFormatAmountToNumber from "./use-format-amount-to-number";

const useTotalReimbursement = (expenses: Expense[]) => {
  const totalReimbursement = useMemo(() => {
    return expenses
      .filter((expense: Expense) => expense.category === "Reembolso")
      .reduce((acc: number, expense: Expense) => {
        const value = useFormatAmountToNumber(expense);
        return acc + value;
      }, 0);
  }, [expenses]);

  const formattedTotalReimbursement = useMemo(() => {
    return useFormatToEuro(totalReimbursement);
  }, [totalReimbursement]);

  return formattedTotalReimbursement;
};

export default useTotalReimbursement;
