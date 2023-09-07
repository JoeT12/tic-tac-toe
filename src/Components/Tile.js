import { useState } from "react";

function Tile({ playerOneTurn, setPlayerTurn }) {
  let [tileValue, setTileValue] = useState("");
  return (
    <div
      className="square"
      onClick={() => {
        playerOneTurn
          ? tileValue === "" && setTileValue("O")
          : tileValue === "" && setTileValue("X");
        tileValue === "" && setPlayerTurn(!playerOneTurn);
      }}
    >
      <h1 className="text-center">{tileValue}</h1>
    </div>
  );
}

export default Tile;
