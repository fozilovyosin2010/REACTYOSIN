import React, { useState } from "react";
import { useParams } from "react-router-dom";

const ProductById = () => {
  const { productId } = useParams();

  const [products, setProducts] = useState([
    { id: "1", name: "Shampoo", weight: "100g" },
    { id: "2", name: "Snack", weight: "700g" },
    { id: "3", name: "Snack", weight: "1500g" },
  ]);

  const product = products.find((e) => e.id == productId);

  return (
    <div>
      <div>ProductById: {productId}</div>
      <div className="p-1">
        <div className="border p-[10px] w-[200px] rounded-[15px]">
          <div>Name: {product?.name}</div>
          <div>Weight: {product?.weight}</div>
        </div>
      </div>
    </div>
  );
};

export default ProductById;
