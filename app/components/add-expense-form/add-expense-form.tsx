"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Form, FormField } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import DateField from "./date-field";
import FormInput from "./form-input";
import SelectInput from "./select-input";

import {
  ExpenseFormField,
  ExpenseFormFieldType,
  ExpenseFormFieldProps,
} from "@/types/expense-form";

import { formFields } from "./form-fields";

const formSchema = z.object({
  date: z.date(),
  amount: z.coerce.number(),
  description: z.string(),
  category: z.string(),
  card: z.string(),
  owner: z.string(),
});

export default function AddExpenseForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      date: new Date(),
      amount: 0,
      description: "",
      category: "",
      card: "",
      owner: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  const formFieldComponents = (field: any, formField: ExpenseFormField) => {
    const props = { field, ...formField } as ExpenseFormFieldProps;

    switch (formField.type) {
      case ExpenseFormFieldType.date:
        return <DateField {...props} />;
      case ExpenseFormFieldType.number:
      case ExpenseFormFieldType.text:
        return <FormInput {...props} />;
      case ExpenseFormFieldType.select:
        return <SelectInput {...props} />;
      default:
        return <></>;
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        {formFields.map((formFieldProps, index) => (
          <FormField
            key={index}
            control={form.control}
            name={formFieldProps.name}
            render={({ field }) => formFieldComponents(field, formFieldProps)}
          />
        ))}
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
