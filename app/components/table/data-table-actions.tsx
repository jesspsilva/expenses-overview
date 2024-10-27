import { Button } from "@/components/ui/button";
import type { Table } from "@tanstack/react-table";

export default function DataTableActions<TData>({
  table,
}: {
  table: Table<TData>;
}) {
  const pageCount = table.getPageCount();
  const currentPage = table.getState().pagination.pageIndex + 1;

  return (
    <div className="flex items-center justify-end space-x-2 py-4">
      <p className="text-sm font-medium">Page {currentPage} of {pageCount}</p>
      <Button
        variant="outline"
        size="sm"
        onClick={() => table.previousPage()}
        disabled={!table.getCanPreviousPage()}
      >
        Previous
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={() => table.nextPage()}
        disabled={!table.getCanNextPage()}
      >
        Next
      </Button>
    </div>
  );
}
