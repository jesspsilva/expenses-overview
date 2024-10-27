import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function CategorySelect({
  categories,
  onChange,
  selectedCategory,
}: {
  categories: string[];
  onChange: (value: string) => void;
  selectedCategory: string;
}) {
  return (
    <Select onValueChange={onChange} value={selectedCategory}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a category" />
      </SelectTrigger>
      <SelectContent>
        {categories.map((category) => {
          return (
            <SelectItem key={category} value={category}>
              {category}
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
}
