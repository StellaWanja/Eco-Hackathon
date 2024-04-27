import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const loginState = useSelector((state) => state.auth.isLoggedIn);
  
  return (
    <footer className="footer footer-center p-10 bg-[#40826D] text-base-content rounded mt-0 max-md:px-0">
      <nav className="grid grid-flow-col max-sm:grid-flow-row gap-4">
        {!loginState && (
          <>
            <Link
              to="/login"
              className="link link-hover text-2xl max-md:text-xl text-accent-content"
              onClick={() => window.scrollTo(0, 0)}
            >
              Login
            </Link>
            <Link
              to="/register"
              className="link link-hover text-2xl max-md:text-xl text-accent-content"
              onClick={() => window.scrollTo(0, 0)}
            >
              Register
            </Link>
          </>
        )}
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <FaTwitter className="text-3xl max-sm:text-xl text-accent-content hover:cursor-pointer" />
          <FaFacebook className="text-3xl max-sm:text-xl text-accent-content hover:cursor-pointer" />
          <FaInstagram className="text-3xl max-sm:text-xl text-accent-content hover:cursor-pointer" />
          <FaYoutube className="text-3xl max-sm:text-xl text-accent-content hover:cursor-pointer" />
        </div>
      </nav>
      <aside>
        <p className="text-xl max-sm:text-sm text-accent-content ">
          Copyright © {new Date().getFullYear()} - All right reserved by
          Organics Oasis
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
