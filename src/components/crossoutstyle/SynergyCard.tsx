import { ChevronRight } from "react-feather";
import Synergy from "./Synergy";
import { useTranslation } from "next-i18next";
import { ItemFindUniqueOutput } from "~/pages/item/[id]";

interface SynergyCardProps {
    data: ItemFindUniqueOutput;
}

const SynergyCard: React.FC<SynergyCardProps> = ({ data }) => {
    const synergies = data?.itemSynergies;
    const { t } = useTranslation(['common','model']);

    return <div className="text-white space-y-2">
        <div className="p-4 flex flex-row items-baseline space-x-1 bg-neutral-800 justify-between">
            <h1 className="text-2xl">{t("model:synergy")}</h1>
        </div>
        <div className="space-y-2">
            {synergies?.map(synergy => <Synergy key={synergy.synergy.id} name={synergy.synergy.name} synergyItems={synergy.synergy.synergyItems} />)}
        </div>
    </div>
}

export default SynergyCard;