"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { ListFilter, Search } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useDebounce } from "./Debounce";

const InputFilter = ({ search,setSearch }: any) => {


  const [inputValue, setInputValue] = useState(search);

  // Use the debounce hook to delay the setting of search value
  const debouncedSearch = useDebounce(inputValue, 300); // 300ms delay

  useEffect(() => {
    setSearch(debouncedSearch);
  }, [debouncedSearch, setSearch]);

  const handleSearch = (e: any) => {
    setInputValue(e.target.value);
  };
  return (
    <>
      <div className="relative flex-1 md:grow-0">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Search..."
          name="search"
          value={inputValue}
          onChange={(e) => handleSearch(e)}
          autoFocus

          className="w-full rounded-lg bg-background pl-10 py-2.5 md:w-[200px] lg:w-[336px] border-2 border-dashed"
        />
      </div>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            size="lg"
            className="h-10 text-sm px-4 border-2 border-dashed flex items-center gap-2"
          >
            <ListFilter className="h-4 w-4" />
            <span className="sr-only sm:not-sr-only">Filter</span>
          </Button>
        </DropdownMenuTrigger>

        {/* Positioning adjustment to align dropdown */}
        <DropdownMenuContent
          className="w-48 mt-2"
          align="end"
          sideOffset={5}
          style={{ zIndex: 10 }}
        >
          <DropdownMenuItem onClick={() => console.log("Filter by Date")}>
            Filter by Date
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => console.log("Filter by Category")}>
            Filter by Category
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => console.log("Filter by Status")}>
            Filter by Status
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default InputFilter;
