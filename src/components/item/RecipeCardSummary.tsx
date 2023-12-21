import { useContext } from "react";

import Price from "@components/Price";
import { type ItemFindUniqueOutput } from "~/pages/item/[id]";

import { RecipeContext } from "./RecipeCard";
import { useTranslation } from "next-i18next";

interface RecipeCardSummaryProps {
  item: ItemFindUniqueOutput;
  recipeQty: number;
}

const RecipeCardSummary: React.FC<RecipeCardSummaryProps> = ({
  item,
  recipeQty,
}) => {
  const { t } = useTranslation();
  const recipeContext = useContext(RecipeContext);

  if (!recipeContext) return <></>;

  const totalCost = recipeContext.cartRecords.reduce(
    (acc, curr) => acc + curr.totalCost,
    0,
  );

  return (
    <>
      <div className={`grid space-x-1 md:grid-cols-1 lg:grid-cols-3`}>
        <div
          className={`flex flex-row items-center space-x-2 bg-neutral-800 p-2 pl-10`}
        >
          <span className="text-lg font-semibold">
            {t("pages.item.recipe.totalCost")}
          </span>
        </div>
        <div
          className={`flex flex-row items-center justify-end space-x-2 bg-neutral-800 p-2`}
        >
          <span className="flex w-28 items-center justify-end border border-xoPrimary bg-black px-2 py-1 text-right text-white">
            <Price value={totalCost} />
          </span>
        </div>
        <div
          className={`text-lg font-semibold flex flex-row items-center justify-start space-x-2 bg-neutral-800 p-2`}
        >
          {recipeQty > 1 && (<>
            <span>{` / ${t("pages.item.recipe.recipeQty")} [ ${recipeQty} ] = `}</span><Price value={totalCost/recipeQty} /></>
          )}
        </div>
      </div>
    </>
  );
};

export default RecipeCardSummary;
