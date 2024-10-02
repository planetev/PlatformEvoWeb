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
  type,
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
      <div className="relative w-full max-w-sm mx-auto md:max-w-md lg:max-w-lg xl:max-w-xl">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
        <Input
          type="text"
          placeholder="Search..."
          name="search"
          value={inputValue}
          onChange={(e) => handleSearch(e)}
          autoFocus
          className="w-full rounded-lg bg-background pl-10 pr-4 py-2.5 border-2 border-dashed focus:border-solid focus:border-primary transition-all duration-300 ease-in-out"
        />
      </div>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            size="lg"
            className="h-10 text-sm px-4 border-2 border-dashed flex items-center gap-2 w-full sm:w-auto"
          >
            <ListFilter className="h-4 w-4" />
            <span className="sm:hidden">กรอง</span>
            <span className="hidden sm:inline">กรอง</span>
          </Button>
        </DropdownMenuTrigger>

        {/* Positioning adjustment to align dropdown */}
        <DropdownMenuContent
          className="w-[280px] sm:w-[320px] mt-2"
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
              <span className="hidden sm:inline ml-2 text-sm">รีเซ็ต</span>
            </DropdownMenuItem>
            <DropdownMenuLabel className="font-semibold text-sm sm:text-base">
              สถานะการสำรวจ
            </DropdownMenuLabel>
          </div>
          <DropdownMenuSeparator />
          <div className="max-h-[200px] overflow-y-auto">
            {Statusall?.map((item: any, index: number) => (
              <>
                <DropdownMenuItem
                  key={index}
                  onClick={() => handleStatusSelection(item.name)}
                  className="flex items-center py-2 px-4 hover:bg-accent cursor-pointer"
                >
                  <div className="flex items-center">
                  <span className="mr-2 text-sm">Filter by</span>
                    {type === 2
                      ? renderStatus2(item.name)
                      : renderStatus(item.name)}
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
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default InputFilter;
