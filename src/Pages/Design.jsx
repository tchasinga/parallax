import { useState } from "react";

export default function Design() {
  const letterMessage = "hover is greta than what you thinks !!";
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
        className="text-4xl text-center font-bold text-blue-500 hover:text-red-500 duration-700 mt-5 mx-auto max-w-4xl ring-2 ring-violet-300"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        {hoverState}
      </h1>
    </div>
  );
}
