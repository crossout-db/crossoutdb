"use client";
import { type Category, type Rarity } from "@prisma/client";
import {
  useReactTable,
  getCoreRowModel,
  type SortingState,
  getSortedRowModel,
  flexRender,
  type VisibilityState,
  type ColumnFiltersState,
  getFilteredRowModel,
  type Table,
  type HeaderGroup,
  type PaginationState,
  getPaginationRowModel,
} from "@tanstack/react-table";
import { useTranslation } from "next-i18next";
import React, { useState } from "react";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  ChevronsLeft,
  ChevronsRight,
  Search,
} from "react-feather";

import rarityStyles from "~/lib/rarityStyles";

import DebouncedInput from "./DebouncedInput";
import TableButton from "./TableButton";
import { CategoryFilter, RarityFilter } from "./TableButtons";
import TextField from "./TextField";

const DataTable = ({
  columns,
  data,
  rarities,
  categories,
}: {
  columns: any[];
  data: any[];
  categories?: Category[];
  rarities?: Rarity[];
}) => {
  const [sorting, setSorting] = useState<SortingState>([]);

  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [globalFilter, setGlobalFilter] = useState("");
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 7,
  });

  const hiddenColumns = columns
    .filter((c) => c.enableHiding)
    .map((c) => {
      return { [c.id as string]: false };
    });
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({
    ...Object.assign({}, ...hiddenColumns),
  });

  const table = useReactTable({
    data: data,
    columns: columns,
    state: {
      sorting,
      columnVisibility,
      columnFilters,
      globalFilter,
      pagination: pagination,
    },
    onColumnVisibilityChange: setColumnVisibility,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onGlobalFilterChange: setGlobalFilter,
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  const {
    getHeaderGroups,
    getRowModel,
    nextPage,
    previousPage,
    setPageIndex,
    getPageCount,
    getCanNextPage,
    getCanPreviousPage,
  } = table;
  const currentPageIndex = pagination.pageIndex;
  const { t } = useTranslation();

  const pageButtons = [];
  const prevBtnMin = Math.max(
    0,
    currentPageIndex - 2 - Math.max(currentPageIndex - getPageCount() + 3, 0),
  );
  const nextBtnMax = Math.min(
    currentPageIndex + 5 - Math.min(currentPageIndex, 2),
    getPageCount(),
  );
  for (let i = prevBtnMin; i < nextBtnMax; i++) {
    pageButtons.push(
      <TableButton
        key={i + 1}
        size="large"
        active={currentPageIndex === i}
        Content={(i + 1).toString()}
        type="text"
        onClick={() => setPageIndex(i)}
      />,
    );
  }

  return (
    <>
      <div className="space-x-3">
        <div className="inline-flex flex-col space-y-0.5">
          <span className="text-white">{t("search")}</span>
          <div className="inline">
            <DebouncedInput value={globalFilter} onChange={setGlobalFilter}>
              <TextField size={20} icon={Search} />
            </DebouncedInput>
          </div>
        </div>

        {categories && (
          <CategoryFilter
            column={table.getColumn("categoryId")}
            data={categories}
          />
        )}
        {rarities && (
          <RarityFilter column={table.getColumn("rarityId")} data={rarities} />
        )}
      </div>
      <table className="table w-full border-separate border-spacing-y-2 text-white">
        <thead>
          {getHeaderGroups().map((headerGroup: HeaderGroup<any>) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header, idx) => (
                <th
                  key={header.id}
                  style={idx > 0 ? { width: 100 } : { width: "25%" }}
                >
                  <div
                    className={`flex h-12 select-none px-2 pr-3 font-normal ${
                      header.column.getCanSort() ? "cursor-pointer" : ""
                    } ${
                      header.column.getIsSorted()
                        ? "bg-black"
                        : "bg-neutral-800"
                    }`}
                    onClick={header.column.getToggleSortingHandler()}
                  >
                    <span className="my-auto w-full text-start">
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                    </span>
                    <span className="my-auto w-4 text-end">
                      {{
                        asc: <ChevronUp />,
                        desc: <ChevronDown />,
                      }[header.column.getIsSorted() as string] ?? null}
                    </span>
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {getRowModel().rows.map((row) => {
            // Determine rarity color
            const rarityId = row.getValue("rarityId") as number;
            const rarityOutline = rarityId
              ? rarityStyles(rarityId).hoverOutline
              : "hover:outline-xoBase";

            return (
              <tr
                key={row.id}
                className={`bg-neutral-800 ${rarityOutline} hover:outline`}
              >
                {row.getVisibleCells().map((cell) => {
                  return (
                    <td key={cell.id} className={`pr-3 text-right`}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="float-right space-x-1">
        <TableButton
          size={"large"}
          disabled={!getCanPreviousPage()}
          Content={ChevronsLeft}
          type="Icon"
          onClick={() => setPageIndex(0)}
        />
        <TableButton
          size={"large"}
          disabled={!getCanPreviousPage()}
          Content={ChevronLeft}
          type="Icon"
          onClick={previousPage}
        />
        {pageButtons}
        <TableButton
          size={"large"}
          disabled={!getCanNextPage()}
          Content={ChevronRight}
          type="Icon"
          onClick={nextPage}
        />
        <TableButton
          size={"large"}
          disabled={!getCanNextPage()}
          Content={ChevronsRight}
          type="Icon"
          onClick={() => setPageIndex(getPageCount() - 1)}
        />
      </div>
    </>
  );
};

export default DataTable;
