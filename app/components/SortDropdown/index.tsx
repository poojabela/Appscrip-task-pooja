import { useState, useRef, useEffect } from "react";
import { ChevronDown, Check } from "lucide-react";
import styles from "./SortDropdown.module.css";

const sortOptions = [
  { id: "recommended", label: "RECOMMENDED" },
  { id: "newest", label: "NEWEST FIRST" },
  { id: "popular", label: "POPULAR" },
  { id: "priceHigh", label: "PRICE : HIGH TO LOW" },
  { id: "priceLow", label: "PRICE : LOW TO HIGH" },
];

export default function SortDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("recommended");
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleOptionClick = (optionId: string) => {
    setSelectedOption(optionId);
    setIsOpen(false);
  };

  const selectedLabel = sortOptions.find(
    (opt) => opt.id === selectedOption
  )?.label;

  return (
    <div className={styles.dropdownContainer} ref={dropdownRef}>
      <button
        className={styles.dropdownTrigger}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span>{selectedLabel}</span>
        <ChevronDown
          size={20}
          className={`${styles.chevron} ${isOpen ? styles.rotate : ""}`}
        />
      </button>

      {isOpen && (
        <div className={styles.dropdownContent}>
          {sortOptions.map((option) => (
            <button
              key={option.id}
              className={`${styles.option} ${
                selectedOption === option.id ? styles.selected : ""
              }`}
              onClick={() => handleOptionClick(option.id)}
            >
              {selectedOption === option.id && (
                <Check className={styles.checkIcon} size={16} />
              )}
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
