import { calculateProfit, calculateROI } from "~/lib/priceCalc";
import Price from "./Price";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { useTranslation } from "next-i18next";

interface PriceCardProps {
    sellPrice: number;
    buyPrice: number;
    sellOffers: number;
    buyOrders: number;
    marketFee: number;
    timestamp: Date;
}

const PriceCard: React.FC<PriceCardProps> = ({ sellPrice, buyPrice, sellOffers, buyOrders, marketFee, timestamp }) => {

    dayjs.extend(relativeTime);

    const { t } = useTranslation(['common','model']);
    const items = [
        { label: t("model:marketModel.sellPriceMin"), value: <Price value={sellPrice} /> },
        { label: t("model:marketModel.buyPriceMax"), value: <Price value={buyPrice} /> },
        { label: t("model:marketModel.sellOrders"), value: <span>{sellOffers}</span> },
        { label: t("model:marketModel.buyOrders"), value: <span>{buyOrders}</span> },
        { label: t("model:marketModel.profit"), value: <Price value={calculateProfit(sellPrice, buyPrice, marketFee)} /> },
        { label: t("model:marketModel.roi"), value: <span>{calculateROI(sellPrice, buyPrice, marketFee).toFixed(2)}%</span> },

    ];

    return <div className="text-white space-y-2">
        <div className=" p-4 flex flex-row items-baseline space-x-1 bg-neutral-800 justify-between">
            <h1 className="text-2xl">{t("model:market")}</h1>
            <p className="text-sm text-xoPrimary">Updated {dayjs(timestamp).fromNow() ?? -1}</p>
        </div>
        <div className="grid md:grid-flow-col md:grid-rows-2 md:grid-cols-3 sm:grid-cols-1 gap-2">
            {items.map(item => <div key={item.label}>
                <div className="bg-neutral-800 px-4 py-3 flex flex-row justify-between">
                    <span className="font-bold">{item.label}</span>
                    {item.value}
                </div>
            </div>)}
        </div>
    </div>
}

export default PriceCard;