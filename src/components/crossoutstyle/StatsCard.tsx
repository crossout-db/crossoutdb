import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { RouterOutputs } from "~/utils/api";
import ProgressBar from "./ProgressBar";

type ItemfindUniqueOutput = RouterOutputs["item"]["findUnique"];

interface StatsCardProps {
    data: ItemfindUniqueOutput;
}

const StatsCard: React.FC<StatsCardProps> = ({ data }) => {

    dayjs.extend(relativeTime);

    const stats = data?.itemStats[0];

    const ratings = [
        { label: 'Power', value: stats?.cabinPower },
        { label: 'Damage', value: stats?.damage },
        { label: 'Fire rate', value: stats?.fireRate },
        { label: 'Range', value: stats?.range },
        { label: 'Accuracy', value: stats?.accuracy },
        { label: 'Blast power', value: stats?.blastPower },
    ].filter((x): x is { label: string, value: number } => !!x.value);

    const performanceStats = [
        { label: 'Max. cabin speed', prefix: '', value: stats?.maxCabinSpeed, suffix: ' km/h' },
        { label: 'Max. chassis speed', prefix: '', value: stats?.maxChassisSpeed, suffix: ' km/h' },
        { label: 'Tonnage', prefix: '+', value: stats?.tonnage, suffix: ' kg' },
        { label: 'Bullet resistance', prefix: '', value: stats?.featureBulletPercent, suffix: '%' },
        { label: 'Melee resistance', prefix: '', value: stats?.featureMeleePercent, suffix: '%' },
        { label: 'Thermal resistance', prefix: '', value: stats?.featureFirePercent, suffix: '%' },
        { label: 'Blast resistance', prefix: '', value: stats?.featureBlastPercent, suffix: '%' },
        { label: 'Passthrough', prefix: '', value: stats?.featurePassthroughPercent, suffix: '%' },
        { label: 'Mass limit', prefix: '', value: stats?.massLimit, suffix: ' kg' },
        { label: 'Adds energy', prefix: '', value: stats?.addsEnergy, suffix: ' pts.' },
        { label: 'Power', prefix: '', value: stats?.power, suffix: '%' },
    ].filter((x): x is { label: string, prefix: string, value: number, suffix: string } => !!x.value);

    const decorStats = [
        { label: 'Reputation Gain', prefix: '+', value: stats?.increasesReputationPercent, suffix: '%' },
    ].filter((x): x is { label: string, prefix: string, value: number, suffix: string } => !!x.value);

    const generalStats = [
        { label: 'Durability', value: stats?.durability, suffix: ' pts.' },
        { label: 'Energy drain', value: stats?.energyDrain, suffix: ' pts.' },
        { label: 'Mass', value: stats?.mass, suffix: ' kg' }
    ].filter((x): x is { label: string, value: number, suffix: string } => !!x.value);

    return <div className="text-white space-y-2">
        <div className="p-4 flex flex-row items-baseline space-x-1 bg-neutral-800 justify-between">
            <h1 className="text-2xl">Stats</h1>
            <p className="text-sm text-xoPrimary">Updated {dayjs(stats?.timestamp).fromNow() ?? -1}</p>
        </div>
        <div className="space-y-2">
            <div className="bg-neutral-800 px-4 py-3 flex flex-row justify-between">
                <span className="font-bold">POWER SCORE</span>
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