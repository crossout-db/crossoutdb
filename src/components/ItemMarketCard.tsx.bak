import { signIn, signOut, useSession } from "next-auth/react";
import { RouterOutputs } from "~/utils/api";

type ItemfindUniqueOutput = RouterOutputs["item"]["findUnique"];

interface ItemCardProps {
  item: ItemfindUniqueOutput;
}

export const ItemMarketCard: React.FC<ItemCardProps> = ({ item }) => {
  const { data: sessionData } = useSession();

  return (
    <div className="w-200 card bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">Market</h2>
        <table className="table w-full">
          <tbody>
            <tr>
              <th>Sell Price</th>
              <td>{item?.market[0]?.sellPriceMin}</td>
            </tr>
            <tr>
              <th>Buy Price</th>
              <td>{item?.market[0]?.buyPriceMax}</td>
            </tr>
            <tr>
              <th>Margin</th>
              <td></td>
            </tr>
            <tr>
              <th>ROI</th>
              <td></td>
            </tr>
            <tr>
              <th>Sell Offers</th>
              <td>{item?.market[0]?.sellOrders}</td>
            </tr>
            <tr>
              <th>Buy Offers</th>
              <td>{item?.market[0]?.buyOrders}</td>
            </tr>
            <tr>
              <th>Demand/Supply</th>
              <td></td>
            </tr>
            <tr>
              <th>Last Update</th>
              <td>{item?.market[0]?.timestamp.toISOString()}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
