import DateRangePicker from "@/components/date-range-picker";
import CategorySelect from "@/components/page-header/category-select";

import type { DateRange, SelectRangeEventHandler } from "react-day-picker";

export default function PageHeader({
  date,
  onDateSelect,
  categories,
  onCategoryChange,
  selectedCategory,
}: {
  date: DateRange;
  onDateSelect: SelectRangeEventHandler;
  categories: string[];
  onCategoryChange: (value: string) => void;
  selectedCategory: string;
}) {
  return (
    <div className="flex items-center gap-4">
      <DateRangePicker date={date} onSelect={onDateSelect} />
      <CategorySelect categories={categories} onChange={onCategoryChange} selectedCategory={selectedCategory} />
    </div>
  );
}
