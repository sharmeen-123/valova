import React, { useState, useEffect, useRef } from "react";

import { InputDefault } from "../../components/inputFields/inputFiels";
import PasswordField from "../../components/inputFields/passwordField";
import BlueButton from "../../components/buttons/BlueButton";
import BottomDots from "../BottomDots";

const AddBussinessForm = ({onClose, setNext}) => {
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [address, setAddress] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [description, setDescription] = useState("");

  const nameInputRef = useRef(null);
  const countryInputRef = useRef(null);
  const addressInputRef = useRef(null);
  const stateInputRef = useRef(null);
  const zipInputRef = useRef(null);
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

  const onSubmit = () => {
    console.log("in on submit")
    setNext()
}
  return (
    <div className="mx-4 md:ml-14 md:mr-48">
      <div>
        <label className="font-Nunitoo font-medium text-blue text-14 py-2">
        Business Name
        </label>
        <InputDefault
          setValue={setName}
          handleKeyDown={handleKeyDown}
          inputRef={nameInputRef}
          nextRef={countryInputRef}
          Placeholder="JPLUS"
          bg={"white"}
        />
      </div>
      {/* country */}
      <div className="mt-2">
        <label className="font-Nunitoo font-medium text-blue text-14 py-1 sm:py-2">
          Country
        </label>
        <InputDefault
          setValue={setCountry}
          handleKeyDown={handleKeyDown}
          inputRef={countryInputRef}
          nextRef={addressInputRef}
          Placeholder="USA"
          bg={"white"}
        />
      </div>

      {/* address */}

      <div className="mt-2">
        <label className="font-Nunitoo font-medium text-blue text-14 py-1 sm:py-2">
          Address
        </label>
        <InputDefault
          setValue={setAddress}
          handleKeyDown={handleKeyDown}
          inputRef={addressInputRef}
          nextRef={stateInputRef}
          Placeholder="Shop 87-A"
          bg={"white"}
        />
      </div>

       {/* state */}

       <div className="mt-2">
        <label className="font-Nunitoo font-medium text-blue text-14 py-1 sm:py-2">
          State
        </label>
        <InputDefault
          setValue={setState}
          handleKeyDown={handleKeyDown}
          inputRef={stateInputRef}
          nextRef={zipInputRef}
          Placeholder="NYC"
          bg={"white"}
        />
      </div>

       {/* zip */}

       <div className="mt-2">
        <label className="font-Nunitoo font-medium text-blue text-14 py-1 sm:py-2">
          Zip
        </label>
        <InputDefault
          setValue={setZip}
          handleKeyDown={handleKeyDown}
          inputRef={zipInputRef}
          nextRef={descriptionInputRef}
          Placeholder="10001"
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
          nextRef={null}
          Placeholder="Details of the Business"
          bg={"white"}
        />
      </div>

     
      <div
        className="flex justify-center my-3"
      >
        <BlueButton text="Next" setShowPopup={onSubmit} />
      </div>
      <div className="flex justify-center items-center">
        <BottomDots bg="blue" />
        <BottomDots bg="white" />
        <BottomDots bg="white" />
      </div>
    </div>
  );
};

export default AddBussinessForm;
