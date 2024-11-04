import { MixerHorizontalIcon } from "@radix-ui/react-icons";
import { useState } from "react";

import ColumnVisibilityToggle from "@/components/table/column-visibility-toggle";
import { Button } from "@/components/ui/button";
import DateRangePicker from "@/components/ui/date-range-picker";

import Filters from "./filters";

import type { Expense } from "@/types/expense";
import type { Table } from "@tanstack/react-table";
import type { DateRange } from "react-day-picker";

export type FilterOption = {
  values: string[];
  selectedValue: string;
  placeholder: string;
  onChange: (value: string) => void;
  label: string;
};

type DateFilterOption = {
  values: DateRange;
  onChange: (value: DateRange | undefined) => void;
};

export type PageHeaderProps = {
  filters: {
    date: DateFilterOption;
    categories: FilterOption;
    cards: FilterOption;
    owners: FilterOption;
  };
  table: Table<Expense>;
};

export default function PageHeader({ filters, table }: PageHeaderProps) {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  return (
    <div className="flex4">
      <section className="flex lg:items-center gap-4 lg:justify-between lg:flex-row flex-col">
        <div className="flex items-center gap-4">
          <DateRangePicker
            date={filters.date.values}
            onSelect={filters.date.onChange}
          />
          <Button
            variant="outline"
            onClick={() => setIsFiltersOpen(!isFiltersOpen)}
          >
            <MixerHorizontalIcon />
            Filters
          </Button>
        </div>
        <div className="hidden lg:block">
          <ColumnVisibilityToggle table={table} />
        </div>
      </section>
      {isFiltersOpen && <Filters filters={filters} />}
    </div>
  );
}
