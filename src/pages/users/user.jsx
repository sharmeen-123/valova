import React, { useState } from "react";
import TopBar from "../../components/bars/TopBar";
import Table from "../../components/table/Table";
import Avatar from "../../assets/Avatar.svg";
import TableTop from "../../components/TableTop/TableTop";
import AddUser from "../../components/popup/addUser";
import AddUserForm from "../../components/forms/AddUserForm";

const User = () => {
  const [showPopup, setShowPopup] = useState(false);

  const [tableHeader, setTableHeader] = useState([
    "User",
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
      <TopBar title="Users" />
      {/* body */}
      <div className="p-1 sm:p-4 py-6">
        <TableTop selectedNo={selectedNo}
            type='Users' 
            button="+ Add User"
            setShowPopup= {setShowPopup} />
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
            setShowPopup= {setShowPopup}
          />
        </div>
      </div>

      {showPopup && (
 <>
    <AddUser onClose={() => setShowPopup(false)} heading="Add User" Formm={AddUserForm} />
  </>
)}


    </div>
  );
};

export default User;
