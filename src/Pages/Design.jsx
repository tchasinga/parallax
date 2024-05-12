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
        className="text-4xl text-center font-bold text-blue-500 hover:text-red-500 md:text-xl sm:text-green-800"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        {hoverState}
      </h1>

      <div className="max-w-4xl mx-auto bg-green-500 grid">
        <div>01</div>
        <div>02</div>
        <div>03</div>
        <div>04</div>
        <div>05</div>
      </div>
    </div>
  );
}
