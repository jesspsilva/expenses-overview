"use client";

import { Table as TableUI } from "@/components/ui/table";

import TableActions from "./table-actions";
import TableBody from "./table-body";
import TableHeader from "./table-header";

import type { Expense } from "@/types/expense";
import type { Table as TableType } from "@tanstack/react-table";

interface DataTableProps {
  table: TableType<Expense>;
  badgeColors: Record<string, string>;
}

export default function Table({ table, badgeColors }: DataTableProps) {
  return (
    <div>
      <div className="rounded-md border">
        <TableUI>
          <TableHeader table={table} />
          <TableBody table={table} badgeColors={badgeColors} />
        </TableUI>
      </div>
      <TableActions table={table} />
    </div>
  );
}
