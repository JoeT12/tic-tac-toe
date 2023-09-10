import { useState } from "react";
import Tile from "./Tile";

function Board() {
  let [turnIsX, setPlayerTurn] = useState(true);

  const setPlayerTurnProp = (val) => {
    setPlayerTurn(val);
  };

  return (
    <>
      <br />
      <h1 className="text-center text-4xl">TIC-TAC-TOE</h1>
      <br />
      <div className="board-row">
        <Tile turnIsX={turnIsX} setPlayerTurn={setPlayerTurnProp} />
        <Tile turnIsX={turnIsX} setPlayerTurn={setPlayerTurnProp} />
        <Tile turnIsX={turnIsX} setPlayerTurn={setPlayerTurnProp} />
      </div>
      <div className="board-row">
        <Tile turnIsX={turnIsX} setPlayerTurn={setPlayerTurnProp} />
        <Tile turnIsX={turnIsX} setPlayerTurn={setPlayerTurnProp} />
        <Tile turnIsX={turnIsX} setPlayerTurn={setPlayerTurnProp} />
      </div>
      <div className="board-row">
        <Tile turnIsX={turnIsX} setPlayerTurn={setPlayerTurnProp} />
        <Tile turnIsX={turnIsX} setPlayerTurn={setPlayerTurnProp} />
        <Tile turnIsX={turnIsX} setPlayerTurn={setPlayerTurnProp} />
      </div>
      {turnIsX === true ? (
        <h1 className="text-center text-2xl">O Turn</h1>
      ) : (
        <h1 className="text-center text-2xl">X Turn</h1>
      )}
    </>
  );
}

export default Board;
