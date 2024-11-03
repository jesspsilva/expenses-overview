export enum ExpenseFormFieldType {
  date = "date",
  number = "number",
  text = "text",
  select = "select",
}

export interface ExpenseFormField {
  name: ExpenseFormFieldNames;
  label: string;
  type: string;
  placeholder?: string;
  items?: string[];
}

export interface ExpenseFormFieldProps  extends ExpenseFormField {
  field: any;
}

export enum ExpenseFormFieldNames {
  date = "date",
  amount = "amount",
  description = "description",
  category = "category",
  card = "card",
  owner = "owner",
}

export interface AddExpenseFormProps {
  data: {
    categories: string[];
    cards: string[];
    owners: string[];
  };
}
