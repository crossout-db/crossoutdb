import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { useTranslation } from "next-i18next";

import Price from "@components/Price";
import { calculateProfit, calculateROI } from "~/lib/priceCalc";

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

    const { t } = useTranslation();
    const items = [
        { label: t("fields.sellPriceMin"), value: <Price value={sellPrice} /> },
        { label: t("fields.buyPriceMax"), value: <Price value={buyPrice} /> },
        { label: t("fields.sellOrders"), value: <span>{sellOffers}</span> },
        { label: t("fields.buyOrders"), value: <span>{buyOrders}</span> },
        { label: t("fields.profit"), value: <Price value={calculateProfit(sellPrice, buyPrice, marketFee)} /> },
        { label: t("fields.roi"), value: <span>{calculateROI(sellPrice, buyPrice, marketFee).toFixed(2)}%</span> },

    ];

    return <div className="text-white space-y-2">
        <div className=" p-4 flex flex-row items-baseline space-x-1 bg-neutral-800 justify-between">
            <h1 className="text-2xl">{t("fields.market")}</h1>
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