import { useState } from "react";
import { AlertTriangle } from "react-feather";

interface RecipeAlertProps {
    message: string;
}

const RecipeAlert = ({message}: RecipeAlertProps) => {
    const [tooltipActive, setTooltipActive] = useState(false);

    return (<>
        <div className="relative flex items-center text-accent" onMouseEnter={() => setTooltipActive(true)} onMouseLeave={() => setTooltipActive(false)} onClick={() => setTooltipActive(!tooltipActive)}>
            <AlertTriangle />
            {tooltipActive && <div className="absolute whitespace-pre z-10 left-8 border-xoPrimary text-xoPrimary flex items-center px-3 py-2 border bg-black">{message}</div>}
        </div>
    </>
    );
};

export default RecipeAlert;