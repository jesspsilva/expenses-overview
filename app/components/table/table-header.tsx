import { flexRender } from "@tanstack/react-table";

import {
  TableHead,
  TableHeader as TableHeaderUI,
  TableRow,
} from "@/components/ui/table";

import type { Expense } from "@/types/expense";
import type { Table } from "@tanstack/react-table";

export default function TableHeader({ table }: { table: Table<Expense> }) {
  return (
    <TableHeaderUI>
      {table.getHeaderGroups().map((headerGroup) => (
        <TableRow key={headerGroup.id}>
          {headerGroup.headers.map((header) => {
            return (
              <TableHead key={header.id}>
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext(),
                    )}
              </TableHead>
            );
          })}
        </TableRow>
      ))}
    </TableHeaderUI>
  );
}
