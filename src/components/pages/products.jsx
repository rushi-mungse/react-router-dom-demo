import { useLoaderData } from "react-router-dom";
import ProductCard from "../cards/product-card";

const Products = () => {
  const { products } = useLoaderData();

  return (
    <div className="flex items-center justify-center bg-gray mx-4 rounded-tl-md rounded-tr-md">
      <div className="container mx-auto grid grid-cols-2 gap-8 py-20">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
