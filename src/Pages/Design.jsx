import { useState } from "react";

export default function Design() {
  const [hoverState, setHoverState] = useState("hover is not there");

  const handleMouseOver = () => {
    setHoverState("the best way to hover");
  };

  const handleMouseOut = () => {
    setHoverState("hover is not there");
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
