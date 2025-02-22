import { PlusIcon } from "@radix-ui/react-icons";
import { useState } from "react";

import ExpenseForm from "../expense-form/expense-form";
import { Button } from "./button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./dialog";

import type { AddExpenseFormProps } from "@/types/expense-form";

export default function ExpenseDialog({ data }: AddExpenseFormProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
      <DialogTrigger asChild>
        <Button>
          <PlusIcon /> Add new expense
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Fill the expense details</DialogTitle>
          <ExpenseForm data={data} onClose={() => setIsModalOpen(false)} />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
