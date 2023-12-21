import { useTranslation } from "next-i18next";
import { useContext, useState } from "react";

import Alert from "@components/Alert";
import Item from "@components/Item";
import Price from "@components/Price";
import PrimaryButton from "@components/PrimaryButton";
import { useIsMediumDevice } from "~/lib/mediaQueryHooks";
import { calculateFloatPrice } from "~/lib/priceCalc";

import { type CartRecord as CartRecord, RecipeContext } from "./RecipeCard";

interface RecipeCardCartRowProps {
  cartRecord: CartRecord;
}

const RecipeCardCartRow: React.FC<RecipeCardCartRowProps> = ({ cartRecord }) => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const isMediumDevice = useIsMediumDevice();
  const recipeContext = useContext(RecipeContext);
  const cartState = recipeContext?.cartRecords.find(
    (x) => x.condensedItem.id === cartRecord.condensedItem.id,
  );

  const [customPrice, setCustomPrice] = useState(
    calculateFloatPrice(0).toFixed(2),
  );

  const changePrice = (newPrice: number) => {
    if (cartState && recipeContext) {
      // Build new state
      const newTotalCost = newPrice * cartState.quantity;
      recipeContext.setCartRecords([
        { ...cartState, price: newPrice, totalCost: newTotalCost },
        ...recipeContext.cartRecords.filter(
          (x) => x.condensedItem.id !== cartRecord.condensedItem.id,
        ),
      ]);
    }
  };

  const craftCost = cartState?.craftCost ?? 0;
  const sellPriceMin = cartRecord.sellPriceMin ?? 0;
  const buyPriceMax = cartRecord.buyPriceMax ?? 0;
  const price = cartState?.price ?? 0;
  const totalCost = cartRecord.totalCost ?? 0;
  const sharedStyleClasses = "bg-neutral-800 p-2";

  return (
    <>
      <div className={`grid space-x-1 md:grid-cols-1 lg:grid-cols-3`}>
        <div
          className={`flex flex-row items-center space-x-2 ${sharedStyleClasses} pl-10`}
        >
          <Item
            name={cartRecord.condensedItem.name}
            id={cartRecord.condensedItem.id}
            rarityId={cartRecord.condensedItem.rarityId}
            size="small"
          />
        </div>
        <div
          className={`flex flex-row items-center justify-end space-x-2 ${sharedStyleClasses}`}
        >
          {price === 0 && (
            <Alert message={"Item is not available\n on the market"} />
          )}{" "}
          <span>{t("fields.quantity")}</span>
          <span className="flex w-16 items-center justify-end border border-xoPrimary bg-black px-2 py-1 text-right text-white">
          {cartState?.quantity}
          </span>
          <span>x</span>
          <span className="flex w-28 items-center justify-end border border-xoPrimary bg-black px-2 py-1 text-right text-white">
            <Price value={price} />
          </span>
          <span>=</span>
          <span className="flex w-28 items-center justify-end border border-xoPrimary bg-black px-2 py-1 text-right text-white">
            <Price value={totalCost} />
          </span>
        </div>
        <div>
          <div
            className={`flex flex-row space-x-2 md:justify-start lg:justify-end ${sharedStyleClasses}`}
          >
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
              justify="end"
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
              justify="end"
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
              justify="end"
            >
              <Price value={sellPriceMin} />
            </PrimaryButton>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecipeCardCartRow;
