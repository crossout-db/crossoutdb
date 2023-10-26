import { calculateProfit, calculateROI } from "~/lib/priceCalc";
import Price from "./Price";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

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

    const items = [
        { label: "Sell Price", value: <Price value={sellPrice} /> },
        { label: "Buy Price", value: <Price value={buyPrice} /> },
        { label: "Sell Offers", value: <span>{sellOffers}</span> },
        { label: "Buy Orders", value: <span>{buyOrders}</span> },
        { label: "Profit", value: <Price value={calculateProfit(sellPrice, buyPrice, marketFee)} /> },
        { label: "ROI", value: <span>{calculateROI(sellPrice, buyPrice, marketFee).toFixed(2)}%</span> },

    ];

    return <div className="text-white space-y-2">
        <div className=" p-4 flex flex-row items-baseline space-x-1 bg-neutral-800 justify-between">
            <h1 className="text-2xl">Market</h1>
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