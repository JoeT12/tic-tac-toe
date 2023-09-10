import { useState } from "react";

function Tile({ turnIsX, setPlayerTurn }) {
  let [tileValue, setTileValue] = useState("");
  return (
    <div
      className="square"
      onClick={() => {
        turnIsX
          ? tileValue === "" && setTileValue("O")
          : tileValue === "" && setTileValue("X");
        tileValue === "" && setPlayerTurn(!turnIsX);
      }}
    >
      <h1 className="text-center">{tileValue}</h1>
    </div>
  );
}

export default Tile;
