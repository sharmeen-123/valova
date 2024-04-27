import React, { useState } from "react";
import Logo from "../../assets/sidebar/logoSidebar.svg";
import Bg from "../../assets/sidebar/bgSidebar.svg";
import { NavLink } from "react-router-dom";
import DashRoutes from "../../constants/sidebarRoutes";

const Sidebar = () => {
  const [Dash, setDash] = useState(DashRoutes);

  const changeRoute = (index) => {
    setDash((prevDash) => {
      const newDash = prevDash.map((item, i) => ({
        ...item,
        select: i === index ? true : false,
      }));

      // Set the state
      return newDash;
    });
  };

  return (
    <div className={`fixed h-screen bg-blue px-3 flex flex-col w-60`}>
      <div className="flex justify-center mt-8 p-2 items-center">
        <img src={Logo} alt="logo" width={120} />
      </div>

      <div className="flex flex-col justify-between mt-6 w-full">
        {Dash.map((val, ind) => (
          <div key={ind}>
            <NavLink to={val.link}>
              <div
                className={`flex ${
                  val.select ? "rounded-md bg-orange" : ""
                } w-full p-3 mt-1.5 cursor-pointer`}
                onClick={(e) => {
                  changeRoute(ind);
                }}
              >
                <div className="flex ml-3">
                  <img src={val.icon} alt={val.name} width={18} />
                  <p
                    className={`font-Nunitoo text-center ml-2 font-semibold ${
                      ind === 0 ? "text-white2" : "text-white text-opacity-60"
                    } text-16`}
                  >
                    {val.name}
                  </p>
                </div>
              </div>
            </NavLink>
          </div>
        ))}
      </div>
      <div></div>

      <div
        className="absolute bottom-0 left-0 w-40 h-60 bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${Bg})` }}
      ></div>
    </div>
  );
};

export default Sidebar;
