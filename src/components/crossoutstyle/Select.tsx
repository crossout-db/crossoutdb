import { useState } from "react";
import { ChevronDown } from "react-feather";

type SelectEntry = { label: string, key: string, value: any };

interface SelectProps {
    entries: SelectEntry[];
    onChange: (entry: SelectEntry) => void;
    defaultEntryKey?: string;
};

const Select = ({ entries, onChange, defaultEntryKey }: SelectProps) => {
    const [active, setActive] = useState(false);
    const [selectedEntry, setSelectedEntry] = useState(entries.find(x => x.key === defaultEntryKey) ?? entries[0]);

    const onClick = (entry: SelectEntry) => {
        if (entry.key !== selectedEntry?.key)
            onChange(entry);
        setSelectedEntry(entry)
        setActive(false);
    }

    return <div>
        <button className={`border-xoPrimary text-xoPrimary hover:border-white flex items-center px-2 py-1 border bg-secondary group`} onClick={() => setActive(!active)}><ChevronDown className="group-hover:text-white" />{selectedEntry?.label}</button>
        {active && <div className="absolute z-10 my-2 border-xoPrimary text-xoPrimary hover:border-white flex items-center px-3 py-2 border bg-black cursor-pointer" onMouseLeave={() => setActive(false)}>
            <ul>
                {entries.map(entry => <li key={entry.key} className="hover:text-white whitespace-nowrap" onClick={() => onClick(entry)}>
                    {entry.label}
                </li>)}
            </ul>
        </div>}
    </div>;
};

export default Select;