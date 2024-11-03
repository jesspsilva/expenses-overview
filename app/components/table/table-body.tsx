import { flexRender } from "@tanstack/react-table";

import {
  TableBody as TableBodyUI,
  TableCell,
  TableRow,
} from "@/components/ui/table";

import type { Expense } from "@/types/expense";
import type { Table } from "@tanstack/react-table";

export default function TableBody({
  table,
  badgeColors,
}: {
  table: Table<Expense>;
  badgeColors: Record<string, string>;
}) {
  return (
    <TableBodyUI>
      {table.getRowModel().rows?.length ? (
        table.getRowModel().rows.map((row) => (
          <TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
            {row.getVisibleCells().map((cell) => (
              <TableCell key={cell.id}>
                {["category", "card", "owner"].includes(cell.column.id) ? (
                  <div className="flex gap-1 flex-wrap">
                    {(Array.isArray(cell.getValue<string | string[]>())
                      ? cell.getValue<string[]>()
                      : [cell.getValue<string>()]
                    ).map((value: string) => {
                      const backgroundColor = badgeColors[value];
                      return (
                        <div
                          key={value}
                          className={`${backgroundColor} rounded-md px-2 py-1`}
                        >
                          {value}
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  flexRender(cell.column.columnDef.cell, cell.getContext())
                )}
              </TableCell>
            ))}
          </TableRow>
        ))
      ) : (
        <TableRow>
          <TableCell
            colSpan={table.getAllColumns().length}
            className="h-24 text-center"
          >
            No results.
          </TableCell>
        </TableRow>
      )}
    </TableBodyUI>
  );
}
