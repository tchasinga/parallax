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
        className=""
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        {hoverState}
      </h1>
    </div>
  );
}
