import React, { useState } from "react";

const FirstForm = ({ setResult, result, setShow1, setShow2, setShow3 }) => {
  const [data, setData] = useState();
  const submitHandler = () => {
    setResult(data);
    setShow1(false);
    setShow2(true);
    setShow3(false);
  };
  return (
    <div className="w-full p-5  rounded-lg shadow-lg bg-white max-w-md space-y-8">
      {/* <div>
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Title
            </h2>
          </div> */}

      <div className="grid grid-cols-2 gap-4">
        <div className="form-group mb-3">
          <label
            htmlFor="client"
            className="block text-sm font-medium text-gray-700"
          >
            Client
          </label>
          <div className="relative mt-1 rounded-md shadow-sm">
            <select
              onChange={(e) => {
                setData(() => ({ ...data, client: e.target.value }));
              }}
              id="client"
              name="client"
              className="w-full rounded-md border-gray-300 bg-transparent  pl-7 pr-12 text-gray-500 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            >
              <option>client1</option>
              <option>client2</option>
              <option>client3</option>
            </select>
          </div>
        </div>

        <div className="form-group mb-3">
          <label
            htmlFor="vessel"
            className="block text-sm font-medium text-gray-700"
          >
            Vessel
          </label>
          <div className="relative mt-1 rounded-md shadow-sm">
            <select
              onChange={(e) => {
                setData(() => ({ ...data, vesel: e.target.value }));
              }}
              id="vessel"
              name="vessel"
              className="w-full rounded-md border-gray-300 bg-transparent  pl-7 pr-12 text-gray-500 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            >
              <option>vessel1</option>
              <option>vessel2</option>
              <option>vessel3</option>
            </select>
          </div>
        </div>
      </div>

      <div>
        <label
          htmlFor="MMSI"
          className="block text-sm font-medium text-gray-700"
        >
          MMSI Number
        </label>
        <div className="relative mt-1 rounded-md shadow-sm">
          <input
            onChange={(e) => {
              setData(() => ({ ...data, MMSINumber: e.target.value }));
            }}
            type="text"
            name="MMSI"
            id="MMSI"
            className="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="Enter MMSI Number"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="IMO"
          className="block text-sm font-medium text-gray-700"
        >
          IMO Number
        </label>
        <div className="relative mt-1 rounded-md shadow-sm">
          <input
            onChange={(e) => {
              setData(() => ({ ...data, IMONumber: e.target.value }));
            }}
            type="text"
            name="IMO"
            id="IMO"
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

export default FirstForm;
