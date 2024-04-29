
import Dashboard from '../assets/sidebar/dashIcon.svg'
import User from "../assets/sidebar/userIcon.svg"
import Technicuian from "../assets/sidebar/technicianIcon.svg"
import Store from '../assets/sidebar/storeIcon.svg'
import Setting from '../assets/sidebar/settingsIcon.svg'


export default [
 
    {
      name: "Dashboard",
      link: "/admin",
      icon: Dashboard,
      select: true,
    },
    {
      name: "Users",
      link: "/admin/user",
      icon: User,
      select: false,
    },
    {
      name: "Technicians",
      link: "/admin/technician",
      icon: Technicuian,
      select: false,
    },
    {
      name: "Hardware Stores",
      link: "/admin/store",
      icon: Store,
      select: false,
    },
    {
      name: "Settings",
      link: "/admin/settings",
      icon: Setting,
      select: false,
    }
  ];
  