'use client';
import {
    ChevronDown,
    ChevronLeft,
    ChevronRight,
    ChevronUp,
    ChevronsLeft,
    ChevronsRight,
    Search,
} from 'react-feather';
import rarityStyles from '../../lib/rarityStyles';
import {
    useReactTable,
    getCoreRowModel,
    SortingState,
    getSortedRowModel,
    flexRender,
    VisibilityState,
    ColumnFiltersState,
    getFilteredRowModel,
    Table,
    HeaderGroup,
    PaginationState,
    getPaginationRowModel,
} from '@tanstack/react-table';
import TextField from './TextField';
import DebouncedInput from './DebouncedInput';
import CategoryButton from './CategoryButton';
import React, { useState } from 'react';
import { uniq } from 'lodash';
import IconButton from './IconButton';
import RarityButton from './RarityButton';

export interface CategoryData {
    categories: Category[];
}

interface Category {
    xodbId: number;
    LocNames: LocName[];
    order: number;
}

interface LocName {
    name: string;
}

export interface RarityData {
    rarities: Rarity[];
}

interface Rarity {
    order: number;
    xodbId: number;
    LocNames: LocName[];
}

const CategoryFilter = ({
    table,
    data,
}: {
    table: Table<any>;
    data?: CategoryData;
}) => {
    const [categories, setCategories] = useState<number[]>([0]);

    if (!data) return <></>;

    const size = 42;

    const handleClick = (category: number) => {
        const column = table.getAllColumns().find(c => c.id === 'categoryId');
        if (column) {
            if (category === 0) {
                setCategories([0]);
                column.setFilterValue([0]);
                return;
            }

            if (categories.includes(category)) {
                let newCategories = categories.filter(c => c !== category);
                newCategories.length === 0 && newCategories.push(0);
                setCategories(newCategories);
                column.setFilterValue(newCategories);
            } else {
                let newCategories = uniq([...categories, category]);
                if (newCategories.length > 0)
                    newCategories = newCategories.filter(c => c !== 0);
                setCategories(newCategories);
                column.setFilterValue(newCategories);
            }
        }
    };

    console.log(data.categories)

    const buttons = [
        ...data.categories
            .filter(cat => cat.xodbId !== 7 && cat.xodbId !== 5 && cat.xodbId !== 10)
            .sort((a, b) => a.order - b.order)
            .map(cat => (
                <CategoryButton
                    key={cat.xodbId}
                    size={size}
                    category={cat.xodbId}
                    onClick={handleClick}
                    active={categories.includes(cat.xodbId)}
                />
            )),
        <CategoryButton
            key={0}
            size={size}
            category={0}
            onClick={handleClick}
            active={categories.includes(0)}
        />,
    ];
    return (
        <div className="inline-flex flex-col space-y-0.5">
            <span className="text-white">Category</span>
            <div className="inline">
                <div className="inline space-x-1">{buttons}</div>
            </div>
        </div>
    );
};

const RarityFilter = ({
    table,
    data,
}: {
    table: Table<any>;
    data?: RarityData;
}) => {
    const [rarities, setRarities] = useState<number[]>([]);

    if (!data) return <></>;

    const handleClick = (rarity: number) => {
        const column = table.getAllColumns().find(c => c.id === 'rarityId');
        if (column) {
            if (rarities.includes(rarity)) {
                let newRarities = rarities.filter(c => c !== rarity);
                setRarities(newRarities);
                column.setFilterValue(newRarities);
            } else {
                let newRarities = uniq([...rarities, rarity]);
                setRarities(newRarities);
                column.setFilterValue(newRarities);
            }
        }
    };

    const buttons = [
        ...data.rarities
            .slice()
            .sort((a, b) => a.order - b.order)
            .map(r => (
                <RarityButton
                    key={r.xodbId}
                    size="large"
                    color={rarityStyles(r.xodbId).backgroundColor}
                    active={rarities.includes(r.xodbId)}
                    onClick={() => {
                        handleClick(r.xodbId);
                    }}
                />
            )),
    ];

    return (
        <div className="inline-flex flex-col space-y-0.5">
            <span className="text-white">Rarity</span>
            <div className="inline">
                <div className="inline space-x-1">{buttons}</div>
            </div>
        </div>
    );
};

const DataTable = ({
    columns,
    data,
    rarities,
    categories,
}: {
    columns: any[];
    data: any[];
    rarities?: RarityData;
    categories?: CategoryData;
}) => {
    const [sorting, setSorting] = useState<SortingState>([]);

    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
    const [globalFilter, setGlobalFilter] = useState('');
    const [pagination, setPagination] = useState<PaginationState>({
        pageIndex: 0,
        pageSize: 7,
    });

    const hiddenColumns = columns
        .filter(c => c.enableHiding)
        .map(c => {
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

    let pageButtons = [];
    const prevBtnMin = Math.max(
        0,
        currentPageIndex -
            2 -
            Math.max(currentPageIndex - getPageCount() + 3, 0),
    );
    const nextBtnMax = Math.min(
        currentPageIndex + 5 - Math.min(currentPageIndex, 2),
        getPageCount(),
    );
    for (let i = prevBtnMin; i < nextBtnMax; i++) {
        pageButtons.push(
            <IconButton
                key={i + 1}
                size="large"
                active={currentPageIndex === i}
                Content={(i + 1).toString()}
                onClick={() => setPageIndex(i)}
            />,
        );
    }

    return (
        <>
            <div className="space-x-3">
                <div className="inline-flex flex-col space-y-0.5">
                    <span className="text-white">Search</span>
                    <div className="inline">
                        <DebouncedInput
                            value={globalFilter}
                            onChange={setGlobalFilter}>
                            <TextField size={20} icon={Search} />
                        </DebouncedInput>
                    </div>
                </div>
                <CategoryFilter table={table} data={categories} />
                <RarityFilter table={table} data={rarities} />
            </div>
            <table className="table w-full border-separate border-spacing-y-2 text-white">
                <thead>
                    {getHeaderGroups().map((headerGroup: HeaderGroup<any>) => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map((header, idx) => (
                                <th
                                    key={header.id}
                                    style={
                                        idx > 0
                                            ? { width: 100 }
                                            : { width: '25%' }
                                    }>
                                    <div
                                        className={`font-normal px-2 h-12 pr-3 flex select-none ${
                                            header.column.getCanSort()
                                                ? 'cursor-pointer'
                                                : ''
                                        } ${
                                            header.column.getIsSorted()
                                                ? 'bg-black'
                                                : 'bg-neutral-800'
                                        }`}
                                        onClick={header.column.getToggleSortingHandler()}>
                                        <span className="text-start w-full my-auto">
                                            {flexRender(
                                                header.column.columnDef.header,
                                                header.getContext(),
                                            )}
                                        </span>
                                        <span className="text-end w-4 my-auto">
                                            {{
                                                asc: <ChevronUp />,
                                                desc: <ChevronDown />,
                                            }[
                                                header.column.getIsSorted() as string
                                            ] ?? null}
                                        </span>
                                    </div>
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody>
                    {getRowModel().rows.map(row => {
                        // Determine rarity color
                        const rarityId = row.getValue('rarityId') as number;
                        const rarityOutline = rarityId
                            ? rarityStyles(rarityId).hoverOutline
                            : 'hover:outline-xoBase';

                        return (
                            <tr
                                key={row.id}
                                className={`bg-neutral-800 ${rarityOutline} hover:outline`}>
                                {row.getVisibleCells().map(cell => {
                                    return (
                                        <td
                                            key={cell.id}
                                            className={`pr-3 text-right`}>
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
            <div className="space-x-1 float-right">
                <IconButton
                    size={'large'}
                    disabled={currentPageIndex === 0}
                    icon
                    Content={ChevronsLeft}
                    onClick={() => setPageIndex(0)}
                />
                <IconButton
                    size={'large'}
                    disabled={!getCanPreviousPage()}
                    icon
                    Content={ChevronLeft}
                    onClick={previousPage}
                />
                {pageButtons}
                <IconButton
                    size={'large'}
                    disabled={!getCanNextPage()}
                    icon
                    Content={ChevronRight}
                    onClick={nextPage}
                />
                <IconButton
                    size={'large'}
                    disabled={currentPageIndex === getPageCount() - 1}
                    icon
                    Content={ChevronsRight}
                    onClick={() => setPageIndex(getPageCount() - 1)}
                />
            </div>
        </>
    );
};

export default DataTable;
