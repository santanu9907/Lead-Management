import { useState } from "react";
import { FiMenu, FiX, FiHome, FiSettings, FiLogOut } from "react-icons/fi";
import { FaRegCalendar } from "react-icons/fa";
import { MdNotificationsNone } from "react-icons/md";
import { BsBox } from "react-icons/bs";
import { NavLink } from "react-router-dom";

export default function Sidebar({ open, setOpen }) {
  const links = [
    { path: "/", name: "Dashboard", icon: <FiHome size={20} /> },
    {
      path: "/follow-ups",
      name: "Follow Ups",
      icon: <FaRegCalendar size={20} />,
    },
    { path: "/leads", name: "Leads", icon: <FiLogOut size={20} /> },
    {
      path: "/notification",
      name: "Notification",
      icon: <MdNotificationsNone size={20} />,
    },
    { path: "/products", name: "Products", icon: <BsBox size={20} /> },
    {
      path: "/sales-activity",
      name: "Sales Activity",
      icon: <FiLogOut size={20} />,
    },
    { path: "/settings", name: "Settings", icon: <FiSettings size={20} /> },
  ];

  return (
    <div
      className={`fixed top-0 left-0 h-full bg-white text-black 
        ${open ? "w-64" : "w-16"} 
        transition-all duration-300 ease-in-out z-50`}
    >
      {/* Header */}
      <div className="flex justify-between items-center p-4 border-b border-gray-700">
        {open && <h1 className="text-xl font-bold">LeadCRM</h1>}
        <button onClick={() => setOpen(!open)}>
          {open ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Nav links */}
      <nav className="flex flex-col p-2 space-y-2">
        {links.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            end
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-lg transition 
              ${
                isActive
                  ? "bg-gray-700 text-white"
                  : "text-black hover:bg-gray-400"
              }`
            }
          >
            {link.icon}
            {open && <span>{link.name}</span>}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
