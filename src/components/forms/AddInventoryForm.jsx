import React, { useState, useEffect, useRef } from "react";

import { InputDefault } from "../../components/inputFields/inputFiels";
import BlueButton from "../../components/buttons/BlueButton";

const AddInventoryForm = ({onClose}) => {
  const [name, setName] = useState("");
  const [manufacturer, setManufacturer] = useState("");
  const [inventory, setInventory] = useState("");
  const [price, setPrice] = useState("");

  const inventoryInputRef = useRef(null);
  const nameInputRef = useRef(null);
  const manufacturerInputRef = useRef(null);
  const PriceInputRef = useRef(null);

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
        Item Name
        </label>
        <InputDefault
          setValue={setName}
          handleKeyDown={handleKeyDown}
          inputRef={nameInputRef}
          nextRef={manufacturerInputRef}
          Placeholder="Nose Plier"
          bg={"white"}
        />
      </div>
      {/* manufacturer */}
      <div className="mt-3">
        <label className="font-Nunitoo font-medium text-blue text-14 py-2">
        Manufacturer
        </label>
        <InputDefault
          setValue={setManufacturer}
          handleKeyDown={handleKeyDown}
          inputRef={manufacturerInputRef}
          nextRef={inventoryInputRef}
          Placeholder="Stem Steel Works"
          bg={"white"}
        />
      </div>

      {/* Quantity */}

      <div className="mt-3">
        <label className="font-Nunitoo font-medium text-blue text-14 py-2">
        Quantity
        </label>
        <InputDefault
          setValue={setInventory}
          handleKeyDown={handleKeyDown}
          inputRef={inventoryInputRef}
          nextRef={PriceInputRef}
          Placeholder="5"
          bg={"white"}
        />
      </div>

      {/* Inventory */}

      <div className="mt-3">
        <label className="font-Nunitoo font-medium text-blue text-14 py-2">
        Price
        </label>
        <InputDefault
          setValue={setPrice}
          handleKeyDown={handleKeyDown}
          inputRef={PriceInputRef}
          nextRef={null}
          Placeholder="$10"
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

export default AddInventoryForm;
