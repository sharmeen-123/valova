import "@fontsource/nunito"; // Defaults to weight 400
import "@fontsource/nunito/700.css"; // Specify weight
import "@fontsource/nunito/600.css"; // Specify weight
import "@fontsource/nunito/500.css"; // Specify weight
import "@fontsource/nunito/400.css"; // Specify weight
import "@fontsource/nunito/400-italic.css"; // Specify weight and style

import { BrowserRouter, Routes, Route } from "react-router-dom";

import React, { useState } from "react";

import Login from "./pages/login";
import Sidebar from "./components/bars/SideBar";
import SmallSidebar from "./components/bars/SmallSidebar";
import Dashboard from "./pages/Dashboard/Dashboard";
import User from "./pages/users/user";
import Technician from "./pages/Technician/Technician";
import Store from "./pages/Store/Store";
import Inventory from "./pages/Inventory/Inventory";
import SidebarIcon from "./assets/sidebar/threeLines.png";
import BgTop from "./assets/loginBgTop.svg";
import BgBottom from "./assets/loginBgBottom.svg";

export const AuthContext = React.createContext();

function App() {
  const [hideSidebar, setHideSidebar] = useState(false);
  const value = {
    hideSidebar,
    setHideSidebar,
  };

  // screen
  const Outlet = (component) => {
    return (
      <div className="w-screen h-screen bg-gray">
        <div className="hidden md:block "
        style={{ overflowX: "hidden" }}>
         <style>{`
        body {
          overflow-x: hidden;
        }
      `}</style>

          <div className="h-full grid grid-cols ">
          <div className="flex-grow ">
            <Sidebar />
            </div>
            <div className="bg-gray h-full ml-60 flex-grow">{component}</div>
          </div>
        </div>

        {/* medium screen */}
        <div className="block md:hidden">
          <div className="h-screen grid grid-cols w-full">
            {hideSidebar ? (
              <div className="flex bg-gray h-full">{component}</div>
            ) : (
              <div>

              <SmallSidebar />
              <div className="bg-gray h-full ml-20 flex-grow ">{component}</div>
              </div>
            )}

           
          </div>
        </div>
      </div>
    );
  };

   // screen
   const LoginOutlet = (component) => {
    return (
      <div className="relative h-screen w-screen bg-gray">
       {/* Background image for top left corner */}
       <div
        className="absolute top-0 left-0 w-1/2 xm:w-1/3 md:w-1/4 lg:w-1/5 h-1/3 sm:h-1/2 bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${BgTop})` }}
      ></div>

     
        {component}
         {/* Background image for bottom right corner */}
      <div
        className="absolute bottom-0 right-0 w-1/2 xm:w-1/3 md:w-1/4 lg:w-1/5 h-1/3 sm:h-1/2 bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${BgBottom})` }}
      ></div>
      </div>
    );
  };
  return (
    <BrowserRouter>
      <AuthContext.Provider value={value}>
        <Routes>
          <Route path="/" element={LoginOutlet(<Login />)} />
          <Route path="/admin" element={Outlet(<Dashboard />)} />
          <Route path="/admin/user" element={Outlet(<User />)} />
          <Route path="/admin/technician" element={Outlet(<Technician />)} />
          <Route path="/admin/store" element={Outlet(<Store />)} />
          <Route path="/admin/inventory" element={Outlet(<Inventory />)} />
        </Routes>
      </AuthContext.Provider>
    </BrowserRouter>
  );
}

export default App;
