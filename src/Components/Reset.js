function resetBoard(board, changeBoard) {
  const newBoard = board.map((tile) => {
    if (tile.value != null) {
      return {
        ...tile,
        value: null,
      };
    } else {
      return tile;
    }
  });
  changeBoard(newBoard);
}

function Reset({ board, changeBoard, changeWinner, changeTurn, resetDraw }) {
  return (
    <button
      className="text-4xl bg-orange-400 rounded-lg border-4 border-orange-400"
      onClick={() => {
        resetBoard(board, changeBoard);
        changeWinner(null);
        changeTurn("O");
        resetDraw(false);
      }}
    >
      Reset Game!
    </button>
  );
}

export default Reset;
