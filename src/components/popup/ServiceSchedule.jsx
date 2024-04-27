import React, { useEffect } from "react";
import Cross from "../../assets/cross.svg";
import AddSchedualForm from "../forms/SchedualForm";

const ServiceSchedule = ({ onClose, heading, name, setNext }) => {
  
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 backdrop-filter backdrop-blur-sm">
  
    <div className="m-8">
      <div className="flex flex-wrap justify-end h-1 sm:h-2">
        <div className=" m-4  sm:m-8 cursor-pointer">
          <img src={Cross} alt={"cross-icon"} onClick={onClose} className="w-5 h-5 sm:w-8 sm:h-8" />
        </div>
      </div>

      <div className="bg-white p-2 rounded-xl shadow-md px-3 md:px-8">
        <div className="flex flex-col justify-center items-center">
          <h2 className="font-Nunitoo text-19 sm:text-24 font-medium pb-4 sm:py-0.5">{heading}</h2>
        </div>
        <div className="flex flex-col mb-1 ">
          <p className="font-Nunitoo text-16 sm:text-24 font-medium p-0.5 sm:py-1 text-black">
            {name}
          </p>
          <p className="font-Nunitoo text-12 sm:text-16  font-bold text-black">
          Business Hours
          </p>
          </div>
        <AddSchedualForm onClose={onClose} setNext={setNext} />
         
      </div>
    </div>
    </div>
  );
};

export default ServiceSchedule;
