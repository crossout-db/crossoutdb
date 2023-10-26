import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { RouterOutputs } from "~/utils/api";
import ProgressBar from "./ProgressBar";
import { useTranslation } from "next-i18next";

type ItemfindUniqueOutput = RouterOutputs["item"]["findUnique"];

interface StatsCardProps {
    data: ItemfindUniqueOutput;
}

const StatsCard: React.FC<StatsCardProps> = ({ data }) => {

    dayjs.extend(relativeTime);

    const { t } = useTranslation(['common','model']);
    const stats = data?.itemStats[0];

    const ratings = [
        { label: t("model:itemModel.cabinPower"), value: stats?.cabinPower },
        { label: t("model:itemModel.damage"), value: stats?.damage },
        { label: t("model:itemModel.fireRate"), value: stats?.fireRate },
        { label: t("model:itemModel.range"), value: stats?.range },
        { label: t("model:itemModel.accuracy"), value: stats?.accuracy },
        { label: t("model:itemModel.blastPower"), value: stats?.blastPower },
    ].filter((x): x is { label: string, value: number } => !!x.value);

    const performanceStats = [
        { label: t("model:itemModel.maxCabinSpeed"), prefix: '', value: stats?.maxCabinSpeed, suffix: ' km/h' },
        { label: t("model:itemModel.maxChassisSpeed"), prefix: '', value: stats?.maxChassisSpeed, suffix: ' km/h' },
        { label: t("model:itemModel.tonnage"), prefix: '+', value: stats?.tonnage, suffix: ' kg' },
        { label: t("model:itemModel.featureBulletPercent"), prefix: '', value: stats?.featureBulletPercent, suffix: '%' },
        { label: t("model:itemModel.featureMeleePercent"), prefix: '', value: stats?.featureMeleePercent, suffix: '%' },
        { label: t("model:itemModel.featureFirePercent"), prefix: '', value: stats?.featureFirePercent, suffix: '%' },
        { label: t("model:itemModel.featureBlastPercent"), prefix: '', value: stats?.featureBlastPercent, suffix: '%' },
        { label: t("model:itemModel.featurePassthroughPercent"), prefix: '', value: stats?.featurePassthroughPercent, suffix: '%' },
        { label: t("model:itemModel.massLimit"), prefix: '', value: stats?.massLimit, suffix: ' kg' },
        { label: t("model:itemModel.addsEnergy"), prefix: '', value: stats?.addsEnergy, suffix: ' pts.' },
        { label: t("model:itemModel.power"), prefix: '', value: stats?.power, suffix: '%' },
    ].filter((x): x is { label: string, prefix: string, value: number, suffix: string } => !!x.value);

    const decorStats = [
        { label: t("model:itemModel.increasesReputationPercent"), prefix: '+', value: stats?.increasesReputationPercent, suffix: '%' },
    ].filter((x): x is { label: string, prefix: string, value: number, suffix: string } => !!x.value);

    const generalStats = [
        { label: t("model:itemModel.durability"), value: stats?.durability, suffix: ' pts.' },
        { label: t("model:itemModel.energyDrain"), value: stats?.energyDrain, suffix: ' pts.' },
        { label: t("model:itemModel.mass"), value: stats?.mass, suffix: ' kg' }
    ].filter((x): x is { label: string, value: number, suffix: string } => !!x.value);

    return <div className="text-white space-y-2">
        <div className="p-4 flex flex-row items-baseline space-x-1 bg-neutral-800 justify-between">
            <h1 className="text-2xl">{t("model:itemStats")}</h1>
            <p className="text-sm text-xoPrimary">Updated {dayjs(stats?.timestamp).fromNow() ?? -1}</p>
        </div>
        <div className="space-y-2">
            <div className="bg-neutral-800 px-4 py-3 flex flex-row justify-between">
                <span className="font-bold">{t("model:itemModel.ps")}</span>
                <span>{stats?.ps}</span>
            </div>
            <div className="space-y-2">
                {ratings.map(rating =>
                    <div key={rating.label} className="bg-neutral-800 px-4 py-3 flex flex-row justify-between">
                        <span className="font-bold">{rating.label}</span>
                        <div className="w-3/4 flex items-center">
                            <ProgressBar percent={rating.value * 10} label={rating.value.toFixed(1)} />
                        </div>
                    </div>)}
            </div>
            <div className="space-y-2">
                {performanceStats.map(stat =>
                    <div key={stat.label} className="bg-neutral-800 px-4 py-3 flex flex-row justify-between">
                        <span className="font-bold">{stat.label}</span>
                        <span>{`${stat.prefix}${stat.value}${stat.suffix}`}</span>
                    </div>)}
            </div>
            <div className="space-y-2">
                {decorStats.map(stat =>
                    <div key={stat.label} className="bg-neutral-800 px-4 py-3 flex flex-row justify-between">
                        <span className="font-bold">{stat.label}</span>
                        <span>{`${stat.prefix}${stat.value}${stat.suffix}`}</span>
                    </div>)}
            </div>
            <div className="space-y-2">
                {generalStats.map(stat =>
                    <div key={stat.label} className="bg-neutral-800 px-4 py-3 flex flex-row justify-between">
                        <span className="font-bold">{stat.label}</span>
                        <span>{`${stat.value}${stat.suffix}`}</span>
                    </div>)}
            </div>
            {stats?.perks &&
                <div className="bg-neutral-800 px-4 py-3">{stats?.perks}</div>
            }
        </div>
    </div>
}

export default StatsCard;