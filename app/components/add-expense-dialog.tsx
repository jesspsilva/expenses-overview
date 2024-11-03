import { PlusIcon } from "@radix-ui/react-icons";
import { useState } from "react";

import AddExpenseForm from "./add-expense-form/add-expense-form";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

import type { AddExpenseFormProps } from "@/types/expense-form";


export default function AddExpenseDialog({ data }: AddExpenseFormProps) {
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
          <AddExpenseForm data={data} onClose={() => setIsModalOpen(false)} />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
