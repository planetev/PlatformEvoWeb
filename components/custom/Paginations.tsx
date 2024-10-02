import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import React from "react";

const Paginations = ({ totalRows, pageSize, setPageSize, page, setPage }: any) => {
  const totalPages = Math.ceil(totalRows / pageSize);

  const startRow = (page - 1) * pageSize + 1;
  const endRow = Math.min(page * pageSize, totalRows);

  const handleRowsPerPageChange = (value: any) => {
    setPageSize(parseInt(value));
    setPage(1); // Reset to first page when changing rows per page
  };

  const handlePreviousPage = () => {
    setPage((prev: number) => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setPage((prev: number) => Math.min(prev + 1, totalPages));
  };

  const handleFirstPage = () => {
    setPage(1);
  };

  const handleLastPage = () => {
    setPage(totalPages);
  };

  return (
    <>
   <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 w-full">
      {/* Left Side - Rows Count Display */}
      <div className="text-xs text-muted-foreground w-full sm:w-auto text-center sm:text-left">
        {`0 of ${totalRows} row(s) selected.`}
      </div>

      <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
        <div className="text-xs text-muted-foreground flex items-center space-x-2">
          <span className="whitespace-nowrap">Rows per page</span>
          <Select onValueChange={handleRowsPerPageChange}>
            <SelectTrigger className="w-16">
              <SelectValue placeholder={pageSize} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="10">10</SelectItem>
              <SelectItem value="25">25</SelectItem>
              <SelectItem value="50">50</SelectItem>
              <SelectItem value="100">100</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="text-xs text-muted-foreground whitespace-nowrap">
          {`Page ${page} of ${totalPages}`}
        </div>

        <div className="flex space-x-1">
          <Button
            variant="ghost"
            size="sm"
            onClick={handleFirstPage}
            disabled={page === 1}
            className="p-1 sm:p-2"
          >
            <ChevronsLeft className="h-4 w-4" />
            <span className="sr-only">First page</span>
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={handlePreviousPage}
            disabled={page === 1}
            className="p-1 sm:p-2"
          >
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Previous page</span>
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleNextPage}
            disabled={page === totalPages}
            className="p-1 sm:p-2"
          >
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Next page</span>
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleLastPage}
            disabled={page === totalPages}
            className="p-1 sm:p-2"
          >
            <ChevronsRight className="h-4 w-4" />
            <span className="sr-only">Last page</span>
          </Button>
        </div>
      </div>
    </div>
    </>
  );
};

export default Paginations;
