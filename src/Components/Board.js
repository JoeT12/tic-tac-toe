import { useState } from "react";
import Tile from "./Tile";

function Board() {
  let [playerOneTurn, setPlayerTurn] = useState(true);
  return (
    <>
      <h1 className="text-center text-4xl">TIC-TAC-TOE</h1>
      <div className="board-row">
        <Tile
          playerOneTurn={playerOneTurn}
          setPlayerTurn={(val) => {
            setPlayerTurn(val);
          }}
        />
        <Tile
          playerOneTurn={playerOneTurn}
          setPlayerTurn={(val) => {
            setPlayerTurn(val);
          }}
        />
        <Tile
          playerOneTurn={playerOneTurn}
          setPlayerTurn={(val) => {
            setPlayerTurn(val);
          }}
        />
      </div>
      <div className="board-row">
        <Tile
          playerOneTurn={playerOneTurn}
          setPlayerTurn={(val) => {
            setPlayerTurn(val);
          }}
        />
        <Tile
          playerOneTurn={playerOneTurn}
          setPlayerTurn={(val) => {
            setPlayerTurn(val);
          }}
        />
        <Tile
          playerOneTurn={playerOneTurn}
          setPlayerTurn={(val) => {
            setPlayerTurn(val);
          }}
        />
      </div>
      <div className="board-row">
        <Tile
          playerOneTurn={playerOneTurn}
          setPlayerTurn={(val) => {
            setPlayerTurn(val);
          }}
        />
        <Tile
          playerOneTurn={playerOneTurn}
          setPlayerTurn={(val) => {
            setPlayerTurn(val);
          }}
        />
        <Tile
          playerOneTurn={playerOneTurn}
          setPlayerTurn={(val) => {
            setPlayerTurn(val);
          }}
        />
      </div>
      {playerOneTurn === true ? (
        <h1 className="text-center text-2xl">O Turn</h1>
      ) : (
        <h1 className="text-center text-2xl">X Turn</h1>
      )}
    </>
  );
}

export default Board;
