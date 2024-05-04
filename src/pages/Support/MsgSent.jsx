import React from "react";

const MsgSent = ({ data }) => {
  return (
    <div className="flex m-2">
      <div className="flex max-w-2/3 items-end gap-4 p-2 bg-gray rounded-lg w-auto">
        <p className="font-Nunitoo font-regular text-black text-16">
          {data.msgSent}
        </p>
        <p className="font-Nunitoo font-regular text-black text-10">
          {data.time}
        </p>
      </div>
    </div>
  );
};

export default MsgSent;
