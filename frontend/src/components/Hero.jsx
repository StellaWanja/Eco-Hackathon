import { Link } from "react-router-dom";
import "../styles/Hero.css";


const Hero = () => {
  return (
    <div className="hero bg-base-200 bg-blend-overlay">
      <div className="hero-content text-center">
        <div className="max-w-xl">
          <h1 className="text-6xl font-bold max-md:text-4xl text-accent-content">
            Discover Your Path to Wellness!
          </h1>
          <p className="py-6 text-2xl max-md:text-lg text-accent-content">
            Unveiling Organics Oasis, Your Ultimate Destination for Health and
            Vitality!
          </p>
          <Link
            to="/shop"
            className="btn btn-wide bg-[#40826D] hover:bg-[#23473c] border-none text-white"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
