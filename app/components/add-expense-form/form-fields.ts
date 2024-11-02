import { ExpenseFormFieldNames, ExpenseFormFieldType, ExpenseFormField } from "@/types/expense-form";

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
      items: [
        { value: "groceries", label: "Groceries" },
        { value: "entertainment", label: "Entertainment" },
        { value: "utilities", label: "Utilities" },
      ],
      placeholder: "Select a category",
    },
    {
      name: ExpenseFormFieldNames.card,
      label: "Card",
      type: ExpenseFormFieldType.select,
      items: [
        { value: "card1", label: "Card 1" },
        { value: "card2", label: "Card 2" },
        { value: "card3", label: "Card 3" },
      ],
      placeholder: "Select a card",
    },
    {
      name: ExpenseFormFieldNames.owner,
      label: "Owner",
      type: ExpenseFormFieldType.select,
      items: [
        { value: "john-doe", label: "John Doe" },
        { value: "jane-doe", label: "Jane Doe" },
        { value: "john-smith", label: "John Smith" },
      ],
      placeholder: "Select an owner",
    },
  ] as ExpenseFormField[];