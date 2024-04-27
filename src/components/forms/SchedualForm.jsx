import React, { useState, useEffect, useRef } from "react";

import BlueButton from "../../components/buttons/BlueButton";
import BottomDots from "../BottomDots";
import WeekSchedualForm from "./WeekSchedualForm";
import FridaySchedualForm from "./FridaySchedualForm";
import SundaySchedualForm from "./SundayCheckBox";

const AddSchedualForm = ({ onClose, setNext }) => {
  const handleKeyDown = (e, nextRef) => {
    if (e.key === "Enter") {
      if (nextRef && nextRef.current) {
        nextRef.current.focus();
      } else {
        // If there is no next field, submit the form
        // login();
      }
    }
  };

  useEffect(() => {
    // nameInputRef.current.focus();
  }, []);

  const onSubmit = () => {
    onClose();
  };
  return (
    <div className="flex flex-col justify-center items-center mx-1">
      {/* week schedule */}

      <div className="flex flex-col sm:flex-row h-80 sm:h-full">
        <div className="overflow-y-auto">
          <div className="flex flex-col sm:flex-row mr-3">
            {/* flext left */}

            <div>
            {/* 1st div */}
              <div className="flex flex-col sm:flex-row">
              <div>
                <WeekSchedualForm day="Monday" handleKeyDown={handleKeyDown} />
                </div>
                <div className="ml-0 mt-4 sm:mt-0 sm:ml-16">
                <WeekSchedualForm day="Tuesday" handleKeyDown={handleKeyDown} />
              </div>
              </div>

               {/* 2nd div */}
               <div className="flex flex-col sm:flex-row mt-4">
              <div>
                <WeekSchedualForm day="Wednesday" handleKeyDown={handleKeyDown} />
                </div>
                <div className="ml-0 mt-4 sm:mt-0 sm:ml-16">
                <WeekSchedualForm day="Thursday" handleKeyDown={handleKeyDown} />
              </div>
              </div>

               {/* 3rd div */}
               <div className="flex flex-col sm:flex-row mt-4">
              <div>
              <WeekSchedualForm day="Friday" handleKeyDown={handleKeyDown} />
                <FridaySchedualForm handleKeyDown={handleKeyDown} />
                </div>
                <div className="ml-0 mt-4 sm:mt-0 sm:ml-16">
                <SundaySchedualForm day="Saturday" />
              </div>
              </div>

               {/* 4th div */}
               <div className="flex flex-col sm:flex-row mt-4">
              
               <SundaySchedualForm day="Sunday" />
              </div>

             
            </div>

           
          </div>
        </div>
      </div>

      {/* submit */}
      <div className="flex justify-center my-3">
        <BlueButton text="Submit" setShowPopup={onSubmit} />
      </div>
      <div className="flex justify-center items-center">
        <BottomDots bg="white" />
        <BottomDots bg="white" />
        <BottomDots bg="blue" />
      </div>
    </div>
  );
};

export default AddSchedualForm;
