import { useState } from "react";
import { ChevronDown, ChevronRight } from "react-feather";
import Item from "./Item";
import { groupBy, toArray, sortBy } from "lodash";
import { ItemFindUniqueOutput } from "~/pages/item/[id]";

interface SynergyProps {
  name: string;
  synergyItems: NonNullable<ItemFindUniqueOutput>["itemSynergies"][number]["synergy"]["synergyItems"];
}

const Synergy: React.FC<SynergyProps> = ({ name, synergyItems }) => {
  const [expanded, setExpanded] = useState(false);

  const synergyItemsByCategory = toArray(
    groupBy(synergyItems, (x) => x.item.categoryId),
  );

  return (
    <div className="flex flex-col justify-between space-y-4 bg-neutral-800 px-4 py-3">
      <div
        className="flex cursor-pointer select-none flex-row justify-between space-x-1"
        onClick={() => setExpanded(!expanded)}
      >
        <div className="flex flex-row space-x-1">
          {expanded ? <ChevronDown /> : <ChevronRight />}
          <span className="font-bold">{name}</span>
        </div>
        <span>{synergyItems.length} Items</span>
      </div>

      {expanded && (
        <div className="flex flex-col space-y-2">
          {synergyItemsByCategory.map((category) => (
            <>
              <span className="font-bold">
                {category[0]?.item.category.name}
              </span>
              {sortBy(category, (x) => x.item.rarity.id).map((item) => (
                <Item
                    key={item.item.id}
                    id={item.item.id}
                    name={item.item.name}
                    rarityId={item.item.rarityId}
                    size="medium"
                />
              ))}
            </>
          ))}
        </div>
      )}
    </div>
  );
};

export default Synergy;
