import React from "react";
import FirstForm from "../components/first";
import SecondForm from "../components/second";

const Form = () => {
  return (
    <>
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-black">
        {/* <FirstForm /> */}
        <SecondForm />
      </div>
    </>
  );
};

export default Form;
