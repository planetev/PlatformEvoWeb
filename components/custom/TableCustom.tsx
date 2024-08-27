"use client";
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const TableCustom = ({ rows, data }: any) => {
  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            {rows.map((row: any) => (
              <React.Fragment key={row.id}>
                <TableHead>{row.columname}</TableHead>
              </React.Fragment>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.map((item: any) => (
            <TableRow key={item.id} className="bg-white">
              {rows?.map((column: any, index: number) => (
                <>
                  <TableCell key={index} className={column.cls}>
                    {column.render
                      ? column.render(item)
                      : item[column.columname]}
                  </TableCell>
                </>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default TableCustom;
