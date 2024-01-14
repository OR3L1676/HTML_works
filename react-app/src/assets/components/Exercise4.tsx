import { useState } from "react";

function Exercise4() {
  const [pizza, setPizza] = useState({
    name: "Spicy Pepperoni",
    toppings: ["Mushroom"],
  });

  const hundleClick = () => {
    setPizza({ ...pizza, toppings: [...pizza.toppings, " Grand Thief Auto"] });
  };

  return (
    <>
      <p>
        {pizza.name} {pizza.toppings}
      </p>
      <button onClick={hundleClick}>Click</button>
    </>
  );
}

export default Exercise4;
