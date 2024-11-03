import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";
import AddExpenseForm from "./add-expense-form/add-expense-form";
import { PlusIcon } from "@radix-ui/react-icons";

import type { AddExpenseFormProps } from "@/types/expense-form";


export default function AddExpenseDialog({ data }: AddExpenseFormProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <PlusIcon /> Add new expense
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Fill the expense details</DialogTitle>
          <AddExpenseForm data={data} />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
