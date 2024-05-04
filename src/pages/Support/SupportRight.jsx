import React, { useState } from "react";
import { InputDefault } from "../../components/inputFields/inputFiels";
import MsgSent from "./MsgSent";
import MsgRecieved from "./MesRecieved";
import Avatar from "../../assets/Avatar.svg";
import SendIcon from "../../assets/sendIcon.svg";

const SupportRight = () => {
  const [msg, setMsg] = useState("");
  const [chat, setChat] = useState([
    { msgSent: "helloo", time: "12:2 am" },
    { msgRecieved: "helloo", time: "12:2 am" },
  ]);

  return (
    <div className="bg-white m-3 ml-0 rounded-lg p-4 h-full flex flex-col">
      <div className="flex gap-3 items-center w-full m-2 border-b border-black border-opacity-20">
        <div className="flex justify-center items-center w-12 h-12 m-2 rounded-full">
          <img src={Avatar} className="object-cover h-full w-full rounded-full" alt="Avatar" />
        </div>
        <p className="font-Nunitoo font-semibold text-16 sm:text-24">Sharmeen</p>
      </div>

      {/* chats */}
      <div className=" flex flex-col justify-end flex-grow overflow-auto" >
        {chat.map((val, ind) => (
          <div key={ind}>
            {val.msgSent ? <MsgSent data={val} /> : <MsgRecieved data={val} />}
          </div>
        ))}
      </div>

      {/* text field */}
      <div className="flex gap-2 mt-2">
        <InputDefault
          setValue={setMsg}
          //   handleKeyDown={handleKeyDown}
          //   inputRef={descriptionInputRef}
          nextRef={null}
          Placeholder="Type your text"
          bg="gray"
        />

        <div className="p-3 h-full bg-blue rounded-lg">
          <img src={SendIcon} alt="Send" />
        </div>
      </div>
    </div>
  );
};

export default SupportRight;
