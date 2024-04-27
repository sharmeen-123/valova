import React, { useState, useEffect, useRef } from "react";

import { InputDefault } from "../../components/inputFields/inputFiels";
import BlueButton from "../../components/buttons/BlueButton";

const AddStoreForm = ({onClose}) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [inventory, setInventory] = useState("");

  const addressInputRef = useRef(null);
  const nameInputRef = useRef(null);
  const phoneInputRef = useRef(null);
  const inventorywordInputRef = useRef(null);

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
    <div className="mx-4 md:ml-14 md:mr-48">
      <div>
        <label className="font-Nunitoo font-medium text-blue text-14 py-2">
        Store Name
        </label>
        <InputDefault
          setValue={setName}
          handleKeyDown={handleKeyDown}
          inputRef={nameInputRef}
          nextRef={phoneInputRef}
          Placeholder="Stem Electronics"
          bg={"white"}
        />
      </div>
      {/* phone */}
      <div className="mt-3">
        <label className="font-Nunitoo font-medium text-blue text-14 py-2">
          Phone Number
        </label>
        <InputDefault
          setValue={setPhone}
          handleKeyDown={handleKeyDown}
          inputRef={phoneInputRef}
          nextRef={addressInputRef}
          Placeholder="+92 12333 33333"
          bg={"white"}
        />
      </div>

      {/* Store Address */}

      <div className="mt-3">
        <label className="font-Nunitoo font-medium text-blue text-14 py-2">
        Store Address
        </label>
        <InputDefault
          setValue={setAddress}
          handleKeyDown={handleKeyDown}
          inputRef={addressInputRef}
          nextRef={inventorywordInputRef}
          Placeholder="Shop # 57 Opp Plaza Ave "
          bg={"white"}
        />
      </div>

      {/* Inventory */}

      <div className="mt-3">
        <label className="font-Nunitoo font-medium text-blue text-14 py-2">
        Inventory
        </label>
        <InputDefault
          setValue={setInventory}
          handleKeyDown={handleKeyDown}
          inputRef={inventorywordInputRef}
          nextRef={null}
          Placeholder="Availability"
          bg={"white"}
        />
      </div>
      <div
        className="flex justify-center my-2 sm:mt-10 sm:mb-14"
        onClick={() => onClose()}
      >
        <BlueButton text="Submit" />
      </div>
    </div>
  );
};

export default AddStoreForm;
