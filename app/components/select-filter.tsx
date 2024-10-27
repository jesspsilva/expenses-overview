import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";
  
  export default function SelectFilter({
    values,
    selectedValue,
    placeholder,
    onChange,
  }: {
    values: string[];
    selectedValue: string;
    placeholder: string;
    onChange: (value: string) => void;
  }) {
    return (
      <Select onValueChange={onChange} value={selectedValue}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {values.map((value) => {
            return (
              <SelectItem key={value} value={value}>
                {value}
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
    );
  }
  