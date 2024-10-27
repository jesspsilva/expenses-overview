import type { Table } from "@tanstack/react-table";
import { flexRender } from "@tanstack/react-table";

import { TableHeader, TableHead, TableRow } from "@/components/ui/table";


export default function DataTableHeader<TData>({
  table,
}: {
  table: Table<TData>;
}) {
    return (
        <TableHeader>
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
      </TableHeader>
    )
}
