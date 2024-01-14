import { useState } from "react";

function Arr() {
  const [tags, setTags] = useState(["happy", "cheerful"]);

  const handleClick = () => {
    //add
    setTags([...tags, "exciting"]);
    //remove
    setTags(tags.filter((tag) => tag !== "happy"));
    //update
    setTags(tags.map((tag) => (tag === "happy" ? "happiness" : tag)));
  };
  return (
    <>
      {tags.map((tag, index) => (
        <p>{tag}</p>
      ))}
      <button onClick={() => handleClick()}>Click</button>
    </>
  );
}

export default Arr;
