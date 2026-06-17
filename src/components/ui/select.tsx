import * as React from "react";

interface SelectContextType {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  selectedValue: string;
  selectedLabel: string;
  onValueChange: (value: string, label: string) => void;
}

const SelectContext = React.createContext<SelectContextType | undefined>(undefined);

interface SelectProps {
  onValueChange: (value: string) => void;
  children: React.ReactNode;
  defaultValue?: string;
}

export function Select({ onValueChange, children, defaultValue = "" }: SelectProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(defaultValue);
  const [selectedLabel, setSelectedLabel] = React.useState("");

  const handleValueChange = (value: string, label: string) => {
    setSelectedValue(value);
    setSelectedLabel(label);
    onValueChange(value);
    setIsOpen(false);
  };

  return (
    <SelectContext.Provider value={{ isOpen, setIsOpen, selectedValue, selectedLabel, onValueChange: handleValueChange }}>
      <div className="relative">
        {children}
      </div>
    </SelectContext.Provider>
  );
}

interface SelectTriggerProps {
  className?: string;
  children: React.ReactNode;
}

export function SelectTrigger({ className = "", children }: SelectTriggerProps) {
  const context = React.useContext(SelectContext);
  if (!context) throw new Error("SelectTrigger must be used within Select");

  const { isOpen, setIsOpen } = context;
  
  return (
    <button
      type="button"
      onClick={() => setIsOpen(!isOpen)}
      className={`w-full px-3 py-2 rounded-md border text-left flex items-center justify-between ${className}`}
    >
      {children}
      <svg
        className={`w-4 h-4 transition-transform flex-shrink-0 ml-2 ${isOpen ? "rotate-180" : ""}`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </button>
  );
}

interface SelectValueProps {
  placeholder: string;
}

export function SelectValue({ placeholder }: SelectValueProps) {
  const context = React.useContext(SelectContext);
  if (!context) throw new Error("SelectValue must be used within Select");

  const { selectedLabel } = context;
  
  return <span className={selectedLabel ? "text-white" : "text-gray-400"}>{selectedLabel || placeholder}</span>;
}

interface SelectContentProps {
  className?: string;
  children: React.ReactNode;
}

export function SelectContent({ className = "", children }: SelectContentProps) {
  const context = React.useContext(SelectContext);
  if (!context) throw new Error("SelectContent must be used within Select");

  const { isOpen, setIsOpen } = context;
  const contentRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (contentRef.current && !contentRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, setIsOpen]);

  if (!isOpen) return null;

  return (
    <div ref={contentRef} className={`absolute z-50 w-full mt-1 rounded-md shadow-lg max-h-60 overflow-auto ${className}`}>
      {children}
    </div>
  );
}

interface SelectItemProps {
  value: string;
  children: React.ReactNode;
}

export function SelectItem({ value, children }: SelectItemProps) {
  const context = React.useContext(SelectContext);
  if (!context) throw new Error("SelectItem must be used within Select");

  const { onValueChange, selectedValue } = context;

  return (
    <div
      onClick={() => onValueChange(value, children?.toString() || value)}
      className={`px-3 py-2 cursor-pointer hover:bg-gray-700 text-white transition-colors ${
        selectedValue === value ? "bg-gray-700" : ""
      }`}
    >
      {children}
    </div>
  );
}
