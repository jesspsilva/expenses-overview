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
    card: (card: string) => void;
    owner: (owner: string) => void;
  };
  filters: {
    categories: FilterOption;
    cards: FilterOption;
    owners: FilterOption;
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
      <SelectFilter
        values={filters.cards.values}
        selectedValue={filters.cards.selectedValue}
        placeholder={filters.cards.placeholder}
        onChange={onChange.card}
      />
      <SelectFilter
        values={filters.owners.values}
        selectedValue={filters.owners.selectedValue}
        placeholder={filters.owners.placeholder}
        onChange={onChange.owner}
      />
    </div>
  );
}
