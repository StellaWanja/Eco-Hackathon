import "../styles/Landing.css";
import { Hero, ProductElement } from "../components";
import { useLoaderData } from "react-router-dom";
import axios from "axios";

export const landingLoader = async () => {
  const response = await axios(
    `http://localhost:8080/products?_page=1&_limit=8`
  );
  const data = response.data;
  return { products: data };
};

// landing page
const Landing = () => {
  const { products } = useLoaderData();

  return (
    <main>
      <Hero />

      <div className="selected-products bg-[#FEFDED]">
        <h2 className="text-5xl font-bold text-center my-12 mt-0 pt-8 max-md:text-4xl text-[#40826D]">
          Trending Products
        </h2>
        <div className="selected-products-grid max-w-7xl mx-auto pb-20">
          {products.map((product) => (
            <ProductElement
              key={product.id}
              id={product.id}
              title={product.name}
              image={product.imageUrl}
              price={product.price}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Landing;
