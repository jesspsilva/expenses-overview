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

export default function AddExpenseDialog() {
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
          <AddExpenseForm />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
