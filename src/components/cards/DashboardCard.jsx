import React from "react";
import Dots from "../../assets/dashboard/Dots.svg";

const dashboardCard = ({ data }) => {
  return (
    <div className="bg-blue1 rounded-lg m-1.5 w-full xm:32 smm:w-64 ">
    <div className="w-full">
      <div className="flex items-between p-3 w-full ">
        <div className="flex-1">
          <div className="flex">
            <img src={data.icon} />
            <p className="font-Nunitoo font-regular text-12 text-blue4 ml-2">
              {data.name}
            </p>
          </div>
        </div>
          <img src={Dots} />
      </div>

      {/* figures */}
      <div className="flex p-3 items-center">
      <p className="font-Nunitoo font-regular text-24 text-white mx-2">
              {data.amount}
            </p>
    <p className={`font-Nunitoo h-5 text-center px-3 rounded-sm font-regular text-14 bg-opacity-20 ${data.percentage<10? ("text-red2 bg-red"):("text-green2 bg-green")}`}>{data.percentage}%</p>
      </div>
    </div>
    </div>
  );
};

export default dashboardCard;
