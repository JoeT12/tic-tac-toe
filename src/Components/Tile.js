function Tile({ position, changeBoardState, val, winner }) {
  return (
    <div
      className="square"
      onClick={() => {
        winner == null && changeBoardState(position);
      }}
    >
      <h1 className="text-center">{val.value}</h1>
    </div>
  );
}

export default Tile;
