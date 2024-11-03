import { ExpenseFormField, ExpenseFormFieldNames, ExpenseFormFieldType } from "@/types/expense-form";

export const formFields = [
    {
      name: ExpenseFormFieldNames.date,
      label: "Date",
      type: ExpenseFormFieldType.date,
      placeholder: "Select a date",
    },
    {
      name: ExpenseFormFieldNames.amount,
      label: "Amount",
      type: ExpenseFormFieldType.number,
    },
    {
      name: ExpenseFormFieldNames.description,
      label: "Description",
      type: ExpenseFormFieldType.text,
    },
    {
      name: ExpenseFormFieldNames.category,
      label: "Category",
      type: ExpenseFormFieldType.select,
      placeholder: "Select a category",
    },
    {
      name: ExpenseFormFieldNames.card,
      label: "Card",
      type: ExpenseFormFieldType.select,
      placeholder: "Select a card",
    },
    {
      name: ExpenseFormFieldNames.owner,
      label: "Owner",
      type: ExpenseFormFieldType.select,
      placeholder: "Select an owner",
    },
  ] as ExpenseFormField[];