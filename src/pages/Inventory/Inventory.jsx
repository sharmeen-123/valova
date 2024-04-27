import React, { useEffect, useState } from "react";
import TopBar from "../../components/bars/TopBar";
import Table from "../../components/table/Table";
import Avatar from "../../assets/Avatar.svg";
import TableTop from "../../components/TableTop/InventoryTop";
import AddUser from "../../components/popup/addUser";
import AddInventoryForm from "../../components/forms/AddInventoryForm";

import { useLocation } from "react-router-dom";

const Inventory = () => {
  const [showPopup, setShowPopup] = useState(false);
  const location = useLocation();
  const initialUserState = location.state ? location.state.name : null; // Handle null or undefined state

  useEffect(() => {
    console.log("initial state is", initialUserState);
  }, []);

  const [tableHeader, setTableHeader] = useState(["Item", "Quantity", "Price"]);

  const [selectedNo, setSelectedNo] = useState(0);

  const [data, setData] = useState([
    {
      image: Avatar,
      name: "Alex Costs",
      email: "alexcost@gmail.com",
      quantity: "100",
      price: "$ 1000",
      isSelected: false,
    },
    {
      image: Avatar,
      name: "Alex Costs",
      email: "alexcost@gmail.com",
      quantity: "100",
      price: "$ 1000",
      isSelected: false,
    },
    {
      image: Avatar,
      name: "Alex Costs",
      email: "alexcost@gmail.com",
      quantity: "100",
      price: "$ 1000",
      isSelected: false,
    },
    {
      image: Avatar,
      name: "Alex Costs",
      email: "alexcost@gmail.com",
      quantity: "100",
      price: "$ 1000",
      isSelected: false,
    },
    {
      image: Avatar,
      name: "Alex Costs",
      email: "alexcost@gmail.com",
      quantity: "100",
      price: "$ 1000",
      isSelected: false,
    },
    {
      image: Avatar,
      name: "Alex Costs",
      email: "alexcost@gmail.com",
      quantity: "100",
      price: "$ 1000",
      isSelected: false,
    },
    {
      image: Avatar,
      name: "Alex Costsgg",
      email: "alexcost@gmail.com",
      quantity: "100",
      price: "$ 1000",
      isSelected: false,
    },
    {
      image: Avatar,
      name: "Alex Costs hh",
      email: "alexcost@gmail.com",
      quantity: "100",
      price: "$ 1000",
      isSelected: false,
    },
    {
      image: Avatar,
      name: "Alex Costsgg",
      email: "alexcost@gmail.com",
      quantity: "100",
      price: "$ 1000",
      isSelected: false,
    },
    {
      image: Avatar,
      name: "Alex Costs hh",
      email: "alexcost@gmail.com",
      quantity: "100",
      price: "$ 1000",
      isSelected: false,
    },
    {
      image: Avatar,
      name: "Alex Costsgg",
      email: "alexcost@gmail.com",
      quantity: "100",
      price: "$ 1000",
      isSelected: false,
    },
    {
      image: Avatar,
      name: "Alex Costs hh",
      email: "alexcost@gmail.com",
      quantity: "100",
      price: "$ 1000",
      isSelected: false,
    },
  ]);

  return (
    <div className="w-full">
      <TopBar title="Hardware Store" />
      {/* body */}
      <div className="p-1 sm:p-4 py-6">
        <TableTop
          selectedNo={selectedNo}
          type="Item"
          button="+ Add Inventory"
          setShowPopup={setShowPopup}
          heading={initialUserState}
        />
        <div className="mx-1">
          <Table
            tableHeader={tableHeader}
            data={data}
            setData={setData}
            cell2="email"
            cell3="quantity"
            cell4="price"
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
            heading="New Inventory"
            Formm={AddInventoryForm}
            item={initialUserState}
          />
        </>
      )}
    </div>
  );
};

export default Inventory;
