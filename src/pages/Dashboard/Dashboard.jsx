import React, { useState } from "react";
import TopBar from "../../components/bars/TopBar";
import DashboardCard from "../../components/cards/DashboardCard";
import User from "../../assets/dashboard/Users.svg";
import Store from "../../assets/dashboard/store.svg";
import Tech from "../../assets/dashboard/technician.svg";
import NewSignup from "../../assets/dashboard/newSignups.svg";
import OrangeButton from "../../components/buttons/OrangeButton";
import ReportCard from "../../components/cards/ReportCard";

const Dashboard = () => {
  const [cards, setCards] = useState([
    {
      icon: User,
      name: "User",
      amount: "30 K",
      percentage: 8,
    },
    {
      icon: Store,
      name: "Hardware Stores",
      amount: "30 K",
      percentage: 10,
    },
    {
      icon: Tech,
      name: "Technicians",
      amount: "30 K",
      percentage: 10,
    },
    {
      icon: NewSignup,
      name: "New Sign ups",
      amount: "30 K",
      percentage: 10,
    },
  ]);
  return (
    <div className="w-full">
      <TopBar title="Dashboard" />
      {/* body */}
      <div className="p-1 sm:p-4 py-6 mr-3">
        <p className="font-Nunitoo font-semibold text-16 sm:text-24">
          Welcome Back, Admin
        </p>
        <p className="font-Nunitoo font-regular text-12">
          Measure your advertising ROI and report w ebsite traffic.
        </p>

        {/* top cards */}
        <div className="flex flex-wrap justify-between my-6">
          {cards.map((val, ind) => {
           return <DashboardCard data={val} key={ind}/>;
          })}
        </div>

        {/* head */}
        <div className="flex flex-wrap justify-between items-center">
        <p className="font-Nunitoo font-semibold text-24">
        Reports Overview
        </p>
        <div className="flex ">
          <OrangeButton text="Export Data"/>
          <OrangeButton text="Generate Report"/>
        </div>
        </div>

        {/* report */}
        <ReportCard />
      </div>
    </div>
  );
};

export default Dashboard;
