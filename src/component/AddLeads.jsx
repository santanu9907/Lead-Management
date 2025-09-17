export const AddLeads = ({ onClose }) => {
  return (
    <div className="fixed inset-0  bg-opacity-30 backdrop-blur-xs flex justify-center items-center">
      <div className="h-fit w-fit bg-gray-200 flex justify-between items-center">
        <div className="flex flex-col mx-auto rounded bg-white">
          <div className="m-3 mb-5">
            <h1 className="text-xl font-bold text-slate-800">Add Leads</h1>
          </div>
          <div className="flex mb-1 mr-2">
            <div className="left-div flex flex-col">
              <div className="flex flex-col mx-3 mb-2">
                <lable className="my-2">Name</lable>
                <input className="p-2 rounded" type="text" />
              </div>
              <div className="flex flex-col mx-3 mb-2">
                <lable className="my-2">Alt. Phone</lable>
                <input className="p-2 rounded" type="text" />
              </div>
              <div className="flex flex-col mx-3 mb-2">
                <lable className="my-2">Alt. Email</lable>
                <input className="p-2 rounded" type="email" />
              </div>
              <div className="flex flex-col mx-3 mb-2">
                <lable className="my-2">Qualification</lable>
                <select className="p-2 text-gray-600">
                  <option>High School</option>
                  <option>Bachelor</option>
                  <option>Master</option>
                </select>
              </div>
              <div className="flex flex-col mx-3 mb-2">
                <lable className="my-2">Source</lable>
                <select className="p-2 text-gray-600">
                  <option>Website</option>
                  <option>Mobile App</option>
                </select>
              </div>
              <div className="flex flex-col mx-3 mb-2">
                <lable className="my-2">City</lable>
                <select className="p-2 text-gray-600">
                  <option>Kolkaata</option>
                  <option>Bangaluru</option>
                </select>
              </div>
              <div className="flex flex-col mx-3 mb-2">
                <lable className="my-2">Heared From</lable>
                <select className="p-2 text-gray-600">
                  <option>Social Media</option>
                  <option>Friend</option>
                  <option>Our Website</option>
                </select>
              </div>
            </div>
            <div className="right-div flex flex-col">
              <div className="flex flex-col mx-3 mb-2">
                <lable className="my-2">Phone</lable>
                <input className="p-2 rounded" type="text" />
              </div>
              <div className="flex flex-col mx-3 mb-2">
                <lable className="my-2">Email</lable>
                <input className="p-2 rounded" type="email" />
              </div>
              <div className="flex flex-col mx-3 mb-2">
                <lable className="my-2">Status</lable>
                <select className="p-2 text-gray-600">
                  <option>New</option>
                  <option>Freshers</option>
                  <option>Exprienced</option>
                </select>
              </div>
              <div className="flex flex-col mx-3 mb-2">
                <lable className="my-2">Interested Field</lable>
                <select className="p-2 text-gray-600">
                  <option>Web Development</option>
                  <option>App Development</option>
                </select>
              </div>
              <div className="flex flex-col mx-3 mb-2">
                <lable className="my-2">Assigned To</lable>
                <select className="p-2 text-gray-600">
                  <option>John Doe</option>
                </select>
              </div>
              <div className="flex flex-col mx-3 mb-2">
                <lable className="my-2">Passout Year</lable>
                <input className="p-2 rounded" type="text" />
              </div>
            </div>
          </div>
          <div className="flex justify-end mx-3 mb-2">
            <button
              onClick={onClose}
              type="sumit"
              className="p-2 m-3 rounded mx-2 bg-gray-100 hover:bg-gray-300"
            >
              Cancel
            </button>
            <button
              type="sumit"
              className="p-2 m-3 rounded text-white bg-blue-600 hover:bg-blue-800"
            >
              Add Leads
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
