import { useState } from "react";
import "./index.css";

function DropDown({ options, selectedOption, onSelectOption }) {
  const [optionsVisible, setOptionsVisible] = useState(false);

  const handleSelectedButtonClick = () => {
    setOptionsVisible((prev) => !prev);
  };

  const handleOptionButtonClick = (option) => {
    onSelectOption(option);
    setOptionsVisible(false);
  };

  return (
    <div className="dropdown">
      <button
        className="dropdown-selected dropdown-button"
        onClick={handleSelectedButtonClick}
      >
        <p className="dropdown-selected-text">{selectedOption.label}</p>
        <img
          className="dropdown-selected-icon"
          src="images/ic_arrow_down.svg"
          alt="아래 화살표 아이콘"
        />
      </button>
      <div className={`dropdown-options ${optionsVisible && "show"}`}>
        <div>
          {options.map((option) => (
            <button
              className="dropdown-option dropdown-button"
              key={option.id}
              onClick={() => handleOptionButtonClick(option)}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DropDown;
