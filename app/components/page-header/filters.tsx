"use client";

import { CrossCircledIcon } from "@radix-ui/react-icons";
import { useCallback } from "react";

import { Button } from "@/components/ui/button";
import Combobox from "@/components/ui/combobox";

import type { FilterOption, PageHeaderProps } from "./page-header";

type FiltersProps = Pick<PageHeaderProps, "filters">;

export default function Filters({ filters }: FiltersProps) {
  const clearFilters = useCallback(() => {
    Object.entries(filters).forEach(([key, filter]) => {
      if (key !== "date") {
        const typedFilter = filter as FilterOption;
        typedFilter.onChange("");
      }
    });
  }, [filters]);

  return (
    <div className="flex gap-4 mt-4 p-4 border border-slate-200 border-solid rounded-sm lg:items-end lg:flex-row flex-col">
      <div className="flex gap-4 lg:flex-row flex-col">
        {Object.entries(filters).map(([key, filter]) => {
          if (key === "date") return null;

          const typedFilter = filter as FilterOption;
          const values = ["All", ...typedFilter.values];

          return (
            <div key={key}>
              <p className="text-xs mb-1">{typedFilter.label}</p>
              <Combobox
                values={values}
                selectedValue={typedFilter.selectedValue}
                placeholder={typedFilter.placeholder}
                onChange={typedFilter.onChange}
              />
            </div>
          );
        })}
      </div>
      <Button variant="secondary" onClick={() => clearFilters()}>
        <CrossCircledIcon />
        Clear filters
      </Button>
    </div>
  );
}
