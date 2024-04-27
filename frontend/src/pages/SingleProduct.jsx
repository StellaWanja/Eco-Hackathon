import axios from "axios";
import { useState } from "react";
import {
  QuantityInput
} from "../components";
import { FaCartShopping } from "react-icons/fa6";
import { useLoaderData } from "react-router-dom";
import parse from "html-react-parser";
import { nanoid } from "nanoid";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import { toast } from "react-toastify";

export const singleProductLoader = async ({ params }) => {
  const { id } = params;
  const response = await axios(`http://localhost:8080/products/${id}`);
  return { productData: response.data };
};

const SingleProduct = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const { userId } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const loginState = useSelector((state) => state.auth.isLoggedIn);

  const { productData } = useLoaderData();
  console.log(productData)

  const product = {
    id: productData?.id,
    title: productData?.name,
    image: productData?.imageUrl,
    price: productData?.price,
    category: productData?.category,
    amount: quantity,
  };

  return (
    <section className="bg-[#FEFDED] h-[68vh]">
      <div className="grid grid-cols-2 pt-8 max-w-7xl mx-auto max-lg:grid-cols-1 max-lg:mx-5 bg-[#FEFDED]">
        <div className="product-images flex flex-col justify-center max-lg:justify-start">
          <img
            src={productData.imageUrl}
            className="w-96 text-center border border-gray-600 cursor-pointer"
            alt={productData.name}
          />
        </div>
        <div className="single-product-content flex flex-col gap-y-5 max-lg:mt-2">
          <h2 className="text-5xl max-sm:text-3xl text-[#40826D]">
            {productData.name}
          </h2>
          <p className="text-3xl text-error">
            ${productData?.price}
          </p>
          <div>
            <label htmlFor="Quantity" className="sr-only">
              {" "}
              Quantity{" "}
            </label>

            <div className="flex items-center gap-1">
              <QuantityInput quantity={quantity} setQuantity={setQuantity} />
            </div>
          </div>
          <div className="flex flex-row gap-x-2 max-sm:flex-col max-sm:gap-x">
            <button
              className="btn bg-[#40826D] hover:bg-[#23473c] text-white"
              onClick={() => {
                if (loginState) {
                  dispatch(addToCart(product));
                } else {
                  toast.error(
                    "You must be logged in to add products to the cart"
                  );
                }
              }}
            >
              <FaCartShopping className="text-xl mr-1" />
              Add to cart
            </button>
          </div>
          <div className="other-product-info flex flex-col gap-x-2">
            <div className="badge bg-gray-700 badge-lg font-bold text-white p-5 mt-2">
              Category: {productData?.category}
            </div>
        
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleProduct;
