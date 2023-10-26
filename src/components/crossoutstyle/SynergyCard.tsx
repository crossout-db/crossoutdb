import { ChevronRight } from "react-feather";
import { RouterOutputs } from "~/utils/api";
import Synergy from "./Synergy";

type ItemFindUniqueOutput = RouterOutputs["item"]["findUnique"];

interface SynergyCardProps {
    data: ItemFindUniqueOutput;
}

const SynergyCard: React.FC<SynergyCardProps> = ({ data }) => {
    const synergies = data?.itemSynergies;

    return <div className="text-white space-y-2">
        <div className="p-4 flex flex-row items-baseline space-x-1 bg-neutral-800 justify-between">
            <h1 className="text-2xl">Synergy</h1>
        </div>
        <div className="space-y-2">
            {synergies?.map(synergy => <Synergy key={synergy.synergy.id} name={synergy.synergy.name} synergyItems={synergy.synergy.synergyItems} />)}
        </div>
    </div>
}

export default SynergyCard;