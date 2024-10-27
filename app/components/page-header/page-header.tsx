import DateRangePicker from "@/components/date-range-picker";

import type { DateRange, SelectRangeEventHandler } from "react-day-picker";

export default function PageHeader({ date, onSelect }: { date: DateRange, onSelect: SelectRangeEventHandler }) {
  return (
    <>
      <DateRangePicker
        date={date}
        onSelect={onSelect}
      />
    </>
  );
}
