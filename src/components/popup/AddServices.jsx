import React from "react";
import Cross from "../../assets/cross.svg";
import AddServiceRightForm from "../forms/AddServiceRightForm";
import AddServiceLeftForm from "../forms/AddServiceLeftForm";
import BlueButton from "../buttons/BlueButton";
import BottomDots from "../BottomDots";

const AddServices = ({ onClose, heading, name, setNext }) => {
  const onSubmit = () => {
    console.log("in on submit");
    setNext();
  };
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 backdrop-filter backdrop-blur-sm">
      <div className="m-8">
        <div className="flex flex-wrap justify-end h-1 sm:h-2">
          <div className=" m-4 sm:m-8 cursor-pointer" onClick={onClose}>
            <img
              src={Cross}
              alt={"cross-icon"}
              className="w-5 h-5 sm:w-8 sm:h-8 cursor-pointer"
              onClick={()=>onClose}
            />
          </div>
        </div>

        <div className="bg-white p-1 sm:p-2 rounded-xl shadow-md px-2 md:px-8 ">
          <div className="flex flex-col justify-between items-between">
            <div className="flex flex-col justify-center items-center">
              <h2 className="font-Nunitoo text-19 sm:text-24 font-medium py-2">
                {heading}
              </h2>
            </div>

            <div className="flex flex-col-reverse sm:flex-row mx-4 md:mx-8 ">
                <div className="w-full sm:w-1/2">
                  <AddServiceLeftForm name={name} />
              </div>

              <div className="w-full sm:w-1/2 ml-0 sm:ml-14">
                <AddServiceRightForm onClose={onClose} />
              </div>
            </div>
            {/* button  */}
            <div>
              <div className="flex justify-center my-3">
                <BlueButton text="Next" setShowPopup={onSubmit} />
              </div>
              <div className="flex justify-center items-center">
                <BottomDots bg="white" />
                <BottomDots bg="blue" />
                <BottomDots bg="white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddServices;
