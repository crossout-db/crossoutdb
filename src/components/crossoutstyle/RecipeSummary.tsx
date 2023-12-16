import { useContext } from "react";
import { BOMContext, RecipeContext } from "./RecipeCard";
import Price from "./Price";

interface RecipeSummaryProps {}

const RecipeSummary: React.FC<RecipeSummaryProps> = ({}) => {
  const bomContext = useContext(BOMContext);

  if (!bomContext) return <></>;

  const totalCost = bomContext.value
    .map((x) => x.price * x.quantity)
    .reduce((a, b) => a + b, 0);

  return (
    <>
      <div className={`grid space-x-1 md:grid-cols-1 lg:grid-cols-3`}>
        <div
          className={`flex flex-row items-center space-x-2 bg-neutral-800 p-2 pl-10`}
        ></div>
        <div
          className={`flex flex-row items-center justify-start space-x-2 bg-neutral-800 p-2`}
        ></div>
        <div
          className={`flex flex-row items-center justify-start space-x-2 bg-neutral-800 p-2`}
        >
          <span className="border border-xoPrimary bg-black px-2 text-right text-white hover:border-white focus:border-xoQuaternary focus:shadow focus:shadow-orange-500 focus:outline-none">
            <Price value={totalCost} />
          </span>
        </div>
      </div>
    </>
  );
};

export default RecipeSummary;
