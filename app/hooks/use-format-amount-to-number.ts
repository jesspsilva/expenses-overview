import { Expense } from "@/types/expense";

const useFormatAmountToNumber = (expense: Expense) => {
  return parseFloat(expense.amount.replace("€", "").replace(",", "."));
};

export default useFormatAmountToNumber;