import { useState } from "react";

export default function Design() {
  const letterMessage = "hover is not there";
  const [hoverState, setHoverState] = useState(letterMessage);

  const handleMouseOver = () => {
    setHoverState("the best way to hover");
  };


  const handleMouseOut = () => {
    setHoverState(letterMessage);
  };

  return (
    <div>
      <h1
        className="text-4xl text-center font-bold text-blue-500 hover:text-red-500 duration-700 border-2 border-teal-800 mt-5 mx-auto max-w-4xl p-5 rounded-lg"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        {hoverState}
      </h1>
    </div>
  );
}
