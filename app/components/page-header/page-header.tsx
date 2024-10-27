import DateRangePicker from "@/components/date-range-picker";
import SelectFilter from "@/components/select-filter";

import type { DateRange } from "react-day-picker";

type FilterOption = {
  values: string[];
  selectedValue: string;
  placeholder: string;
};

type PageHeaderProps = {
  date: DateRange;
  onChange: {
    date: (date: DateRange | undefined) => void;
    category: (category: string) => void;
  };
  filters: {
    categories: FilterOption;
  };
};

export default function PageHeader({
  date,
  onChange,
  filters,
}: PageHeaderProps) {
  return (
    <div className="flex items-center gap-4">
      <DateRangePicker date={date} onSelect={onChange.date} />
      <SelectFilter
        values={filters.categories.values}
        selectedValue={filters.categories.selectedValue}
        placeholder={filters.categories.placeholder}
        onChange={onChange.category}
      />
    </div>
  );
}
