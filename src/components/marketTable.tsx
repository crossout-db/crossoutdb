import React, { useMemo } from "react";
import { MaterialReactTable, type MRT_ColumnDef } from "material-react-table";
import { api, type RouterOutputs } from "~/utils/api";
import Link from "next/link";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

type ItemFindManyWithMarketOutput =
  RouterOutputs["item"]["findManyWithMarket"][number];

dayjs.extend(relativeTime);

export const MarketTable = () => {
  const { data, isLoading } = api.item.findManyWithMarket.useQuery({});

  //should be memoized or stable
  const columns = useMemo<MRT_ColumnDef<ItemFindManyWithMarketOutput>[]>(
    () => [
      {
        accessorKey: "id",
        header: "id",
        size: 80,
      },
      {
        accessorKey: "name",
        header: "name",
        //FIXME: Correct
        Cell: (props) => (
          <Link
            className="link-primary link"
            href={`/item/${props.row.original.id}`}
          >
            {props.row.original.name}
          </Link>
        ),
        // size: 150,
      },
      {
        accessorFn: (originalRow) => originalRow.type.name ?? -1,
        header: "type",
      },
      {
        accessorFn: (originalRow) => originalRow.category.name ?? -1,
        header: "category",
      },
      {
        accessorFn: (originalRow) => originalRow.faction.name ?? -1,
        header: "faction",
      },
      {
        accessorFn: (originalRow) => originalRow.rarity.name ?? -1,
        header: "rarity",
      },
      {
        accessorFn: (originalRow) => originalRow.market[0]?.sellPriceMin ?? -1,
        header: "sellPriceMin",
        // size: 150,
      },
      {
        accessorFn: (originalRow) => originalRow.market[0]?.sellOrders ?? -1,
        header: "sellOrders",
        // size: 150,
      },
      {
        accessorFn: (originalRow) => originalRow.market[0]?.buyPriceMax ?? -1,
        header: "buyPriceMax",
        // size: 150,
      },
      {
        accessorFn: (originalRow) => originalRow.market[0]?.buyOrders ?? -1,
        header: "buyOrders",
        // size: 150,
      },
      {
        accessorFn: (originalRow) => originalRow.market[0]?.craftCost ?? -1,
        header: "craftCost",
        // size: 150,
      },
      {
        accessorFn: (originalRow) =>
          dayjs(originalRow.market[0]?.timestamp).fromNow() ?? -1,
        header: "updated",
        // size: 150,
      },
    ],
    [],
  );

  return (
    <MaterialReactTable
      columns={columns}
      data={data ?? []}
      state={{ isLoading: isLoading }}
    />
  );
};
