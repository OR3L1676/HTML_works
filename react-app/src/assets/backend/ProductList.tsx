import React, { useEffect, useState } from "react";

const ProductList = ({ category }: { category: string }) => {
  const [products, setProducts] = useState<string[]>([]);
  useEffect(() => {
    console.log("Fetching product ", category);
    setProducts(["Clothing", "Household"]);
  }, [category]);

  return (
    <>
      <div>Products List</div>
    </>
  );
};

export default ProductList;
