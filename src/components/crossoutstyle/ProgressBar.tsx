
interface ProgressBarProps {
    percent: number;
    label: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ percent, label }) => {
    return <div className="relative w-full h-6">
        <div className="absolute z-10 border border-white w-full h-full"></div>
        <div className="absolute bg-accent h-full flex items-center justify-center" style={{ width: percent + '%' }}><span className="text-neutral-800 font-bold leading-none">{label}</span></div>
    </div>;
}

export default ProgressBar;