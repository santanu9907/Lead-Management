import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { AiOutlineFilter } from "react-icons/ai";
import { FaSort, FaSortUp, FaSortDown } from "react-icons/fa";
import { AddLeads } from "../component/AddLeads";
import Filter from "../component/Filter";

function Leads() {
  const [sortColumn, setSortColumn] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");
  const [showAdd, setshowAdd] = useState(false);
  const [showFilter, setshowFilter] = useState(false);

  const columns = [
    "Name",
    "Contact",
    "Status",
    "Qualification",
    "Interest",
    "Source",
    "Assigned To",
    "Updated At",
  ];

  const handleSort = (col) => {
    if (sortColumn === col) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(col);
      setSortOrder("asc");
    }
  };

  const getIcon = (col) => {
    if (col === "Assigned To") return null;
    if (sortColumn !== col)
      return <FaSort className="inline ml-1 text-gray-400" />;
    return sortOrder === "asc" ? (
      <FaSortUp className="inline ml-1 text-gray-600" />
    ) : (
      <FaSortDown className="inline ml-1 text-gray-600" />
    );
  };
  return (
    <div>
      <div>
        <nav className="flex w-full items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold">Leads</h2>
            <p className="text-sm font-semibold text-gray-500">
              Manage and track your leads
            </p>
          </div>
          <button
            onClick={() => setshowAdd(true)}
            className="flex items-center justify-center bg-blue-600 text-white p-1 rounded-sm"
          >
            <FaPlus /> Add Lead
          </button>
        </nav>
        <div className="flex items-center px-4 gap-4">
          <input
            type="text"
            placeholder="Search leads...."
            className="border my-4 w-[92%] px-3 py-2 rounded-lg border-gray-500"
          />
          <button
            onClick={() => setshowFilter(true)}
            className="flex items-center border border-gray-500 p-1.5 gap-1 font-semibold rounded-lg"
          >
            <AiOutlineFilter />
            Filter
          </button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left text-gray-600">
          <thead className="bg-gray-50 text-xs font-medium text-gray-500 uppercase">
            <tr>
              {columns.map((col) => (
                <th
                  key={col}
                  className="px-4 py-3 cursor-pointer select-none"
                  onClick={() => handleSort(col)}
                >
                  {col} {getIcon(col)}
                </th>
              ))}
            </tr>
          </thead>
        </table>
      </div>
      {showAdd && <AddLeads onClose={() => setshowAdd(false)} />}
      {showFilter && <Filter onClose={() => setshowFilter(false)} />}
    </div>
  );
}

export default Leads;
