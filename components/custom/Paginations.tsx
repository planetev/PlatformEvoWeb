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
      {/* Left Side - Rows Count Display */}
      <div className="text-xs text-muted-foreground">
        {`0 of ${totalRows} row(s) selected.`}
      </div>

      <div className="flex items-center space-x-4">
        <div className="text-xs text-muted-foreground flex items-center space-x-2">
          <span>Rows per page</span>
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

        <div className="text-xs text-muted-foreground">
          {`Page ${page} of ${totalPages}`}
        </div>

        <div className="flex space-x-1">
          <Button
            variant="ghost"
            size="sm"
            onClick={handleFirstPage}
            disabled={page === 1}
          >
            <ChevronsLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={handlePreviousPage}
            disabled={page === 1}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleNextPage}
            disabled={page === totalPages}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleLastPage}
            disabled={page === totalPages}
          >
            <ChevronsRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </>
  );
};

export default Paginations;
