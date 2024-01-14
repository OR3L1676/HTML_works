import { useState } from "react";

function Exercise3() {
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "John",
    },
  });

  const hundleClick = () => {
    setGame({ ...game, player: { ...game.player, name: "Bob" } });
  };

  return (
    <>
      <p>
        {game.id} {game.player.name}
      </p>
      <button onClick={hundleClick}>Click</button>
    </>
  );
}

export default Exercise3;
