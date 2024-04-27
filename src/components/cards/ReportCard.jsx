import { Button } from "@material-tailwind/react";
import React, { useState } from "react";
import SemiCirclePieChart from "../chart/SemiCircleChart";
import ChartBottom from "../chart/ChartBottom";

const ReportCard = () => {
  const [selectButton, setSelectButton] = useState(1);
  
  return (
    <div className="bg-blue1 rounded-lg p-4 m-4 mr-10 mdd:mr-4 w-64 sm:w-80 mdd:w-1/2">
      <div className="flex flex-wrap justify-between items-center ">
        <p className="font-Nunitoo text-16 font-medium text-white">
          Users by device
        </p>
        <div className="flex cursor-pointer">
          <div
            className={`rounded-l-lg ${
              selectButton == 1 ? "bg-orange" : "bg-gray4"
            } p-2.5 px-4`}
            onClick={() => setSelectButton(1)}
          >
            <p className={`font-Nunito text-10 font-regular text-white`}>
              Monthly
            </p>
          </div>
          <div
            className={`rounded-r-lg ${
              selectButton == 2 ? "bg-orange" : "bg-gray4"
            } p-2.5 px-4`}
            onClick={() => setSelectButton(2)}
          >
            <p className="font-Nunito text-10 font-regular text-white">
              Annually
            </p>
          </div>
        </div>
      </div>

            {/* pie chart */}
            <SemiCirclePieChart />

            <div className="mb-4" style={{ marginTop: "-60px" }}>
                <ChartBottom name="Users" number="122222" bg='purple' />
                <ChartBottom name="Technicians" number="122222" bg='blue4' />
                <ChartBottom name="Hardware Stores" number="122222" bg='blue6' />
            </div>

           
    </div>
  );
};

export default ReportCard;
