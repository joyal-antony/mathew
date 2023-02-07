import React, { useState } from "react";
import FirstForm from "../components/first";
import SecondForm from "../components/second";
import Third from "../components/third";

const Form = () => {
  const [result, setResult] = useState("");
  const [show1, setShow1] = useState(true);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  console.log(result);
  return (
    <>
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-black">
        {show1 && !show2 && !show3 && (
          <FirstForm
            result={result}
            setResult={setResult}
            setShow1={setShow1}
            setShow2={setShow2}
            setShow3={setShow3}
          />
        )}
        {!show1 && show2 && !show3 && (
          <SecondForm
            result={result}
            setResult={setResult}
            setShow1={setShow1}
            setShow2={setShow2}
            setShow3={setShow3}
          />
        )}
        {!show1 && !show2 && show3 && (
          <Third
            result={result}
            setResult={setResult}
            setShow1={setShow1}
            setShow2={setShow2}
            setShow3={setShow3}
          />
        )}
      </div>
    </>
  );
};

export default Form;
