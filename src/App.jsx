import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./component/Sidebar";

import Dashboard from "./pages/Dashboard";
import FollowUps from "./pages/FollowUps";
import Leads from "./pages/Leads";
import Notification from "./pages/Notification";
import Products from "./pages/Products";
import SalesActivity from "./pages/SalesActivity";
import Settings from "./pages/Settings";
import { useState } from "react";

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <Router>
      <div className="flex">
        {/* Sidebar */}
        <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />

        {/* Main content */}
        <div
          className={`flex-1 p-6 bg-gray-100 min-h-screen 
          transition-all duration-300 ease-in-out
          ${sidebarOpen ? "md:ml-64" : "md:ml-16"}`}
        >
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/follow-ups" element={<FollowUps />} />
            <Route path="/leads" element={<Leads />} />
            <Route path="/notification" element={<Notification />} />
            <Route path="/products" element={<Products />} />
            <Route path="/sales-activity" element={<SalesActivity />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="*" element={<h2>Page Not Found!</h2>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
