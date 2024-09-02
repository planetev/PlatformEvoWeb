"use client";
import React, { useMemo } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const TableCustom = ({ rows, data }: any) => {
  // Memoize the table rows and data to prevent unnecessary re-renders
  const renderedRows = useMemo(() => {
    return (
      <Table>
        <TableHeader>
          <TableRow>
            {rows.map((row: any) => (
              <TableHead key={row.id}>{row.columname}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.map((item: any) => (
            <TableRow key={item.id} className="bg-white">
              {rows.map((column: any) => (
                <TableCell key={column.id} className={column.cls}>
                  {column.render ? column.render(item) : item[column.columname]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  }, [rows, data]);

  return renderedRows;
};

export default TableCustom;
