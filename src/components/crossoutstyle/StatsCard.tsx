import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import ProgressBar from "./ProgressBar";
import { useTranslation } from "next-i18next";
import { ItemFindUniqueOutput } from "~/pages/item/[id]";

interface StatsCardProps {
    data: ItemFindUniqueOutput;
}

const StatsCard: React.FC<StatsCardProps> = ({ data }) => {

    dayjs.extend(relativeTime);

    const { t } = useTranslation();
    const stats = data?.itemStats[0];

    const ratings = [
        { label: t("fields.cabinPower"), value: stats?.cabinPower },
        { label: t("fields.damage"), value: stats?.damage },
        { label: t("fields.fireRate"), value: stats?.fireRate },
        { label: t("fields.range"), value: stats?.range },
        { label: t("fields.accuracy"), value: stats?.accuracy },
        { label: t("fields.blastPower"), value: stats?.blastPower },
    ].filter((x): x is { label: string, value: number } => !!x.value);

    const performanceStats = [
        { label: t("fields.maxCabinSpeed"), prefix: '', value: stats?.maxCabinSpeed, suffix: ' km/h' },
        { label: t("fields.maxChassisSpeed"), prefix: '', value: stats?.maxChassisSpeed, suffix: ' km/h' },
        { label: t("fields.tonnage"), prefix: '+', value: stats?.tonnage, suffix: ' kg' },
        { label: t("fields.featureBulletPercent"), prefix: '', value: stats?.featureBulletPercent, suffix: '%' },
        { label: t("fields.featureMeleePercent"), prefix: '', value: stats?.featureMeleePercent, suffix: '%' },
        { label: t("fields.featureFirePercent"), prefix: '', value: stats?.featureFirePercent, suffix: '%' },
        { label: t("fields.featureBlastPercent"), prefix: '', value: stats?.featureBlastPercent, suffix: '%' },
        { label: t("fields.featurePassthroughPercent"), prefix: '', value: stats?.featurePassthroughPercent, suffix: '%' },
        { label: t("fields.massLimit"), prefix: '', value: stats?.massLimit, suffix: ' kg' },
        { label: t("fields.addsEnergy"), prefix: '', value: stats?.addsEnergy, suffix: ' pts.' },
        { label: t("fields.power"), prefix: '', value: stats?.power, suffix: '%' },
    ].filter((x): x is { label: string, prefix: string, value: number, suffix: string } => !!x.value);

    const decorStats = [
        { label: t("fields.increasesReputationPercent"), prefix: '+', value: stats?.increasesReputationPercent, suffix: '%' },
    ].filter((x): x is { label: string, prefix: string, value: number, suffix: string } => !!x.value);

    const generalStats = [
        { label: t("fields.durability"), value: stats?.durability, suffix: ' pts.' },
        { label: t("fields.energyDrain"), value: stats?.energyDrain, suffix: ' pts.' },
        { label: t("fields.mass"), value: stats?.mass, suffix: ' kg' }
    ].filter((x): x is { label: string, value: number, suffix: string } => !!x.value);

    return <div className="text-white space-y-2">
        <div className="p-4 flex flex-row items-baseline space-x-1 bg-neutral-800 justify-between">
            <h1 className="text-2xl">{t("fields.itemStats")}</h1>
            <p className="text-sm text-xoPrimary">Updated {dayjs(stats?.timestamp).fromNow() ?? -1}</p>
        </div>
        <div className="space-y-2">
            <div className="bg-neutral-800 px-4 py-3 flex flex-row justify-between">
                <span className="font-bold">{t("fields.ps")}</span>
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