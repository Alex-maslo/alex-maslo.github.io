import { useEffect, useState } from "react";
import { IProduct } from "../models/IProduct.ts";
import { getData } from "../services/api.service.ts";
import Product from "./Product.tsx";

const Products = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  console.log(products);
  useEffect(() => {
    getData().then((data) => setProducts(data.products));
  }, []);

  return (
    <div className="grid grid-cols-1 gap-4">
      {products.map((product) => {
        return <Product product={product} />;
      })}
    </div>
  );
};

export default Products;
