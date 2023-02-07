import React, { useState } from "react";

const Third = ({ setResult, result, setShow1, setShow2, setShow3 }) => {
  const [data, setData] = useState("");

  const [serviceList, setServiceList] = useState([{}]);
  const [freshWater, setFreshWater] = useState({ testFluid: "Fresh Water" });
  const [testSolution, setTestSolution] = useState([
    {
      testFluid: "Test Solution",
    },
  ]);

  const handleServiceChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...serviceList];
    list[index][name] = value;
    setServiceList(list);
  };

  const handletestSolutionChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...testSolution];
    list[index][name] = value;
    setTestSolution(list);
  };

  //   const handleServiceRemove = (index) => {
  //     const list = [...serviceList];
  //     const testlist = [...testSolution];
  //     list.splice(index, 1);
  //     testlist.splice(index, 1);
  //     setServiceList(list);
  //     setTestSolution(testlist);
  //   };

  const handleServiceAdd = () => {
    setServiceList([...serviceList, {}]);
    setTestSolution([...testSolution, { testFluid: "Test Solution" }]);
  };

  const SubmitHandler = () => {
    setResult(() => ({
      ...result,
      ...data,
      serviceList,
      freshWater,
      testSolution,
    }));
  };

  return (
    <>
      <div className="w-full p-5  rounded-lg shadow-lg bg-white max-w-6xl space-y-8">
        <div>
          <h2 className="mt-2 text-center underline text-2xl font-bold tracking-tight text-gray-600">
            UNIT UNDER TEST SPECIFICATIONS
          </h2>
        </div>

        <div className="form-group mb-3">
          <div className="grid my-6 grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="Make"
                className="block text-sm font-medium text-gray-700"
              >
                Make
              </label>
              <div className="relative mt-1 rounded-md shadow-sm">
                <input
                  onChange={(e) => {
                    setData(() => ({ ...data, Make: e.target.value }));
                  }}
                  type="text"
                  name="Make"
                  id="Make"
                  className="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder="Enter Make "
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="Model"
                className="block text-sm font-medium text-gray-700"
              >
                Model
              </label>
              <div className="relative mt-1 rounded-md shadow-sm">
                <input
                  onChange={(e) => {
                    setData(() => ({ ...data, Model: e.target.value }));
                  }}
                  type="text"
                  name="Model"
                  id="Model"
                  className="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder="Enter Model"
                />
              </div>
            </div>
          </div>

          <div className="grid my-6 grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="SerialNo"
                className="block text-sm font-medium text-gray-700"
              >
                Serial No
              </label>
              <div className="relative mt-1 rounded-md shadow-sm">
                <input
                  onChange={(e) => {
                    setData(() => ({ ...data, SerialNo: e.target.value }));
                  }}
                  type="text"
                  name="SerialNo"
                  id="SerialNo"
                  className="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder="Enter Serial No "
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="Range"
                className="block text-sm font-medium text-gray-700"
              >
                Range
              </label>
              <div className="relative mt-1 rounded-md shadow-sm">
                <input
                  onChange={(e) => {
                    setData(() => ({ ...data, Range: e.target.value }));
                  }}
                  type="text"
                  name="Range"
                  id="Range"
                  className="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder="Enter Range"
                />
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="mt-2 underline text-center text-2xl font-bold tracking-tight text-gray-600">
            ENVIRONMENTAL CONDITION
          </h2>
        </div>

        <div className="form-group mb-3">
          <div className="grid my-6 grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="Temperature"
                className="block text-sm font-medium text-gray-700"
              >
                Temperature
              </label>
              <div className="relative mt-1 rounded-md shadow-sm">
                <input
                  onChange={(e) => {
                    setData(() => ({ ...data, Temperature: e.target.value }));
                  }}
                  type="text"
                  name="Temperature"
                  id="Temperature"
                  className="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder="Enter Temperature "
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="RelativeHumidity"
                className="block text-sm font-medium text-gray-700"
              >
                Relative Humidity
              </label>
              <div className="relative mt-1 rounded-md shadow-sm">
                <input
                  onChange={(e) => {
                    setData(() => ({
                      ...data,
                      RelativeHumidity: e.target.value,
                    }));
                  }}
                  type="text"
                  name="RelativeHumidity"
                  id="RelativeHumidity"
                  className="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder="Enter Relative Humidity"
                />
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="mt-2 text-center underline text-2xl font-bold tracking-tight text-gray-600">
            TRACEABILITY OF REFERENCE EQUIPMENT
          </h2>
        </div>

        <div className="form-field">
          {serviceList.map((singleService, index) => (
            <div key={index} className="services">
              <div>
                <div className="form-group mb-3">
                  <div className="grid my-6 grid-cols-4 gap-4">
                    <div>
                      <label
                        htmlFor="ReferenceInstrument"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Reference Instrument
                      </label>
                      <div className="relative mt-1 rounded-md shadow-sm">
                        <input
                          onChange={(e) => handleServiceChange(e, index)}
                          type="text"
                          name="ReferenceInstrument"
                          id="ReferenceInstrument"
                          className="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          placeholder="Enter Reference Instrument "
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="Make"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Make
                      </label>
                      <div className="relative mt-1 rounded-md shadow-sm">
                        <input
                          onChange={(e) => handleServiceChange(e, index)}
                          type="text"
                          name="Make"
                          id="Make"
                          className="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          placeholder="Enter Make "
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="Type"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Type
                      </label>
                      <div className="relative mt-1 rounded-md shadow-sm">
                        <input
                          onChange={(e) => handleServiceChange(e, index)}
                          type="text"
                          name="Type"
                          id="Type"
                          className="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          placeholder="Enter Type "
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="SerialNo"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Serial No
                      </label>
                      <div className="relative mt-1 rounded-md shadow-sm">
                        <input
                          onChange={(e) => handleServiceChange(e, index)}
                          type="text"
                          name="SerialNo"
                          id="SerialNo"
                          className="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          placeholder="Enter Serial No"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-end mb-2">
                  {serviceList.length - 1 === index && (
                    <button
                      type="button"
                      onClick={handleServiceAdd}
                      className="inline-block px-6 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out"
                    >
                      <span>Add New</span>
                    </button>
                  )}
                </div>
              </div>
              {/* <div className="flex justify-end">
                {serviceList.length !== 1 && (
                  <button
                    type="button"
                    onClick={() => handleServiceRemove(index)}
                    className="inline-block px-6 py-2.5 bg-red-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-600 hover:shadow-lg focus:bg-red-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-700 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    <span>Remove</span>
                  </button>
                )}
              </div> */}
            </div>
          ))}
        </div>

        <div>
          <h2 className="mt-2 text-center underline text-2xl font-bold tracking-tight text-gray-600">
            TEST DETAILS
          </h2>
        </div>

        <div className="form-group mb-3">
          <div className="grid my-6 grid-cols-6 gap-4">
            <div>
              <label
                htmlFor="freshWater"
                className="block text-sm font-medium text-gray-700"
              >
                Test Fluid
              </label>
              <div className="relative mt-1 rounded-md shadow-sm">
                <input
                  type="text"
                  name="freshWater"
                  id="freshWater"
                  className="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  disabled
                  value={"Fresh Water"}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="Concentration"
                className="block text-sm font-medium text-gray-700"
              >
                Concentration
              </label>
              <div className="relative mt-1 rounded-md shadow-sm">
                <input
                  onChange={(e) => {
                    setFreshWater(() => ({
                      ...freshWater,
                      Concentration: e.target.value,
                    }));
                  }}
                  type="text"
                  name="Concentration"
                  id="Concentration"
                  className="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder="Enter Concentration"
                />
              </div>
            </div>{" "}
            <div>
              <label
                htmlFor="MeasuredReading "
                className="block text-sm font-medium text-gray-700"
              >
                Measured Reading
              </label>
              <div className="relative mt-1 rounded-md shadow-sm">
                <input
                  onChange={(e) => {
                    setFreshWater(() => ({
                      ...freshWater,
                      MeasuredReading: e.target.value,
                    }));
                  }}
                  type="text"
                  name="MeasuredReading "
                  id="MeasuredReading "
                  className="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder="Enter Measured Reading "
                />
              </div>
            </div>{" "}
            <div>
              <label
                htmlFor="Error"
                className="block text-sm font-medium text-gray-700"
              >
                Error
              </label>
              <div className="relative mt-1 rounded-md shadow-sm">
                <input
                  onChange={(e) => {
                    setFreshWater(() => ({
                      ...freshWater,
                      Error: e.target.value,
                    }));
                  }}
                  type="text"
                  name="Error"
                  id="Error"
                  className="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder="Enter Error"
                />
              </div>
            </div>{" "}
            <div>
              <label
                htmlFor="Alarm"
                className="block text-sm font-medium text-gray-700"
              >
                Alarm
              </label>
              <div className="relative mt-1 rounded-md shadow-sm">
                <input
                  onChange={(e) => {
                    setFreshWater(() => ({
                      ...freshWater,
                      Alarm: e.target.value,
                    }));
                  }}
                  type="text"
                  name="Alarm"
                  id="Alarm"
                  className="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder="Enter Alarm"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="OverboardValve"
                className="block text-sm font-medium text-gray-700"
              >
                Overboard Valve
              </label>
              <div className="relative mt-1 rounded-md shadow-sm">
                <input
                  onChange={(e) => {
                    setFreshWater(() => ({
                      ...freshWater,
                      OverboardValve: e.target.value,
                    }));
                  }}
                  type="text"
                  name="OverboardValve"
                  id="OverboardValve"
                  className="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder="Enter Overboard Valve"
                />
              </div>
            </div>
          </div>
        </div>

        <div>
          {serviceList &&
            serviceList.map((singleService, index) => (
              <div key={index} className="form-group mb-3">
                <div className="grid my-6 grid-cols-6 gap-4">
                  <div>
                    <label
                      htmlFor="testSolution"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Test Fluid
                    </label>
                    <div className="relative mt-1 rounded-md shadow-sm">
                      <input
                        onChange={(e) => handletestSolutionChange(e, index)}
                        type="text"
                        name="testSolution"
                        id="testSolution"
                        className="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        disabled
                        value={"Test Solution"}
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="Concentration"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Concentration
                    </label>
                    <div className="relative mt-1 rounded-md shadow-sm">
                      <input
                        onChange={(e) => handletestSolutionChange(e, index)}
                        type="text"
                        name="Concentration"
                        id="Concentration"
                        className="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        placeholder="Enter Concentration"
                      />
                    </div>
                  </div>{" "}
                  <div>
                    <label
                      htmlFor="MeasuredReading "
                      className="block text-sm font-medium text-gray-700"
                    >
                      Measured Reading
                    </label>
                    <div className="relative mt-1 rounded-md shadow-sm">
                      <input
                        onChange={(e) => handletestSolutionChange(e, index)}
                        type="text"
                        name="MeasuredReading "
                        id="MeasuredReading "
                        className="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        placeholder="Enter Measured Reading "
                      />
                    </div>
                  </div>{" "}
                  <div>
                    <label
                      htmlFor="Error"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Error
                    </label>
                    <div className="relative mt-1 rounded-md shadow-sm">
                      <input
                        onChange={(e) => handletestSolutionChange(e, index)}
                        type="text"
                        name="Error"
                        id="Error"
                        className="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        placeholder="Enter Error"
                      />
                    </div>
                  </div>{" "}
                  <div>
                    <label
                      htmlFor="Alarm"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Alarm
                    </label>
                    <div className="relative mt-1 rounded-md shadow-sm">
                      <input
                        onChange={(e) => handletestSolutionChange(e, index)}
                        type="text"
                        name="Alarm"
                        id="Alarm"
                        className="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        placeholder="Enter Alarm"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="OverboardValve"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Overboard Valve
                    </label>
                    <div className="relative mt-1 rounded-md shadow-sm">
                      <input
                        onChange={(e) => handletestSolutionChange(e, index)}
                        type="text"
                        name="OverboardValve"
                        id="OverboardValve"
                        className="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        placeholder="Enter Overboard Valve"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>

        <div className="flex space-x-2 justify-center">
          <button
            onClick={SubmitHandler}
            type="button"
            className="inline-block px-6 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out"
          >
            Proceed
          </button>
        </div>
      </div>
    </>
  );
};

export default Third;
