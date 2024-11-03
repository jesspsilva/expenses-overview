import DateRangePicker from "@/components/date-range-picker";
import SelectFilter from "@/components/select-filter";
import ColumnVisibilityToggle from "@/components/table/column-visibility-toggle";

import type { DateRange } from "react-day-picker";
import type { Table } from "@tanstack/react-table";
import type { Expense } from "@/types/expense";

type FilterOption = {
  values: string[];
  selectedValue: string;
  placeholder: string;
  onChange: (value: string) => void;
};

type DateFilterOption = {
  values: DateRange;
  onChange: (value: DateRange | undefined) => void;
};

type PageHeaderProps = {
  filters: {
    date: DateFilterOption;
    categories: FilterOption;
    cards: FilterOption;
    owners: FilterOption;
  };
  table: Table<Expense>;
};

export default function PageHeader({ filters, table }: PageHeaderProps) {
  return (
    <div className="flex items-center gap-4">
      <div>
        <DateRangePicker
          date={filters.date.values}
          onSelect={filters.date.onChange}
        />
      </div>

      {Object.entries(filters).map(([key, filter]) => {
        if (key === "date") return null;

        const typedFilter = filter as FilterOption;
        const values = ["All", ...(typedFilter.values)];

        return (
          <div key={key}>
            <SelectFilter
              key={key}
              values={values}
              selectedValue={typedFilter.selectedValue}
              placeholder={typedFilter.placeholder}
              onChange={typedFilter.onChange}
            />
          </div>
        );
      })}
      <div>
        <ColumnVisibilityToggle table={table} />
      </div>
    </div>
  );
}
