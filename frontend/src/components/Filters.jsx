import React, { useState } from "react";
import FormInput from "./FormInput";
import { Form, Link } from "react-router-dom";
import FormSelect from "./FormSelect";

const Filters = () => {
  const [selectCategoryList, setSelectCategoryList] = useState([
    "Fruits",
    "Vegetables",
  ]);

  return (
    <Form className="bg-[#FEFDED] border-2 shadow-md rounded-md mb-8 px-8 py-4 flex-1 flex-col  items-center">
      {/* SEARCH */}
      <div>
        <FormInput
          type="search"
          label="search product"
          name="search"
          size="input-sm"
          defaultValue=""
        />
        {/* CATEGORIES */}
        <FormSelect
          label="select category"
          name="category"
          list={selectCategoryList}
          size="select-sm"
          defaultValue="all"
        />
        {/* ORDER */}
        <FormSelect
          label="sort by"
          name="order"
          list={["asc", "desc"]}
          size="select-sm"
          defaultValue="a-z"
        />
      </div>

      {/* BUTTONS */}
      <div className="mt-4 flex gap-4">
        <button
          type="submit"
          className="w-[20%] btn bg-[#40826D] hover:bg-[#23473c] border-none text-white btn-sm"
        >
          search
        </button>
        <Link
          to="/shop?page=1"
          className="w-[20%] btn bg-[#40826D] hover:bg-[#23473c] border-none text-white btn-sm"
        >
          reset
        </Link>
      </div>
    </Form>
  );
};

export default Filters;
