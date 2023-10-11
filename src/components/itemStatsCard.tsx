import { signIn, signOut, useSession } from "next-auth/react";
import { RouterOutputs } from "~/utils/api";

type ItemfindUniqueOutput = RouterOutputs["item"]["findUnique"];

interface ItemCardProps {
  item: ItemfindUniqueOutput;
}

export const ItemStatCard: React.FC<ItemCardProps> = ({ item }) => {
  const { data: sessionData } = useSession();

  return (
    <div className="">
      <p>{item?.itemStats[0]?.description}</p>

      <div className="divider" />

      {item?.itemStats[0]?.ps != null && (
        <div className="flex-row">
          <h4>{item?.itemStats[0]?.ps}</h4>
          <h6>POWER SCORE</h6>
        </div>
      )}

      <div className="divider" />

      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr className="">
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {item?.itemStats[0]?.damage != null && (
              <tr>
                <th>Damage</th>
                <td>{item?.itemStats[0]?.damage}</td>
              </tr>
            )}
            {item?.itemStats[0]?.fireRate != null && (
              <tr>
                <th>Fire Rate</th>
                <td>{item?.itemStats[0]?.fireRate}</td>
              </tr>
            )}
            {item?.itemStats[0]?.range != null && (
              <tr>
                <th>Range</th>
                <td>{item?.itemStats[0]?.range}</td>
              </tr>
            )}
            {item?.itemStats[0]?.accuracy != null && (
              <tr>
                <th>Accuracy</th>
                <td>{item?.itemStats[0]?.accuracy}</td>
              </tr>
            )}
            {item?.itemStats[0]?.timeToOverheating != null && (
              <tr>
                <th>Time To Overheating</th>
                <td>{item?.itemStats[0]?.timeToOverheating}</td>
              </tr>
            )}
            {item?.itemStats[0]?.cabinPower != null && (
              <tr>
                <th>Cabin Power</th>
                <td>{item?.itemStats[0]?.cabinPower}</td>
              </tr>
            )}
            {item?.itemStats[0]?.blastPower != null && (
              <tr>
                <th>Blast Power</th>
                <td>{item?.itemStats[0]?.blastPower}</td>
              </tr>
            )}
            {item?.itemStats[0]?.maxAmmo != null && (
              <tr>
                <th>Max Ammo</th>
                <td>{item?.itemStats[0]?.maxAmmo}</td>
              </tr>
            )}
            {item?.itemStats[0]?.maxCabinSpeed != null && (
              <tr>
                <th>Max Cabin Speed</th>
                <td>{item?.itemStats[0]?.maxCabinSpeed}</td>
              </tr>
            )}
            {item?.itemStats[0]?.maxChassisSpeed != null && (
              <tr>
                <th>Max Chassis Speed</th>
                <td>{item?.itemStats[0]?.maxChassisSpeed}</td>
              </tr>
            )}
            {item?.itemStats[0]?.tonnage != null && (
              <tr>
                <th>Tonnage</th>
                <td>{item?.itemStats[0]?.tonnage}</td>
              </tr>
            )}
            {item?.itemStats[0]?.power != null && (
              <tr>
                <th>Power</th>
                <td>{item?.itemStats[0]?.power}</td>
              </tr>
            )}
            {item?.itemStats[0]?.featureBulletPercent != null && (
              <tr>
                <th>Feature Bullet Percentage</th>
                <td>{item?.itemStats[0]?.featureBulletPercent}</td>
              </tr>
            )}
            {item?.itemStats[0]?.featureMeleePercent != null && (
              <tr>
                <th>Feature Melee Percentage</th>
                <td>{item?.itemStats[0]?.featureMeleePercent}</td>
              </tr>
            )}
            {item?.itemStats[0]?.featureFirePercent != null && (
              <tr>
                <th>Feature Fire Percentage</th>
                <td>{item?.itemStats[0]?.featureFirePercent}</td>
              </tr>
            )}
            {item?.itemStats[0]?.featureBlastPercent != null && (
              <tr>
                <th>Feature Blast Percentage</th>
                <td>{item?.itemStats[0]?.featureBlastPercent}</td>
              </tr>
            )}
            {item?.itemStats[0]?.featurePassthroughPercent != null && (
              <tr>
                <th>Feature Passthrough Percentage</th>
                <td>{item?.itemStats[0]?.featurePassthroughPercent}</td>
              </tr>
            )}
            {item?.itemStats[0]?.massLimit != null && (
              <tr>
                <th>Mass Limit</th>
                <td>{item?.itemStats[0]?.massLimit}</td>
              </tr>
            )}
            {item?.itemStats[0]?.addsEnergy != null && (
              <tr>
                <th>Adds Energy</th>
                <td>{item?.itemStats[0]?.addsEnergy}</td>
              </tr>
            )}
            {item?.itemStats[0]?.fuelReserves != null && (
              <tr>
                <th>Fuel Reserves</th>
                <td>{item?.itemStats[0]?.fuelReserves}</td>
              </tr>
            )}
            {item?.itemStats[0]?.increasesReputationPercent != null && (
              <tr>
                <th>Increases Reputation Percentage</th>
                <td>{item?.itemStats[0]?.increasesReputationPercent}</td>
              </tr>
            )}
            {item?.itemStats[0]?.increasesDurability != null && (
              <tr>
                <th>Increases Durability</th>
                <td>{item?.itemStats[0]?.increasesDurability}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="divider" />

      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr className="">
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {item?.itemStats[0]?.durability != null && (
              <tr>
                <th>Durability</th>
                <td>{item?.itemStats[0]?.durability}</td>
              </tr>
            )}
            {item?.itemStats[0]?.energyDrain != null && (
              <tr>
                <th>Energy Drain</th>
                <td>{item?.itemStats[0]?.energyDrain}</td>
              </tr>
            )}
            {item?.itemStats[0]?.mass != null && (
              <tr>
                <th>Mass</th>
                <td>{item?.itemStats[0]?.mass}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="divider" />

      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr className="">
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {item?.itemStats[0]?.perks != null && (
              <tr>
                <th>Perks</th>
                <td>{item?.itemStats[0]?.perks}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="divider" />

      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr className="">
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {item?.itemStats[0]?.topSpeed != null && (
              <tr>
                <th>Top Speed</th>
                <td>{item?.itemStats[0]?.topSpeed}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="divider" />

      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr className="">
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {item?.itemStats[0]?.user.name != null && (
              <tr>
                <th>User</th>
                <td>{item?.itemStats[0]?.user.name}</td>
              </tr>
            )}
            {item?.itemStats[0]?.release?.name != null && (
              <tr>
                <th>Release</th>
                <td>{item?.itemStats[0]?.release.name}</td>
              </tr>
            )}
            {item?.itemStats[0]?.timestamp != null && (
              <tr>
                <th>Timestamp</th>
                <td>{item?.itemStats[0]?.timestamp.toISOString()}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
