import React, { useState } from "react";
import { AiOutlineFilter } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { AddLeads } from "../component/AddLeads";

function Filter({ onClose }) {
  const [showAdd, setshowAdd] = useState(false);
  return (
    <div className="fixed inset-0 bg-white bg-opacity-30 backdrop-blur-xs flex justify-center items-center">
      <div className="w-[65%]">
        <nav className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-semibold">Leads Management</h1>
          </div>
          <div className="flex gap-2">
            <button
              onClick={onClose}
              type="submit"
              className="flex items-center border gap-1 py-1 px-1 font-semibold rounded-sm"
            >
              <AiOutlineFilter /> Hides Filters
            </button>
            <button
              onClick={() => setshowAdd(true)}
              className="bg-black text-white py-1 px-1 rounded-sm"
            >
              Add New Lead
            </button>
          </div>
        </nav>
        <div className="px-6 pt-10 ">
          <div className=" flex items-center border py-2 rounded-md px-2 text-lg border-gray-400 text-gray-500">
            <BsSearch />
            <input
              type="text"
              placeholder="Search by name, Email or phone number...."
              className="pl-2 outline-0 w-full"
            />
          </div>
          <div className="flex flex-col border border-gray-400 my-8 py-3 px-6 rounded-sm">
            <h2 className="text-2xl font-semibold">Advance Filter</h2>
            <div className="flex flex-col">
              <div className="py-4 text-md text-black font-bold">
                <form>
                  <span className="pr-4">Match</span>
                  <input
                    type="radio"
                    id="all"
                    name="match"
                    value="all"
                    className="accent-black mr-2"
                  />
                  <label for="and" className="mr-6">
                    All Condition(AND)
                  </label>
                  <input
                    type="radio"
                    id="all"
                    name="match"
                    value="or"
                    className="accent-black mr-2"
                  />
                  <label for="or">Any Condition(OR)</label>
                </form>
              </div>
              <div className="flex">
                <div className="flex flex-col mb-2  mr-3 border border-gray-400 w-3xs rounded-sm">
                  <select className="p-2 text-gray-600 outline-0">
                    <option>Status</option>
                  </select>
                </div>
                <div className="flex flex-col  mb-2  border border-gray-400 w-full rounded-sm ">
                  <select className="p-2 text-gray-600 outline-0">
                    <option>Select Status</option>
                  </select>
                </div>
              </div>
            </div>
            <button className="py-1.5 px-2 mt-4 border border-gray-400 rounded-sm w-fit">
              Add Filter
            </button>
            <div className="flex gap-3 items-center justify-end">
              <button className="py-1.5 px-2.5 font-semibold border border-gray-400 rounded-sm">
                Clear
              </button>
              <button className="py-1.5 px-2.5 font-semibold rounded-sm bg-black text-white">
                Apply Filter
              </button>
            </div>
          </div>
        </div>
      </div>
      {showAdd && <AddLeads onClose={() => setshowAdd(false)} />}
    </div>
  );
}

export default Filter;
