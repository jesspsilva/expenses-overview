import { flexRender } from "@tanstack/react-table";

import { TableBody, TableCell, TableRow } from "@/components/ui/table";

import type { Table } from "@tanstack/react-table";
import type { Expense } from "@/types/expense";


export default function DataTableBody({
  table,
  categoryBadgeColors,
}: {
  table: Table<Expense>;
  categoryBadgeColors: Record<string, string>;
}) {
  console.log(categoryBadgeColors);
  return (
    <TableBody>
      {table.getRowModel().rows?.length ? (
        table.getRowModel().rows.map((row) => (
          <TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
            {row.getVisibleCells().map((cell) => (
              <TableCell key={cell.id}>
                {cell.column.id === "category" ? (
                  <div className="flex gap-1 flex-wrap">
                    {(Array.isArray(cell.getValue<string | string[]>())
                      ? cell.getValue<string[]>()
                      : [cell.getValue<string>()]
                    ).map((category: string) => {
                      const backgroundColor = categoryBadgeColors[category];
                      return (
                        <div
                          key={category}
                          className={`${backgroundColor} rounded-md px-2 py-1`}
                        >
                          {category}
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
    </TableBody>
  );
}
