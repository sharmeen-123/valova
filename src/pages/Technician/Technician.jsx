import React, { useState } from "react";
import TopBar from "../../components/bars/TopBar";
import Table from "../../components/table/Table";
import Avatar from "../../assets/Avatar.svg";
import TableTopWith2Buttons from "../../components/TableTop/TableTopWith2Buttons";
import AddUser from "../../components/popup/addUser";
import AddBuisseness from "../../components/popup/AddBuisseness";
import AddServices from "../../components/popup/AddServices";
import ServiceSchedule from "../../components/popup/ServiceSchedule";
import AddUserForm from "../../components/forms/AddUserForm";

const Technician = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [showAddBusinessPopup, setShowAddBussinessPopup] = useState(false);
  const [showAddServicePopup, setShowAddServicePopup] = useState(false);
  const [showSchedulePopup, setShowSchedulePopup] = useState(false)
  const [tableHeader, setTableHeader] = useState([
    "Technician",
    "Phone Number",
    "Role",
  ]);

  const [selectedNo, setSelectedNo] = useState(0);

  const [data, setData] = useState([
    {
      image: Avatar,
      name: "Alex Costs",
      email: "alexcost@gmail.com",
      phone: "+92 34555 6677",
      role: "Customer",
      isSelected: false,
    },
    {
      image: Avatar,
      name: "Alex Costs",
      email: "alexcost@gmail.com",
      phone: "+92 34555 6677",
      role: "Customer",
      isSelected: false,
    },
    {
      image: Avatar,
      name: "Alex Costs",
      email: "alexcost@gmail.com",
      phone: "+92 34555 6677",
      role: "Customer",
      isSelected: false,
    },
    {
      image: Avatar,
      name: "Alex Costs",
      email: "alexcost@gmail.com",
      phone: "+92 34555 6677",
      role: "Customer",
      isSelected: false,
    },
    {
      image: Avatar,
      name: "Alex Costs",
      email: "alexcost@gmail.com",
      phone: "+92 34555 6677",
      role: "Customer",
      isSelected: false,
    },
    {
      image: Avatar,
      name: "Alex Costs",
      email: "alexcost@gmail.com",
      phone: "+92 34555 6677",
      role: "Customer",
      isSelected: false,
    },
    {
      image: Avatar,
      name: "Alex Costsgg",
      email: "alexcost@gmail.com",
      phone: "+92 34555 6677",
      role: "Customer",
      isSelected: false,
    },
    {
      image: Avatar,
      name: "Alex Costs hh",
      email: "alexcost@gmail.com",
      phone: "+92 34555 6677",
      role: "Customer",
      isSelected: false,
    },
    {
      image: Avatar,
      name: "Alex Costsgg",
      email: "alexcost@gmail.com",
      phone: "+92 34555 6677",
      role: "Customer",
      isSelected: false,
    },
    {
      image: Avatar,
      name: "Alex Costs hh",
      email: "alexcost@gmail.com",
      phone: "+92 34555 6677",
      role: "Customer",
      isSelected: false,
    },
    {
      image: Avatar,
      name: "Alex Costsgg",
      email: "alexcost@gmail.com",
      phone: "+92 34555 6677",
      role: "Customer",
      isSelected: false,
    },
    {
      image: Avatar,
      name: "Alex Costs hh",
      email: "alexcost@gmail.com",
      phone: "+92 34555 6677",
      role: "Customer",
      isSelected: false,
    },
  ]);

  return (
    <div className="w-full">
      <TopBar title="Technician" />
      {/* body */}
      <div className="p-1 sm:p-4 py-6">
        <TableTopWith2Buttons
          selectedNo={selectedNo}
          type="Technicians"
          button1="+ Add Technician"
          button2="+ Add Bussiness"
          setShowPopup1={setShowPopup}
          setShowPopup2={setShowAddBussinessPopup}
        />
        <div className="mx-1">
          <Table
            tableHeader={tableHeader}
            data={data}
            setData={setData}
            cell2="email"
            cell3="phone"
            cell4="role"
            selectedNo={selectedNo}
            setSelectedNo={setSelectedNo}
            setShowPopup={setShowPopup}
          />
        </div>
      </div>

      {showPopup && (
        <>
          <AddUser
            onClose={() => setShowPopup(false)}
            heading="Add Technician"
            Formm={AddUserForm} 
          />
        </>
      )}
      {showAddBusinessPopup && (
        <>
          <AddBuisseness
            onClose={() => setShowAddBussinessPopup(false)}
            heading="New Business"
            name="John Doe"
            setNext={() => {
                setShowAddBussinessPopup(false)
                setShowAddServicePopup(true)}}
          />
        </>
      )}

      {showAddServicePopup && (
        <>
          <AddServices
            onClose={() => {
                setShowAddBussinessPopup(false)
                setShowAddServicePopup(false)}}
            heading="Services"
            name="John Doe"
            setNext={() => {
                setShowAddServicePopup(false)
                setShowSchedulePopup(true)}}
          />
        </>
      )}

      {showSchedulePopup && (
        <>
          <ServiceSchedule
            onClose={() => setShowSchedulePopup(false)}
            heading="Services Schedule"
            name="John Doe"
          />
        </>
      )}
    </div>
  );
};

export default Technician;
