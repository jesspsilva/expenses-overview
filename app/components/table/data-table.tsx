"use client";

import { Table } from "@/components/ui/table";
import DataTableHeader from "./data-table-header";
import DataTableBody from "./data-table-body";
import DataTableActions from "./data-table-actions";

import type { Table as TableType } from "@tanstack/react-table";
import type { Expense } from "@/types/expense";

interface DataTableProps {
  table: TableType<Expense>;
}

export default function DataTable({
  table,
}: DataTableProps) {
  return (
    <div>
      <div className="rounded-md border">
        <Table>
          <DataTableHeader table={table} />
          <DataTableBody table={table} />
        </Table>
      </div>
      <DataTableActions table={table} />
    </div>
  );
}
