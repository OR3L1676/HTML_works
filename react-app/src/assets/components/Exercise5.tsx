import { useState } from "react";

function Exercise5() {
  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      { id: 1, title: "Product 1", quantity: 1 },
      { id: 2, title: "Product 2", quantity: 1 },
    ],
  });

  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    const updatedCart = {
      ...cart,
      items: cart.items.map((item) => {
        if (item.id === 1) {
          return { ...item, quantity: item.quantity + 1 };
        }
        if (item.id === 2 && clickCount % 2 === 1) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      }),
    };

    setCart(updatedCart);
    setClickCount((prevCount) => prevCount + 1);
  };

  return (
    <>
      <ul>
        {cart.items.map((item) => (
          <li key={item.id}>
            {item.title} - {item.quantity}
          </li>
        ))}
      </ul>
      <button onClick={handleClick}>Click</button>
    </>
  );
}

export default Exercise5;
