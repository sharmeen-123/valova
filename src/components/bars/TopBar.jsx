import React, { useState, useContext } from "react";
import SearchFiels from "../inputFields/SearchFiels";
import search from "../../assets/SearchTopBar.svg";
import Noti from "../../assets/Notification.svg";
import Avatar from "../../assets/Avatar.svg";
import { AuthContext } from "../../App";
import Logo from "../../assets/sidebar/threeLines.png";

const TopBar = ({ title }) => {
  const [Search, setSearch] = useState("");
  const { hideSidebar, setHideSidebar } = useContext(AuthContext);
  return (
    <div className="flex flex-row p-2 xm:items-center xm:justify-between bg-white width-full shadow-md">
      {hideSidebar && (
        <div
          className="block md:hidden flex justify-center items-center"
          onClick={() => setHideSidebar(false)}
        >
          <img src={Logo} alt="logo" className="h-5 w-5 object-cover"/>
        </div>
      )}

      <div className="xm:flex-1">
        <div className="flex items-center justify-around">
          <p className="font-Nunitoo font-medium text-black text-14 sm:text-16 md:text-24 p-1">
            {title}
          </p>
          <SearchFiels
            setValue={setSearch}
            Bg="gray"
            Placeholder="Search..."
            PlaceholderColor="blue2"
            iconn={search}
          />
          <img src={Noti} width={50} />
        </div>
      </div>
      <div className="xm:flex-1">
        <div className="flex items-center justify-end">
          <div className="flex flex-col">
            <p className="font-Nunitoo font-medium  text-10 sm:text-12 text-darkGray">
              Hello
            </p>
            <p className="font-Nunitoo text-black font-medium text-12  sm:text-14 md:text-16">
              Admin
            </p>
          </div>
          {/* profile pic */}
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-full mx-3">
            <img src={Avatar} className="object-cover w-full h-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
