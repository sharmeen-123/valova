import React, { useState, useEffect, useRef } from "react";

import { InputDefault } from "../../components/inputFields/inputFiels";
import PasswordField from "../../components/inputFields/passwordField";
import ImageField from "../../components/inputFields/ImageField"
import BlueButton from "../../components/buttons/BlueButton";

const SettingForm = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const emailInputRef = useRef(null);
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
    emailInputRef.current.focus();
  }, []);
  return (
    <div>
    <div className="border-b border-b-blue4">
    <p className="font-Nunitoo font-semibold text-blue text-16 sm:text-24 mt-4">
          Settings
        </p>
    </div>
   
        <div className="ml-3 mt-3">
        <p className="font-Nunitoo font-semibold text-blue text-14 sm:text-16">
          Security
        </p>
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
          Placeholder="Change Email"
          bg={"gray"}
        />
      </div>

      {/* password */}

      <div className="mt-3">
        <label className="font-Nunitoo font-medium text-blue text-14 py-2">
          Password
        </label>
        <PasswordField
          setValue={setPass}
          handleKeyDown={handleKeyDown}
          inputRef={passwordInputRef}
          nextRef={null}
          Placeholder="Change Password"
          bg={"gray"}
        />
      </div>
      <div
        className="mt-4" >
        <BlueButton text="Approve" />
      </div>
        </div>


        {/* change img */}
        <div className="ml-3 mt-3">
        <p className="font-Nunitoo font-semibold text-blue text-14 sm:text-16">
          General
        </p>
      {/* email */}

      <div className="mt-3">
        
        <ImageField
          bg={"gray"}
        />
      </div>
      <div
        className="mt-4" >
        <BlueButton text="Upload" />
      </div>
        </div>
    </div>
  );
};

export default SettingForm;
