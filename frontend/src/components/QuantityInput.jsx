import React, { memo, useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

const QuantityInput = ({ quantity, setQuantity }) => {
  return (
    <>
      <button
        type="button"
        className="h-10 w-10 border-gray-600 flex justify-center items-center border leading-10 text-gray-600 transition hover:opacity-75"
        onClick={() => {
          if(quantity !== 1){
          setQuantity(quantity - 1)}
          }
        }
      >
        <FaMinus className="text-2xl" />
      </button>

      <input
        type="number"
        id="Quantity"
        value={quantity}
        className="h-10 w-24 rounded border-gray-400 text-xl indent-3 bg-[#FEFDED] text-[#40826D] border-2 focus:ring-[#40826D]"
        readOnly={true}
      />

      <button
        type="button"
        className="h-10 w-10 border-gray-600 flex justify-center items-center border leading-10 text-gray-600 transition hover:opacity-75"
        onClick={() => setQuantity(quantity + 1)}
      >
        <FaPlus className="text-2xl" />
      </button>
    </>
  );
};

export default memo(QuantityInput);
