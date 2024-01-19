import React, { Component, useEffect, useRef } from "react";

const Lesson1 = () => {
  const ref = useRef<HTMLInputElement>(null);
  // After Render
  useEffect(() => {
    // Side effect
    if (ref.current) ref.current.focus();
  });

  useEffect(() => {
    document.title = "my app";
  });
  return (
    <>
      <div>
        <input type="text" className="form-control" />
      </div>
    </>
  );
};
export default Lesson1;
