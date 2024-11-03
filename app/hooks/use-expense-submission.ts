import { useState } from "react";

import { Expense } from "../types/expense";

import { useToast } from "./use-toast";


export function useExpenseSubmission() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const submitExpense = async (values: Expense) => {
    setIsSubmitting(true);
    try {
      const formUrl = process.env
        .NEXT_PUBLIC_GOOGLE_FORM_LINK!.replace(
          "Date",
          encodeURIComponent(values.date),
        )
        .replace("Value", encodeURIComponent(values.amount.toString()))
        .replace("Description", encodeURIComponent(values.description))
        .replace("Category", encodeURIComponent(values.category))
        .replace("Card", encodeURIComponent(values.card))
        .replace("Owner", encodeURIComponent(values.owner));

      // Added no-cors mode to avoid CORS errors
      await fetch(formUrl, {
        mode: "no-cors",
        method: "POST",
      });

      toast({
        title: "Success",
        description: "Expense added successfully",
        variant: "success",
      });

      return true;
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error",
        description: "Failed to add expense",
        variant: "destructive",
      });
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  return { submitExpense, isSubmitting };
}
