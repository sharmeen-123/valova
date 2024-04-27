import React, { useState, useEffect, useRef } from "react";

import { InputDefault } from "../../components/inputFields/inputFiels";
import PasswordField from "../../components/inputFields/passwordField";
import BlueButton from "../../components/buttons/BlueButton";
import BottomDots from "../BottomDots";

const AddServiceRightForm = ({ onClose, setNext }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [time, setTime] = useState("");

  const nameInputRef = useRef(null);
  const priceInputRef = useRef(null);
  const timeInputRef = useRef(null);
  const descriptionInputRef = useRef(null);

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
    nameInputRef.current.focus();
  }, []);
  return (
    <div className="flex flex-col items-between justify-between mx-2 sm:mx-4 w-full h-full">
      <div>
        <p className="font-Nunitoo font-bold text-black text-14 sm:text-16 p-1 sm:p-2">
          Services Information
        </p>
        <div>
          <label className="font-Nunitoo font-medium text-blue text-14 py-1 sm:py-2">
            Service Title
          </label>
          <InputDefault
            setValue={setName}
            handleKeyDown={handleKeyDown}
            inputRef={nameInputRef}
            nextRef={descriptionInputRef}
            Placeholder="Door Paint"
            bg={"white"}
          />
        </div>
        {/* description */}
        <div className="mt-2">
          <label className="font-Nunitoo font-medium text-blue text-14 py-1 sm:py-2">
            Description
          </label>
          <InputDefault
            setValue={setDescription}
            handleKeyDown={handleKeyDown}
            inputRef={descriptionInputRef}
            nextRef={priceInputRef}
            py="2"
            Placeholder="Details of the Service"
            bg={"white"}
          />
        </div>

        <p className="font-Nunitoo font-bold text-black text-164 py-1 sm:pt-6">
          Price / Time Range
        </p>

        <div className="flex">
          {/* price */}
          <div className="mt-2">
            <label className="font-Nunitoo font-medium text-blue text-14 py-1 sm:py-2">
              Price
            </label>
            <InputDefault
              setValue={setPrice}
              handleKeyDown={handleKeyDown}
              inputRef={priceInputRef}
              nextRef={timeInputRef}
              Placeholder="$00.00"
              bg={"white"}
            />
          </div>

          {/* time */}
          <div className="mt-2 ml-4">
            <label className="font-Nunitoo font-medium text-blue text-14 py-1 sm:py-2">
              Time
            </label>
            <InputDefault
              setValue={setTime}
              handleKeyDown={handleKeyDown}
              inputRef={timeInputRef}
              nextRef={null}
              Placeholder="00 Hrs"
              bg={"white"}
            />
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default AddServiceRightForm;
