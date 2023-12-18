import { useTranslation } from "next-i18next";
import { useContext, useState } from "react";

import Alert from "@components/Alert";
import Item from "@components/Item";
import Price from "@components/Price";
import PrimaryButton from "@components/PrimaryButton";
import { useIsMediumDevice } from "~/lib/mediaQueryHooks";
import { calculateFloatPrice } from "~/lib/priceCalc";

import { type BOMRecord, RecipeContext } from "./RecipeCard";

interface RecipeCardBOMRowProps {
  bomRecord: BOMRecord;
}

const RecipeCardBOMRow: React.FC<RecipeCardBOMRowProps> = ({ bomRecord }) => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const isMediumDevice = useIsMediumDevice();
  const bomContext = useContext(RecipeContext);
  const bomState = bomContext?.bomRecords.find(
    (x) => x.condensedItem.id === bomRecord.condensedItem.id,
  );

  const [customPrice, setCustomPrice] = useState(
    calculateFloatPrice(0).toFixed(2),
  );

  const changePrice = (newPrice: number) => {
    if (bomState && bomContext) {
      // Build new state
      const newTotalCost = newPrice * bomState.quantity;
      bomContext.setBomRecords([
        { ...bomState, price: newPrice, totalCost: newTotalCost },
        ...bomContext.bomRecords.filter(
          (x) => x.condensedItem.id !== bomRecord.condensedItem.id,
        ),
      ]);
    }
  };

  const craftCost = bomState?.craftCost ?? 0;
  const sellPriceMin = bomRecord.sellPriceMin ?? 0;
  const buyPriceMax = bomRecord.buyPriceMax ?? 0;
  const price = bomState?.price ?? 0;
  const totalCost = bomRecord.totalCost ?? 0;
  const sharedStyleClasses = "bg-neutral-800 p-2";

  return (
    <>
      <div className={`grid space-x-1 md:grid-cols-1 lg:grid-cols-3`}>
        <div
          className={`flex flex-row items-center space-x-2 ${sharedStyleClasses} pl-10`}
        >
          <Item
            name={bomRecord.condensedItem.name}
            id={bomRecord.condensedItem.id}
            rarityId={bomRecord.condensedItem.rarityId}
            size="small"
          />
        </div>
        <div
          className={`flex flex-row items-center justify-start space-x-2 ${sharedStyleClasses}`}
        >
          <span>{`Quantity ${bomState?.quantity} x`}</span>
          <span className="border border-xoPrimary bg-black px-2 text-right text-white hover:border-white focus:border-xoQuaternary focus:shadow focus:shadow-orange-500 focus:outline-none">
            <Price value={price} />
          </span>
          <span>=</span>
          <span className="border border-xoPrimary bg-black px-2 text-right text-white hover:border-white focus:border-xoQuaternary focus:shadow focus:shadow-orange-500 focus:outline-none">
            <Price value={totalCost} />
          </span>
        </div>
        <div>
          <div
            className={`flex flex-row space-x-2 md:justify-start lg:justify-end ${sharedStyleClasses}`}
          >
            {price === 0 && (
              <Alert message={"Item is not available\n on the market"} />
            )}
            <input
              type="text"
              size={8}
              className="border border-xoPrimary bg-black px-2 text-right text-white hover:border-white focus:border-xoQuaternary focus:shadow focus:shadow-orange-500 focus:outline-none"
              value={customPrice}
              onChange={(e) => {
                setCustomPrice(e.target.value);
              }}
              onBlur={(e) => {
                changePrice(parseFloat(e.target.value) * 100);
              }}
            />
            <PrimaryButton
              disabled={craftCost === 0}
              onClick={() => {
                changePrice(craftCost);
                setCustomPrice(calculateFloatPrice(craftCost).toFixed(2));
              }}
              active={price !== 0 && price === craftCost}
            >
              <Price value={craftCost} />
            </PrimaryButton>
            <PrimaryButton
              disabled={buyPriceMax === 0}
              onClick={() => {
                changePrice(buyPriceMax);
                setCustomPrice(calculateFloatPrice(buyPriceMax).toFixed(2));
              }}
              active={price !== 0 && price === buyPriceMax}
            >
              <Price value={buyPriceMax} />
            </PrimaryButton>
            <PrimaryButton
              disabled={sellPriceMin === 0}
              onClick={() => {
                changePrice(sellPriceMin);
                setCustomPrice(calculateFloatPrice(sellPriceMin).toFixed(2));
              }}
              active={price !== 0 && price === sellPriceMin}
            >
              <Price value={sellPriceMin} />
            </PrimaryButton>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecipeCardBOMRow;
