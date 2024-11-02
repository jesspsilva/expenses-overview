export enum ExpenseFormFieldType {
  date = "date",
  number = "number",
  text = "text",
  select = "select",
}

interface ExpenseFormFieldItem {
  value: string;
  label: string;
}

export interface ExpenseFormField {
  name: ExpenseFormFieldNames;
  label: string;
  type: string;
  placeholder?: string;
  items?: ExpenseFormFieldItem[];
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
