import { useState } from "react";
import { AlertTriangle } from "react-feather";

interface AlertProps {
    message: string;
}

const Alert = ({message}: AlertProps) => {
    const [tooltipActive, setTooltipActive] = useState(false);

    return (<>
        <div className="relative flex items-center text-accent" onMouseEnter={() => setTooltipActive(true)} onMouseLeave={() => setTooltipActive(false)} onClick={() => setTooltipActive(!tooltipActive)}>
            <AlertTriangle />
            {tooltipActive && <div className="absolute whitespace-pre z-10 left-8 border-xoPrimary text-xoPrimary flex items-center px-3 py-2 border bg-black">{message}</div>}
        </div>
    </>
    );
};

export default Alert;