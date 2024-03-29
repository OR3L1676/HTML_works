import React, { useEffect, useState } from "react";

const CategoryClick = ({}) => {
  const [category, setCategory] = useState("");

  return (
    <>
      <select
        className="form-select"
        onChange={(event) => setCategory(event.target.value)}
      >
        <option value=""></option>
        <option value="Clothing">Clothing</option>
        <option value="Household">Household</option>
      </select>
    </>
  );
};

export default CategoryClick;
