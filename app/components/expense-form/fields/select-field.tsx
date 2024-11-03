import { FormControl, FormItem, FormLabel } from "../../ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";

import type { ExpenseFormFieldProps } from "@/types/expense-form";

export default function SelectField({
  field,
  label,
  placeholder,
  items,
}: ExpenseFormFieldProps) {
  return (
    <FormItem>
      <FormLabel>{label}</FormLabel>
      <Select onValueChange={field.onChange} defaultValue={field.value}>
        <FormControl>
          <SelectTrigger>
            <SelectValue placeholder={placeholder} />
          </SelectTrigger>
        </FormControl>
        <SelectContent>
          {items && items.map((item, index) => (
            <SelectItem key={`${item}-${index}`} value={item}>
              {item}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </FormItem>
  );
}
