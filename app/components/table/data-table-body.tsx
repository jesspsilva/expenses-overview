import { flexRender } from "@tanstack/react-table";

import { TableBody, TableCell, TableRow } from "@/components/ui/table";

import type { Table } from "@tanstack/react-table";
import type { Expense } from "@/types/expense";

export default function DataTableBody({
  table,
}: {
  table: Table<Expense>;
}) {
  return (
    <TableBody>
      {table.getRowModel().rows?.length ? (
        table.getRowModel().rows.map((row) => (
          <TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
            {row.getVisibleCells().map((cell) => (
              <TableCell key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </TableCell>
            ))}
          </TableRow>
        ))
      ) : (
        <TableRow>
          <TableCell colSpan={table.getAllColumns().length} className="h-24 text-center">
            No results.
          </TableCell>
        </TableRow>
      )}
    </TableBody>
  );
}
