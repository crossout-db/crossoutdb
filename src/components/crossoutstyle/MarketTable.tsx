import DataTable, { type CategoryData, type RarityData } from "./DataTable";
import { createColumnHelper } from "@tanstack/react-table";
import Item from "./Item";
import Price from "./Price";
import { useMemo } from "react";
import { useTranslation } from "next-i18next";
import { type ItemFindManyWithMarketOutput } from "~/pages/index";

// Define the props
interface MarketTableProps {
  data: ItemFindManyWithMarketOutput[];
  categories: CategoryData;
  rarities: RarityData;
}

// Use the props in the function component
const MarketTable: React.FC<MarketTableProps> = ({
  data,
  categories,
  rarities,
}) => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const columnHelper = createColumnHelper<ItemFindManyWithMarketOutput>();

  const columns = useMemo(
    () => [
      columnHelper.accessor((row) => row.id, {
        id: "item",
        header: t("fields.item"),
        cell: (props) => {
            const item = props.row.original;
          return (
            <Item
              id={item.id}
              name={
                item.translations.find(
                  (tf) => tf.languageCode === lang,
                )?.value ?? item.name
              }
              type={
                t(`db.type.${item.type.name}`) ?? item.type.name
              }
              rarityId={item.rarityId}
              size="large"
            />
          );
        },
        enableGlobalFilter: false,
      }),
      columnHelper.accessor((row) => row.name, {
        id: "availableName",
        header: t("fields.name"),
        enableHiding: true,
        enableGlobalFilter: true,
      }),
      columnHelper.accessor(
        (row) => {
          return row.type;
        },
        {
          id: "itemTypeName",
          header: t("fields.type"),
          enableHiding: true,
          enableGlobalFilter: true,
        },
      ),
      columnHelper.accessor((row) => row.rarityId, {
        id: "rarityId",
        header: t("fields.rarity"),
        enableHiding: true,
        enableGlobalFilter: false,
        filterFn: (row, columnId: string, filterValue: number[]) => {
          return (
            filterValue.length === 0 ||
            filterValue.includes(parseInt(row.getValue(columnId)))
          );
        },
      }),
      columnHelper.accessor((row) => row.categoryId, {
        id: "categoryId",
        header: t("fields.category"),
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
      columnHelper.accessor((row) => row.sellPriceMin ?? 0, {
        id: "sellPrice",
        header: t("fields.sellPriceMin"),
        cell: (props) => {
          const val = props.getValue();
          return val !== undefined ? (
            <Price className="justify-end" value={val} />
          ) : (
            "N/A"
          );
        },
        enableGlobalFilter: false,
      }),
      columnHelper.accessor((row) => row.sellOrders ?? 0, {
        id: "sellOffers",
        header: t("fields.sellOrders"),
        cell: (props) => {
          const val = props.getValue();
          return val ?? "N/A";
        },
        enableGlobalFilter: false,
      }),
      columnHelper.accessor((row) => row.buyPriceMax ?? 0, {
        id: "buyPrice",
        header: t("fields.buyPriceMax"),
        cell: (props) => {
          const val = props.getValue();
          return val !== undefined ? (
            <Price className="justify-end" value={val} />
          ) : (
            "N/A"
          );
        },
        enableGlobalFilter: false,
      }),
      columnHelper.accessor((row) => row.buyOrders ?? 0, {
        id: "buyOrders",
        header: t("fields.buyOrders"),
        cell: (props) => {
          const val = props.getValue();
          return val ?? "N/A";
        },
        enableGlobalFilter: false,
      }),
      columnHelper.accessor((row) => row.craftCost ?? 0, {
        id: "craftCost",
        header: t("fields.craftCost"),
        cell: (props) => {
          const val = props.getValue();
          return val !== undefined ? (
            <Price className="justify-end" value={val} />
          ) : (
            "N/A"
          );
        },
        enableGlobalFilter: false,
      }),
      columnHelper.accessor(
        (row) => {
          const sellPrice = row.sellPriceMin ?? 0;
          const buyPrice = row.buyPriceMax ?? 0;
          return (
            sellPrice && buyPrice && sellPrice - buyPrice - sellPrice * 0.1
          );
        },
        {
          id: "profit",
          header: t("fields.profit"),
          cell: (props) => {
            const val = props.getValue();
            return val !== undefined ? (
              <Price className="justify-end" value={val} />
            ) : (
              "N/A"
            );
          },
          enableGlobalFilter: false,
        },
      ),
      columnHelper.accessor(
        (row) => {
          const sellPrice = row.market[0]?.sellPriceMin;
          const buyPrice = row.market[0]?.buyPriceMax;
          return (
            sellPrice &&
            buyPrice &&
            infToZero((sellPrice - buyPrice - sellPrice * 0.1) / buyPrice) * 100
          );
        },
        {
          id: "roi",
          header: t("fields.roi"),
          cell: (props) => {
            const val = props.getValue();
            return val !== undefined ? val.toFixed(2) + "%" : "N/A";
          },
          enableGlobalFilter: false,
        },
      ),
    ],
    [],
  );

  if (!data) return <p>{t("notFound")}</p>;

  return (
    <DataTable
      columns={columns}
      data={data}
      rarities={rarities}
      categories={categories}
    />
  );
};

function infToZero(value: number) {
  return value !== Infinity ? value : 0;
}

export default MarketTable;