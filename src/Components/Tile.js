function Tile({ position, changeBoardState, val }) {
  return (
    <div
      className="square"
      onClick={() => {
        val.value == null && changeBoardState(position);
      }}
    >
      <h1 className="text-center">{val.value}</h1>
    </div>
  );
}

export default Tile;
