import React from "react";
import Cross from "../../assets/cross.svg";
import ImageComponent from "../../components/ImageComponent";
import AddUserForm from "../forms/AddUserForm";

const AddUser = ({ onClose, heading, Formm, item }) => {
  
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 backdrop-filter backdrop-blur-sm">
  
    <div className="m-8">
      <div className="flex flex-wrap justify-end h-2">
        <div className=" m-4 sm:m-8 cursor-pointer">
          <img src={Cross} alt={"cross-icon"} onClick={onClose} className="w-5 h-5 sm:w-8 sm:h-8"  />
        </div>
      </div>

      <div className="bg-white p-2 rounded-xl shadow-md px-3 md:px-8">
        <div className="flex flex-col justify-center items-center">
          <h2 className="font-Nunitoo text-19 sm:text-24 font-medium pt-2 sm:pt-8 pb-2">{heading}</h2>
        </div>
        <div className="flex flex-col sm:flex-row">
        
        <div className="flex justify-center mt-1 sm:mt-6">
       
          <ImageComponent item={item} />
          </div>
        <Formm onClose={onClose} />
         
        </div>
      </div>
    </div>
    </div>
  );
};

export default AddUser;
