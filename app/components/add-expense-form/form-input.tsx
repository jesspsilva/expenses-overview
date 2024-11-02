import { FormControl, FormItem, FormLabel } from "../ui/form";
import { Input } from "../ui/input";

import type { ExpenseFormFieldProps } from "@/types/expense-form";

export default function FormInput({ field, label, type }: ExpenseFormFieldProps) {
  return (
    <FormItem>
      <FormLabel>
        {label}
      </FormLabel>
      <FormControl>
        <Input type={type} {...field} />
      </FormControl>
    </FormItem>
  );
}
