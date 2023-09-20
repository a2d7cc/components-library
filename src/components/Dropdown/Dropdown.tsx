import { CaretDown, CaretRight } from "@phosphor-icons/react";
import { useState } from "react";

interface Option {
  label: string;
  value: string;
}

interface DropdownProps {
  options: Option[];
  onOptionClick: (option: string) => void;
}

function Dropdown({ options, onOptionClick }: DropdownProps) {
  const [isExpanded, setIsExpanded] = useState<Boolean>(false);

  const showCaretDown = isExpanded;
  const showCaretRight = !isExpanded;

  return (
    <div className="relative">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="rounded text-white px-2 py-1 hover:bg-gray-400 bg-gray-500 flex items-center "
      >
        <div className="mr-1">Dropdown</div>
        <div>
          {showCaretDown && <CaretDown size={16} />}
          {showCaretRight && <CaretRight size={16} />}
        </div>
      </button>
      {isExpanded && (
        <div className="bg-white border absolute rounded  py-1 mt-2 w-40">
          <ul>
            {options.map((option) => (
              <li
                className="hover:bg-blue-400 hover:text-white cursor-pointer px-2 py-1"
                key={option.value}
                onClick={() => onOptionClick(option.value)}
              >
                {option.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
