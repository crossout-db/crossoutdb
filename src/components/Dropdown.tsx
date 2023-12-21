import React, { useState } from "react";
import { ChevronDown } from "react-feather"; // replace with your actual SVG icons
import Image from "next/image";

interface DropdownProps {
  options: Option[];
  selectedKey: string;
  onChange: (option: Option) => void;
}

interface Option {
  value: string;
  label: string;
  icon?: string;
}

const Dropdown = ({ options, selectedKey, onChange }: DropdownProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedOption, setSelectedOption] = useState<Option | undefined>(
    options.find((option) => option.value === selectedKey),
  );

  const handleSelect = (option: Option) => {
    setSelectedOption(option);
    onChange(option);
    setIsExpanded(false);
  };

  const DisplayOption = ({ option }: { option: Option }) => {
    return (
      <>
        {option.icon && (
          <Image
            src={option.icon}
            width={20}
            height={20}
            alt=""
            className="mr-3 inline-block"
          />
        )}
        {option.label}
      </>
    );
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="border-xoPrimary text-xoPrimary hover:border-white flex items-center px-3 py-2 border bg-secondary group"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <span>
            {selectedOption && <DisplayOption option={selectedOption} />}
          </span>
          <ChevronDown className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
        </button>
      </div>

      {isExpanded && (
        <div className="absolute z-10 my-2 border-xoPrimary text-xoPrimary hover:border-white flex items-center px-3 py-2 border bg-black cursor-pointer" onMouseLeave={() => setIsExpanded(false)}>
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {options.map((option) => (
              <a
                key={option.value}
                href="#"
                className="hover:text-white whitespace-nowrap"
                role="menuitem"
                onClick={() => handleSelect(option)}
              >
                <DisplayOption option={option} />
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
