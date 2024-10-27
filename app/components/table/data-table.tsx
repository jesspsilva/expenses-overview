"use client";

import { Table } from "@/components/ui/table";
import DataTableHeader from "./data-table-header";
import DataTableBody from "./data-table-body";
import DataTableActions from "./data-table-actions";

import type { Table as TableType } from "@tanstack/react-table";
import type { Expense } from "@/types/expense";
import type { CategoryColorMap } from "@/utils/category-badge-colors";

interface DataTableProps {
  table: TableType<Expense>;
  categoryBadgeColors: CategoryColorMap;
}

export default function DataTable({
  table,
  categoryBadgeColors,
}: DataTableProps) {
  return (
    <div>
      <div className="rounded-md border">
        <Table>
          <DataTableHeader table={table} />
          <DataTableBody table={table} categoryBadgeColors={categoryBadgeColors} />
        </Table>
      </div>
      <DataTableActions table={table} />
    </div>
  );
}
