import { FC } from "react";
import { IProduct } from "../models/IProduct.ts";

type ProductProps = {
  product: IProduct;
};
const Product: FC<ProductProps> = ({ product }) => {
  return (
    <div className="border rounded-xl border-gray-300-400 p-4 flex flex-col g-3 shadow-xl">
      <h2 className="text-center font-semibold text-blue-600 text-xl">
        {product.title}
      </h2>{" "}
      <img
        className="w-full h-72 object-contain"
        src={product.images[0]}
        alt={product.title}
      />
      <p>{product.description}</p>
    </div>
  );
};

export default Product;
