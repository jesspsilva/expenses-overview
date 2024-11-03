"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Form, FormField } from "@/components/ui/form";
import { useExpenseSubmission } from "@/hooks/use-expense-submission";
import {
  AddExpenseFormProps,
  ExpenseFormField,
  ExpenseFormFieldProps,
  ExpenseFormFieldType,
} from "@/types/expense-form";

import DateField from "./date-field";
import { formFields } from "./form-fields";
import FormInput from "./form-input";
import SelectInput from "./select-input";

const formSchema = z.object({
  date: z.date(),
  amount: z
    .string()
    .min(1, "Amount is required")
    .refine((val) => parseFloat(val) > 0, "Amount must be greater than 0"),
  description: z.string().min(1, "Description is required"),
  category: z.string().min(1, "Category is required"),
  card: z.string().min(1, "Card is required"),
  owner: z.string().min(1, "Owner is required"),
});

export default function AddExpenseForm({ data, onClose }: AddExpenseFormProps) {
  const { submitExpense, isSubmitting } = useExpenseSubmission();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      date: new Date(),
      amount: "0",
      description: "",
      category: "",
      card: "",
      owner: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const formattedDate = values.date.toLocaleDateString("pt-PT", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });

    await submitExpense({ ...values, date: formattedDate });

    onClose?.();
  }

  const itemsMapping: Record<string, string[]> = {
    category: data.categories,
    card: data.cards,
    owner: data.owners,
  };

  const formFieldComponents = (field: any, formField: ExpenseFormField) => {
    const props = { field, ...formField } as ExpenseFormFieldProps;

    switch (formField.type) {
      case ExpenseFormFieldType.date:
        return <DateField {...props} />;
      case ExpenseFormFieldType.number:
      case ExpenseFormFieldType.text:
        return <FormInput {...props} />;
      case ExpenseFormFieldType.select:
        if (formField.name in itemsMapping) {
          return (
            <SelectInput {...props} items={itemsMapping[formField.name]} />
          );
        }
        return <></>;
      default:
        return <></>;
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        {formFields.map((formField, index) => (
          <FormField
            key={index}
            control={form.control}
            name={formField.name}
            render={({ field }) => formFieldComponents(field, formField)}
          />
        ))}
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Adding..." : "Add Expense"}
        </Button>
      </form>
    </Form>
  );
}
