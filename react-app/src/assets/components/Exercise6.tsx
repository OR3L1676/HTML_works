import { useState } from "react";

interface Props {
  max_length?: number;
  children: string;
}

const Exercise6 = ({ max_length = 100, children }: Props) => {
  const [expand, setExpand] = useState(false);

  if (children.length <= max_length && expand === false) {
    return <p>{children}</p>;
  } else {
    const text = expand ? children : children.substring(0, max_length);
    const dots = expand ? "" : "...";
    return (
      <p>
        {text}
        {dots}
        <button onClick={() => setExpand(!expand)}>
          {expand ? "Less" : "More"}
        </button>
      </p>
    );
  }
};

export default Exercise6;
