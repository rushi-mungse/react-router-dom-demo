import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="relative border rounded-lg">
      <div className="absolute bg-white sm:bg-primary rounded-[50%] h-10 w-10 top-2 right-2 flex items-center justify-center flex-col">
        <span className="text-xs sm:text-white text-black">
          {product.discount}%
        </span>
        <span className="text-[8px] sm:text-white text-black">Off</span>
      </div>

      <div className="flex sm:grid flex-col sm:grid-cols-2">
        <div className="bg-primary/80 rounded-tl-lg rounded-tr-lg sm:rounded-tr-none sm:rounded-bl-lg col-span-1 flex w-full items-center justify-center">
          <img
            src={product.image}
            style={{ margin: 10, height: 250 }}
            className=""
          />
        </div>

        <div className="flex items-center justify-center flex-col my-6 sm:col-span-1">
          <div>
            <h1 className="font-bold tracking-wider text-center">
              {product.name}
            </h1>

            <p className="text-n-4 text-center px-2 text-sm">
              {product.description}
            </p>
          </div>

          <div className="mt-4 w-full">
            <div className="text-center space-x-1">
              {product.attributes.map((attribute) => (
                <span
                  key={attribute.name}
                  className="text-back border px-2 text-xs py-[1px] rounded-full bg-gray"
                >
                  {attribute.name}
                </span>
              ))}
            </div>

            <div className="flex items-center justify-between mt-5 px-3">
              <span className="text-sm font-semibold border px-4 py-1 rounded-full block">
                From ₹ {100}
              </span>

              <Link
                to={`/product/${product._id}`}
                className="rounded-full block border border-primary bg-primary/40 px-4 py-1 text-sm hover:bg-primary/60 transition-all"
              >
                Add
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
