import React, { useState } from "react";

const SecondForm = () => {
  const [data, setData] = useState();
  const submitHandler = () => {
    console.log(data);
  };

  function toggleField(hideObj, showObj) {
    hideObj.disabled = true;
    hideObj.style.display = "none";
    showObj.disabled = false;
    showObj.style.display = "inline";
    showObj.focus();
  }

  return (
    <div className="w-full p-5  rounded-lg shadow-lg bg-white max-w-md space-y-8">
      <div>
        <label
          htmlFor="jobNo"
          className="block text-sm font-medium text-gray-700"
        >
          Job No
        </label>
        <div className="relative mt-1 rounded-md shadow-sm">
          <input
            onChange={(e) => {
              setData(() => ({ ...data, jobNo: e.target.value }));
            }}
            type="text"
            name="jobNo"
            id="jobNo"
            className="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="Enter Job Number"
          />
        </div>
      </div>

      <div className="form-group mb-3">
        <label
          htmlFor="location"
          className="block text-sm font-medium text-gray-700"
        >
          Location
        </label>
        <select
          name="location"
          className="w-full rounded-md border-gray-300 bg-transparent  pl-7 pr-12 text-gray-500 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          onChange={(e) => {
            setData(() => ({ ...data, location: e.target.value }));
            if (e.target.value == "customOption") {
              toggleField(e.target, e.target.nextElementSibling);
              e.target.selectedIndex = "0";
            }
          }}
        >
          <option>Select location</option>
          <option>Chrome</option>
          <option>Firefox</option>
          <option>Internet Explorer</option>
          <option>Opera</option>
          <option>Safari</option>
          <option value="customOption">[Add new location]</option>
        </select>
        <input
          name="location"
          style={{ display: "none" }}
          disabled="disabled"
          className="w-full rounded-md border-gray-300 bg-transparent  pl-7 pr-12 py-2 text-gray-500 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          onBlur={(e) => {
            if (e.target.value == "") {
              toggleField(e.target, e.target.previousSibling);
            }
          }}
          onChange={(e) => {
            setData(() => ({ ...data, location: e.target.value }));
          }}
        ></input>
      </div>

      <div>
        <label
          htmlFor="certificate"
          className="block text-sm font-medium text-gray-700"
        >
          Certificate{" "}
        </label>
        <div className="relative mt-1 rounded-md shadow-sm">
          <input
            type="text"
            name="certificate"
            id="certificate"
            value="autoselect"
            className="block bg-gray-100 w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            disabled
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="procedure"
          className="block text-sm font-medium text-gray-700"
        >
          Procedure
        </label>
        <div className="relative mt-1 rounded-md shadow-sm">
          <input
            type="text"
            name="procedure"
            id="procedure"
            value="autoselect"
            className="block bg-gray-100 w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            disabled
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="testdate"
          className="block text-sm font-medium text-gray-700"
        >
          Test Date
        </label>
        <div className="relative mt-1 rounded-md shadow-sm">
          <input
            type="text"
            name="testdate"
            id="testdate"
            value="autoselect"
            className="block bg-gray-100 w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            disabled
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="testdue"
          className="block text-sm font-medium text-gray-700"
        >
          Test Due
        </label>
        <div className="relative mt-1 rounded-md shadow-sm">
          <input
            type="text"
            name="testdue"
            id="testdue"
            value="autoselect"
            className="block bg-gray-100 w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            disabled
          />
        </div>
      </div>

      <div className="flex space-x-2 justify-center">
        <button
          onClick={submitHandler}
          type="button"
          className="inline-block px-6 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out"
        >
          Proceed
        </button>
      </div>
    </div>
  );
};

export default SecondForm;
