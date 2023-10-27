import DataTable, { CategoryData, RarityData } from './DataTable';
import { createColumnHelper } from '@tanstack/react-table';
import Item from './Item';
import Price from './Price';
import { useMemo } from 'react';
import { useTranslation } from "next-i18next";
import { notFound } from 'next/navigation';
import { ItemFindManyWithMarketOutput } from '~/pages/index';

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
    const { t } = useTranslation(['common','model']);
    const columnHelper = createColumnHelper<ItemFindManyWithMarketOutput>();

    const columns = useMemo(() => [
        columnHelper.accessor(row => row.id, {
            id: 'item',
            header: t("model:item"),
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
            header: t("model:name"),
            enableHiding: true,
            enableGlobalFilter: true,
        }),
        columnHelper.accessor(
            row => { return row.type; },
            {
                id: 'itemTypeName',
                header: t("model:type"),
                enableHiding: true,
                enableGlobalFilter: true,
            },
        ),
        columnHelper.accessor(row => row.rarityId, {
            id: 'rarityId',
            header: t("model:rarity"),
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
            header: t("model:category"),
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
            header: t("model:marketModel.sellPriceMin"),
            cell: props => {
                const val = props.getValue();
                return val !== undefined ? <Price className="justify-end" value={val} /> : 'N/A';
            },
            enableGlobalFilter: false,
        }),
        columnHelper.accessor(row => row.market[0]?.sellOrders, {
            id: 'sellOffers',
            header: t("model:marketModel.sellOrders"),
            cell: props => {
                const val = props.getValue();
                return val ?? 'N/A';
            },
            enableGlobalFilter: false,
        }),
        columnHelper.accessor(row => row.market[0]?.buyPriceMax, {
            id: 'buyPrice',
            header: t("model:marketModel.buyPriceMax"),
            cell: props => {
                const val = props.getValue();
                return val !== undefined ? <Price className="justify-end" value={val} /> : 'N/A';
            },
            enableGlobalFilter: false,
        }),
        columnHelper.accessor(row => row.market[0]?.buyOrders, {
            id: 'buyOrders',
            header: t("model:marketModel.buyOrders"),
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
                header: t("model:marketModel.profit"),
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
                header: t("model:marketModel.roi"),
                cell: props => {
                    const val = props.getValue();
                    return val !== undefined ? val.toFixed(2) + '%' : 'N/A';
                },
                enableGlobalFilter: false,
            },
        ),
    ], []);

    if (!data) return <p>{t("notFound")}</p>;

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
