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
      <div>
        <p className="text-sm font-medium mb-1">Date:</p>
        <DateRangePicker date={date} onSelect={onChange.date} />
      </div>
      <div>
        <p className="text-sm font-medium mb-1">Category:</p>
        <SelectFilter
          values={filters.categories.values}
          selectedValue={filters.categories.selectedValue}
          placeholder={filters.categories.placeholder}
          onChange={onChange.category}
        />
      </div>

      <div>
        <p className="text-sm font-medium mb-1">Card:</p>
        <SelectFilter
          values={filters.cards.values}
          selectedValue={filters.cards.selectedValue}
          placeholder={filters.cards.placeholder}
          onChange={onChange.card}
        />
      </div>
      <div>
        <p className="text-sm font-medium mb-1">Owner:</p>
        <SelectFilter
          values={filters.owners.values}
          selectedValue={filters.owners.selectedValue}
          placeholder={filters.owners.placeholder}
          onChange={onChange.owner}
        />
      </div>
    </div>
  );
}
