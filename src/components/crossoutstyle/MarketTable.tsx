import DataTable, { CategoryData, RarityData } from './DataTable';
import { createColumnHelper } from '@tanstack/react-table';
import Item from './Item';
import Price from './Price';
import { type RouterOutputs } from '~/utils/api';
import { useMemo } from 'react';

type ItemFindManyWithMarketOutput =
    RouterOutputs["item"]["findManyWithMarket"][number];

export default function MarketTable({
    data,
    categories,
    rarities,
    lang,
}: {
    data: any;
    categories: CategoryData;
    rarities: RarityData;
    lang: string;
}) {
    const columnHelper = createColumnHelper<ItemFindManyWithMarketOutput>();

    const columns = useMemo(() => [
        columnHelper.accessor(row => row.id, {
            id: 'item',
            header: 'Item',
            cell: props => {
                return (
                    <Item
                        id={props.row.original.id}
                        name={props.row.original.name}
                        type={props.row.original.type.name}
                        rarityId={props.row.original.rarityId}
                        size="large"
                    />
                );
            },
            enableGlobalFilter: false,
        }),
        columnHelper.accessor(row => row.name, {
            id: 'availableName',
            header: 'Name',
            enableHiding: true,
            enableGlobalFilter: true,
        }),
        columnHelper.accessor(
            row => { return row.type; },
            {
                id: 'itemTypeName',
                header: 'Type',
                enableHiding: true,
                enableGlobalFilter: true,
            },
        ),
        columnHelper.accessor(row => row.rarityId, {
            id: 'rarityId',
            header: 'rarityId',
            enableHiding: true,
            enableGlobalFilter: false,
            filterFn: (row, columnId: string, filterValue: number[]) => {
                return (
                    filterValue.length === 0 ||
                    filterValue.includes(parseInt(row.getValue(columnId)))
                );
            },
        }),
        columnHelper.accessor(row => row.categoryId, {
            id: 'categoryId',
            header: 'categoryId',
            enableHiding: true,
            enableGlobalFilter: false,
            filterFn: (row, columnId: string, filterValue: number[]) => {
                return (
                    filterValue.length === 0 ||
                    filterValue.includes(0) ||
                    filterValue.includes(parseInt(row.getValue(columnId)))
                );
            },
        }),
        columnHelper.accessor(row => row.market[0]?.sellPriceMin, {
            id: 'sellPrice',
            header: 'Sold for (min.)',
            cell: props => {
                const val = props.getValue();
                return val !== undefined ? <Price className="justify-end" value={val} /> : 'N/A';
            },
            enableGlobalFilter: false,
        }),
        columnHelper.accessor(row => row.market[0]?.sellOrders, {
            id: 'sellOffers',
            header: 'Offers',
            cell: props => {
                const val = props.getValue();
                return val ?? 'N/A';
            },
            enableGlobalFilter: false,
        }),
        columnHelper.accessor(row => row.market[0]?.buyPriceMax, {
            id: 'buyPrice',
            header: 'Bought for (max.)',
            cell: props => {
                const val = props.getValue();
                return val !== undefined ? <Price className="justify-end" value={val} /> : 'N/A';
            },
            enableGlobalFilter: false,
        }),
        columnHelper.accessor(row => row.market[0]?.buyOrders, {
            id: 'buyOrders',
            header: 'Orders',
            cell: props => {
                const val = props.getValue();
                return val ?? 'N/A';
            },
            enableGlobalFilter: false,
        }),
        columnHelper.accessor(
            row => {
                const sellPrice = row.market[0]?.sellPriceMin;
                const buyPrice = row.market[0]?.buyPriceMax;
                return sellPrice && buyPrice && sellPrice - buyPrice - sellPrice * 0.1;
            },
            {
                id: 'profit',
                header: 'Profit',
                cell: props => {
                    const val = props.getValue();
                    return val !== undefined ? <Price className="justify-end" value={val} /> : 'N/A';
                },
                enableGlobalFilter: false,
            },
        ),
        columnHelper.accessor(
            row => {
                const sellPrice = row.market[0]?.sellPriceMin;
                const buyPrice = row.market[0]?.buyPriceMax;
                return sellPrice && buyPrice && infToZero((sellPrice - buyPrice - sellPrice * 0.1) / buyPrice) * 100
            },
            {
                id: 'roi',
                header: 'ROI',
                cell: props => {
                    const val = props.getValue();
                    return val !== undefined ? val.toFixed(2) + '%' : 'N/A';
                },
                enableGlobalFilter: false,
            },
        ),
    ], []);

    if (!data) return <p>Not found</p>;

    return (
    <DataTable
            columns={columns}
            data={data}
            rarities={rarities}
            categories={categories}
        />
    );
}

function infToZero(value: number) {
    return value !== Infinity ? value : 0;
}
