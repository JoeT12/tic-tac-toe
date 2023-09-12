import { useEffect, useState } from "react";
import Tile from "./Tile";
import Reset from "./Reset";

function Board() {
  let startingBoard = [
    { id: 0, value: null },
    { id: 1, value: null },
    { id: 2, value: null },
    { id: 3, value: null },
    { id: 4, value: null },
    { id: 5, value: null },
    { id: 6, value: null },
    { id: 7, value: null },
    { id: 8, value: null },
  ];

  let [playerTurn, setPlayerTurn] = useState("O");
  let [board, setBoard] = useState(startingBoard);
  let [winner, setWinner] = useState(null);
  let [draw, setDraw] = useState(false);
  useEffect(() => {
    checkWin(board, setWinner);
    checkDraw(board, setDraw);
  }, [board]);

  const changeBoardState = (position) => {
    const findIndex = board.findIndex((item) => item.id === position);
    if (board[findIndex].value == null) {
      const updatedBoard = { ...board[findIndex], value: playerTurn };
      const newBoard = [...board];
      newBoard[findIndex] = updatedBoard;
      setBoard(newBoard);
      changePlayer();
    }
  };

  const changePlayer = () => {
    playerTurn === "X" ? setPlayerTurn("O") : setPlayerTurn("X");
  };

  return (
    <div id="board">
      <br />
      <h1 className="text-center text-4xl">TIC-TAC-TOE</h1>
      <br />
      <div className="board-row">
        <Tile
          position={0}
          changeBoardState={changeBoardState}
          val={board[0]}
          winner={winner}
        />
        <Tile
          position={1}
          changeBoardState={changeBoardState}
          val={board[1]}
          winner={winner}
        />
        <Tile
          position={2}
          changeBoardState={changeBoardState}
          val={board[2]}
          winner={winner}
        />
      </div>
      <div className="board-row">
        <Tile
          position={3}
          changeBoardState={changeBoardState}
          val={board[3]}
          winner={winner}
        />
        <Tile
          position={4}
          changeBoardState={changeBoardState}
          val={board[4]}
          winner={winner}
        />
        <Tile
          position={5}
          changeBoardState={changeBoardState}
          val={board[5]}
          winner={winner}
        />
      </div>
      <div className="board-row">
        <Tile
          position={6}
          changeBoardState={changeBoardState}
          val={board[6]}
          winner={winner}
        />
        <Tile
          position={7}
          changeBoardState={changeBoardState}
          val={board[7]}
          winner={winner}
        />
        <Tile
          position={8}
          changeBoardState={changeBoardState}
          val={board[8]}
          winner={winner}
        />
      </div>
      <br />
      {winner != null ? (
        <h1 className="text-center text-2xl">Winner is {winner}</h1>
      ) : draw === false ? (
        playerTurn === "O" ? (
          <h1 className="text-center text-2xl">O Turn</h1>
        ) : (
          <h1 className="text-center text-2xl">X Turn</h1>
        )
      ) : (
        <h1 className="text-center text-2xl">Draw!</h1>
      )}
      <br />
      <div id="resetGameButton" className="text-center">
        <Reset
          board={board}
          changeBoard={(val) => {
            setBoard(val);
          }}
          changeWinner={(val) => {
            setWinner(val);
          }}
          changeTurn={(val) => {
            setPlayerTurn(val);
          }}
          resetDraw={(val) => {
            setDraw(val);
          }}
        />
      </div>
    </div>
  );
}

function checkWin(board, setWinner) {
  let winningLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  let xTotal = 0,
    oTotal = 0;
  for (let x = 0; x < winningLines.length; x++) {
    xTotal = 0;
    oTotal = 0;
    for (let y = 0; y < 3; y++) {
      if (board[winningLines[x][y]].value === "X") {
        xTotal++;
      } else if (board[winningLines[x][y]].value === "O") {
        oTotal++;
      }
      if (xTotal === 3) {
        setWinner("X");
        return;
      }
      if (oTotal === 3) {
        setWinner("O");
        return;
      }
    }
  }
}

function checkDraw(board, setDraw) {
  let emptySquares = 9;
  for (let x = 0; x < board.length; x++) {
    if (board[x].value != null) {
      emptySquares--;
    }
  }
  if (emptySquares === 0) {
    setDraw(true);
  }
}

export default Board;
