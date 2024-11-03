"use client";

import { ColumnDef } from "@tanstack/react-table";

import type { Expense } from "@/types/expense";

type ColumnConfig = {
  key: keyof Expense;
  header: string;
  width: string;
  align?: "left" | "right";
  format?: (value: any) => string;
};

const columnConfigs: ColumnConfig[] = [
  { key: "date", header: "Date", width: "w-24" },
  { 
    key: "amount", 
    header: "Amount", 
    width: "w-28", 
    align: "right",
  },
  { key: "description", header: "Description", width: "w-96" },
  { key: "category", header: "Category", width: "w-32" },
  { key: "card", header: "Card", width: "w-32" },
  { key: "owner", header: "Owner", width: "w-24" },
];

export const columns: ColumnDef<Expense>[] = columnConfigs.map(({ key, header, width, align, format }) => ({
  accessorKey: key,
  header: () => (
    <div className={`${width} ${align === "right" ? "text-right" : ""}`}>
      {header}
    </div>
  ),
  cell: ({ row }) => {
    const value = row.getValue(key);
    const formattedValue = format ? format(value) : String(value);
    
    return (
      <div className={`font-medium ${width} ${align === "right" ? "text-right" : ""}`}>
        {formattedValue}
      </div>
    );
  },
}));