import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaCartPlus, FaSearch, FaUser } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { store } from "../store";
import "../styles/Header.css";

const Header = () => {
  const { amount } = useSelector((state) => state.cart);
  const { total } = useSelector((state) => state.cart);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [id, setId] = useState(localStorage.getItem("id"));
  const dispatch = useDispatch();

  const loginState = useSelector((state) => state.auth.isLoggedIn);

  useEffect(() => {
    setIsLoggedIn(loginState);
  }, [loginState]);

  return (
    <> 
      {/* navbar  */}
      <div className="bg-[#40826D]">
        <div className="navbar bg-[#40826D] max-w-full mx-auto">
          <div className="flex-1 justify-start">
            <Link
              to="/"
              className="btn btn-ghost normal-case text-2xl font-black text-accent-content"
            >
              Organic Oasis
            </Link>
          </div>

          <div className="flex-1 justify-center">
            <NavLink className="text-accent-content btn btn-ghost normal-case text-xl" to="/">
              Home
            </NavLink>
            <NavLink className="text-accent-content btn btn-ghost normal-case text-xl" to="/shop">
              Shop
            </NavLink>
            <NavLink className="text-accent-content btn btn-ghost normal-case text-xl" to="/about-us">
              About us
            </NavLink>
            <NavLink className="text-accent-content btn btn-ghost normal-case text-xl" to="/contact">
              Contact
            </NavLink>
            {!isLoggedIn && (
              <>
                <NavLink className="text-accent-content btn btn-ghost normal-case text-xl" to="/login">
                  Login
                </NavLink>
                <NavLink className="text-accent-content btn btn-ghost normal-case text-xl" to="/register">
                  Register
                </NavLink>
              </>
            )}
          </div>

          <div className="flex-1 justify-end">
            <Link
              to="/search"
              className="btn btn-ghost btn-circle text-accent-content"
            >
              <FaSearch className="text-xl" />
            </Link>

            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle">
                <div className="indicator">
                  <FaCartPlus className="text-xl text-white" />
                </div>
              </label>
              <div
                tabIndex={0}
                className="mt-3 z-[1] card card-compact dropdown-content w-52 shadow bg-[#FEFDED]"
              >
                <div className="card-body">
                  <span className="font-bold text-lg text-[#40826D]">
                    {amount} Items
                  </span>
                  <span className="text-[#40826D]">
                    Subtotal: ${total.toFixed(2)}
                  </span>
                  <div className="card-actions">
                    <Link
                      to="/cart"
                      className="btn bg-[#40826D] btn-block text-white hover:bg-[#23473c]"
                    >
                      View cart
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {isLoggedIn && (
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle">
                  <FaUser className="text-xl text-white" />
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 bg-[#FEFDED]"
                >
                  <li>
                    <Link
                      to="/user-profile"
                      className="justify-between text-lg text-[#40826D]"
                    >
                      Profile
                    </Link>
                  </li>
                  <li>
                    <Link to="/login" className="text-[#40826D] text-lg">
                      Logout
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
