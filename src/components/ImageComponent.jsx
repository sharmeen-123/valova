import React, { useState, useRef } from "react";
import Icon from "../assets/image.svg";

const ImageComponent = ({item}) => {
  const fileInputRef = useRef(null);
  const [image, setImage] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setImage(URL.createObjectURL(file));
  };


  return (
    <div className="flex flex-col">
    {item && (
            <p className="font-Nunitoo text-19 sm:text-24 font-medium pb-2 md:pb-8">{item}</p>
        )}
    <div className="relative w-28 h-28">
     <input
        type="file"
        id="profileImageInput"
        ref={fileInputRef}
        className="hidden"
        onChange={handleFileChange}
      />
      <label
        htmlFor="profileImageInput"
        className="cursor-pointer absolute inset-0 flex items-center justify-center bg-gray3 rounded-full"
      >
      {/* <div className="absolute inset-0 flex items-center justify-center bg-gray3 rounded-full"> */}
        {image ? (
          <img
            src={image}
            alt="Selected"
            className="w-full h-full object-cover rounded-full"
          />
        ) : (
          <img src={Icon} alt="User" className="w-8 h-8" />
        )}
      </label>

      
    </div>
    
    <h2 className="font-Nunitoo text-14 text-blue font-medium p-2 text-center">Upload Picture</h2>
    </div>
  );
};

export default ImageComponent;
