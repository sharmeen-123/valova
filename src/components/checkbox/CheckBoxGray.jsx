import React, { useState } from 'react';
import Tick from "../../assets/tick.svg";

export function CheckboxLabell({isChecked, setIsChecked}) {

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="flex items-center gap-4" onClick={handleCheckboxChange} style={{ cursor: 'pointer' }}>
      {/* Custom checkbox appearance */}
      <div
        className={`w-3 h-3 sm:w-5 sm:h-5 border border-darkGray flex items-center justify-center ${isChecked ? 'bg-blue' : 'bg-darkGray'}`}
      >
        {/* Show custom tick image when checked */}
        {isChecked && <img src={Tick} alt="Tick" className="w-2 h-2 sm:w-3 sm:h-3" />}
      </div>
    </div>
  );
}
