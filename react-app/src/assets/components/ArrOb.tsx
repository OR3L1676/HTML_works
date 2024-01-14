import { useState } from "react";

function ArrOb() {
  const [bugs, setBugs] = useState([
    { id: 1, title: "Bug 1", fixed: false },
    { id: 2, title: "Bug 2", fixed: false },
  ]);

  const handleClick = () => {
    setBugs(bugs.map((bug) => (bug.id === 1 ? { ...bug, fixed: true } : bug)));
  };

  const handleClick2 = () => {
    setBugs(
      bugs.map((bug) => (bug.id === 1 ? { ...bug, title: "ZoyniZE" } : bug))
    );
  };
  return (
    <>
      {bugs.map((bug) => (
        <p key={bug.id}>
          {bug.title} - {bug.fixed ? "Fixed" : "Not Fixed"}
        </p>
      ))}
      <button onClick={handleClick}>Click</button>
    </>
  );
}

export default ArrOb;
