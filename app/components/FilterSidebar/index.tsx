"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import styles from "./FilterSidebar.module.css";

type FilterSidebarProps = {
  isOpen: boolean;
};

export default function FilterSidebar({ isOpen }: FilterSidebarProps) {
  const initialOptions = ["Men", "Women", "Baby & Kids"];
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleSingleCheckbox = (option: string) => {
    setSelectedOptions((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    );
  };

  const handleSelectAllToggle = () => {
    if (selectedOptions.length === initialOptions.length) {
      setSelectedOptions([]);
    } else {
      setSelectedOptions([...initialOptions]);
    }
  };

  const filterSections = [
    {
      title: "CUSTOMIZABLE",
      type: "checkbox",
    },
    {
      title: "IDEAL FOR",
      type: "multiCheckbox",
      options: initialOptions,
    },
    {
      title: "OCCASION",
      options: ["All"],
    },
    {
      title: "WORK",
      options: ["All"],
    },
    {
      title: "FABRIC",
      options: ["All"],
    },
    {
      title: "SEGMENT",
      options: ["All"],
    },
    {
      title: "SUITABLE FOR",
      options: ["All"],
    },
    {
      title: "RAW MATERIALS",
      options: ["All"],
    },
    {
      title: "PATTERN",
      options: ["All"],
    },
  ];

  return (
    <aside className={`${styles.filterSidebar} ${isOpen ? styles.open : ""}`}>
      {filterSections.map((section) => (
        <div key={section.title} className={styles.filterSection}>
          {section.type === "checkbox" ? (
            <div className={styles.filterCheckboxContainer}>
              <div className={styles.customCheckbox}>
                <input
                  type="checkbox"
                  id={section.title}
                  className={styles.checkboxInput}
                />
                <label htmlFor={section.title} className={styles.checkboxLabel}>
                  <span className={styles.checkboxCustom}></span>
                  {section.title}
                </label>
              </div>
            </div>
          ) : section.type === "multiCheckbox" ? (
            <>
              <div className={styles.filterHeader}>
                <h3>{section.title}</h3>
                <ChevronDown className={styles.icon} />
              </div>
              <div className={styles.filterOptions}>
                <div className={styles.allOption}>
                  <p className={styles.filterOption}>All</p>
                  <button
                    className={styles.unselectAll}
                    onClick={handleSelectAllToggle}
                  >
                    {selectedOptions.length === initialOptions.length
                      ? "Unselect all"
                      : "Select all"}
                  </button>
                </div>
                <div className={styles.optionsContainer}>
                  {section?.options?.map((option) => (
                    <div key={option} className={styles.customCheckbox}>
                      <input
                        type="checkbox"
                        id={`${section.title}-${option}`}
                        checked={selectedOptions.includes(option)}
                        onChange={() => handleSingleCheckbox(option)}
                        className={styles.checkboxInput}
                      />
                      <label
                        htmlFor={`${section.title}-${option}`}
                        className={styles.checkboxLabel}
                      >
                        <span className={styles.checkboxCustom}></span>
                        {option}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <>
              <div className={styles.filterHeader}>
                <h3>{section.title}</h3>
                <ChevronDown className={styles.icon} stroke="#292D32" />
              </div>
              <div className={styles.filterOptions}>
                {section?.options?.map((option) => (
                  <p key={option} className={styles.filterOption}>
                    {option}
                  </p>
                ))}
              </div>
            </>
          )}
        </div>
      ))}
    </aside>
  );
}
