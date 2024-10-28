"use client";

import { Table } from "@/components/ui/table";
import DataTableHeader from "./data-table-header";
import DataTableBody from "./data-table-body";
import DataTableActions from "./data-table-actions";

import type { Table as TableType } from "@tanstack/react-table";
import type { Expense } from "@/types/expense";

interface DataTableProps {
  table: TableType<Expense>;
  badgeColors: Record<string, string>;
}

export default function DataTable({
  table,
  badgeColors,
}: DataTableProps) {
  return (
    <div>
      <div className="rounded-md border">
        <Table>
          <DataTableHeader table={table} />
          <DataTableBody table={table} badgeColors={badgeColors} />
        </Table>
      </div>
      <DataTableActions table={table} />
    </div>
  );
}
