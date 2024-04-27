import React, { useState, useEffect, useRef } from "react";

import { InputDefault } from "../../components/inputFields/inputFiels";
import PasswordField from "../../components/inputFields/passwordField";
import BlueButton from "../../components/buttons/BlueButton";

const AddUserForm = ({onClose}) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const emailInputRef = useRef(null);
  const nameInputRef = useRef(null);
  const phoneInputRef = useRef(null);
  const passwordInputRef = useRef(null);

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
          Full Name
        </label>
        <InputDefault
          setValue={setName}
          handleKeyDown={handleKeyDown}
          inputRef={nameInputRef}
          nextRef={phoneInputRef}
          Placeholder="John Doe"
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
          nextRef={emailInputRef}
          Placeholder="+92 12333 33333"
          bg={"white"}
        />
      </div>

      {/* email */}

      <div className="mt-3">
        <label className="font-Nunitoo font-medium text-blue text-14 py-2">
          Email
        </label>
        <InputDefault
          setValue={setEmail}
          handleKeyDown={handleKeyDown}
          inputRef={emailInputRef}
          nextRef={passwordInputRef}
          Placeholder="John@gmail.com"
          bg={"white"}
        />
      </div>

      {/* password */}

      <div className="mt-3">
        <label className="font-Nunitoo font-medium text-blue text-14 py-2">
          Password
        </label>
        <PasswordField
          setValue={setEmail}
          handleKeyDown={handleKeyDown}
          inputRef={passwordInputRef}
          nextRef={null}
          Placeholder="Min 8 characters"
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

export default AddUserForm;
