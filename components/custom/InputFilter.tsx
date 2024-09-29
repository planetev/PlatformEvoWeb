"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { ListFilter, RotateCcw, Search } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useDebounce } from "./Debounce";
import { renderStatus } from "@/app/modules/platform/charger/survey/table-survey";
import { renderStatus2 } from "@/app/modules/platform/solar/survey/table/table-list-servey";

const InputFilter = ({
  search,
  setSearch,
  Statusall,
  setSlectedStatus,
  type
}: any) => {
  const [inputValue, setInputValue] = useState(search);

  const debouncedSearch = useDebounce(inputValue, 300); // 300ms delay

  useEffect(() => {
    setSearch(debouncedSearch);
  }, [debouncedSearch, setSearch]);

  const handleSearch = (e: any) => {
    setInputValue(e.target.value);
  };

  const handleStatusSelection = (status: string) => {
    setSlectedStatus((prevStatus: any) => {
      // Check if the status is already selected
      if (prevStatus.includes(status)) {
        // If it's already selected, remove it from the array
        return prevStatus.filter((item: any) => item !== status);
      } else {
        // If it's not selected, add it to the array
        return [...prevStatus, status];
      }
    });
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
            <span className="sr-only sm:not-sr-only">กรอง</span>
          </Button>
        </DropdownMenuTrigger>

        {/* Positioning adjustment to align dropdown */}
        <DropdownMenuContent
          className="w-100 mt-2"
          align="end"
          sideOffset={5}
          style={{ zIndex: 10 }}
        >
          <div className="flex justify-between items-center px-2 py-1.5">
            <DropdownMenuItem
              onSelect={() => setSlectedStatus([])}
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              <RotateCcw className="h-4 w-4 mr-0" />
            </DropdownMenuItem>
            <DropdownMenuLabel className="font-semibold">
              สถานะการสำรวจ
            </DropdownMenuLabel>
          </div>
          <DropdownMenuSeparator />
          {Statusall?.map((item: any, index: number) => (
            <>
              <DropdownMenuItem
                key={index}
                onClick={() => handleStatusSelection(item.name)}
              >
                <div className="flex items-center">
                  <span className="mr-2">Filter by</span>
                  { type === 2 ? renderStatus2(item.name) : renderStatus(item.name)}

                </div>
              </DropdownMenuItem>
            </>
          ))}

          {/* <DropdownMenuItem onClick={() => console.log("Filter by Category")}>
            Filter by Category
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => console.log("Filter by Status")}>
            Filter by Status
          </DropdownMenuItem> */}
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default InputFilter;
