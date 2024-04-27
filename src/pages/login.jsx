import React, { useState, useRef, useEffect } from "react";
import Logo from "../assets/logo.svg";
import { InputDefault } from "../components/inputFields/inputFiels";
import PasswordField from "../components/inputFields/passwordField";
import { CheckboxLabel } from "../components/checkbox/checkbox";
import { NavLink } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);
  const [isChecked, setIsChecked] = useState(false);

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
     

      {/* Your content */}
      <div className="absolute inset-0 flex flex-col mt-16 items-center">
        <img src={Logo} alt="Logo" className="w-24 h-20 xm:w-40 xm:h-30" />

        <p className="font-Nunitoo font-bold text-blue text-16 sm:text-24 md:text-32 mt-1  md:mt-12">
          Let’s get you login!
        </p>
        <p className="font-Nunitoo font-regular text-opacity-60 text-blue text-12 sm:text-14 md:text-16">
          Enter your information below
        </p>

        {/* text fields */}
        <div className="flex flex-col p-2 w-auto sm:w-80 mt-10">
          <label className="font-Nunitoo font-medium text-blue text-14">
            Email
          </label>
          <InputDefault
            setValue={setEmail}
            handleKeyDown={handleKeyDown}
            inputRef={emailInputRef}
            nextRef={passwordInputRef}
            Placeholder="mail@simmmple.com"
            bg={"gray"}
          />

          <label className="font-Nunitoo font-medium text-blue text-14 mt-4">
            Password
          </label>
          <PasswordField
            setValue={setPass}
            handleKeyDown={handleKeyDown}
            inputRef={passwordInputRef}
            nextRef={null}
            Placeholder="Min 8 characters"
            bg={"gray"}
          />

          {/* checkbox */}
          <div className="flex justify-between mt-1">
            <div className="flex items-center">
              <CheckboxLabel
                isChecked={isChecked}
                setIsChecked={setIsChecked}
              />
              <p className="font-Nunitoo font-medium text-blue text-14  ml-2">
                Keep me logged in
              </p>
            </div>
            <button className="border-none focus:outline-none">
              <p className="font-Nunitoo font-medium text-orange text-14 ">
                Forget Password?
              </p>
            </button>
          </div>

          {/* sign in button */}
          <NavLink to={"/admin"}>
          <button className="border-none focus:outline-none bg-blue text-white mt-12 py-3 rounded-lg w-full">
            <p className="font-Nunitoo font-medium text-white text-14 ">
              Sign In
            </p>
          </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Login;
