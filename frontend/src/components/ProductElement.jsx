import { Link } from "react-router-dom";

const ProductElement = ({ id, title, image, price}) => {
console.log(image)
  return (
    <div className="max-w-2xl ">
      <div className="shadow-md border-2 rounded-lg max-w-sm h-[50vh]">
        <Link to={`/shop/product/${id}`} onClick={() => window.scrollTo(0, 0)}>
          <img
            className="rounded-t-lg p-8"
            src={image}
            width={"90%"}
            alt="product image"
          />
        </Link>
        <div className="px-5 pb-5">
          <Link
            to={`/shop/product/${id}`}
            onClick={() => window.scrollTo(0, 0)}
          >
            <h3 className="font-semibold text-xl mb-2 text-[#40826D]">
              {title}
            </h3>
          </Link>
          <div className="flex items-center justify-between">
            <span className="text-xl font-bold text-[#40826D]">${price}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductElement;
