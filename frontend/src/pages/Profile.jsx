import { useEffect, useState } from "react";
import { SectionTitle } from "../components";
import axios from "axios";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [id, setId] = useState(localStorage.getItem("id"));
  const [userData, setUserData] = useState({});
  const loginState = useSelector((state) => state.auth.isLoggedIn);
  const [userFormData, setUserFormData] = useState({
    id: "",
    name: "",
    lastname: "",
    email: "",
    phone: "",
    address: "",
    password: "",
  });
  const navigate = useNavigate();

  const getUserData = async () => {
    try {
      const response = await axios(`http://localhost:8080/user/${id}`);
      const data = response.data;
      setUserFormData({
        name: data.name,
        lastname: data.lastname,
        email: data.email,
        phone: data.phone,
        address: data.address,
        password: data.password,
      });
    } catch (error) {
      toast.error("Error: ", error.response);
    }
  };

  useEffect(() => {
    if (loginState) {
      getUserData();
    } else {
      toast.error("You must be logged in to access this page");
      navigate("/");
    }
  }, []);

  const updateProfile = async (e) => {
    e.preventDefault();
    try{

      const getResponse = await axios(`http://localhost:8080/user/${id}`);
      const userObj = getResponse.data;

      const putResponse = await axios.put(`http://localhost:8080/user/${id}`, {
        id: id,
        name: userFormData.name,
        lastname: userFormData.lastname,
        email: userFormData.email,
        phone: userFormData.phone,
        address: userFormData.address,
        password: userFormData.password,
        userWishlist: await userObj.userWishlist
      });
      const putData = putResponse.data;
    }catch(error){
      console.log(error.response);
    }
  }

  return (
    <div className="bg-[#FEFDED] h-[70vh]">
      <SectionTitle title="User Profile" />
      <form
        className="max-w-7xl mx-auto text-center px-10 bg-[#FEFDED]"
        onSubmit={updateProfile}
      >
        <div className="grid grid-cols-3 max-lg:grid-cols-1">
          <div className="form-control w-full lg:max-w-xs">
            <label className="label">
              <span className="label-text text-[#40826D] text-lg">
                Your Name
              </span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full lg:max-w-xs bg-[#FEFDED] text-[#40826D] border-2 focus:ring-[#40826D]"
              value={userFormData.name}
              onChange={(e) => {
                setUserFormData({ ...userFormData, name: e.target.value });
              }}
            />
          </div>

          <div className="form-control w-full lg:max-w-xs">
            <label className="label ">
              <span className="label-text text-[#40826D] text-lg">
                Your Lastname
              </span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full lg:max-w-xs bg-[#FEFDED] text-[#40826D] border-2 focus:ring-[#40826D]"
              value={userFormData.lastname}
              onChange={(e) => {
                setUserFormData({ ...userFormData, lastname: e.target.value });
              }}
            />
          </div>

          <div className="form-control w-full lg:max-w-xs">
            <label className="label ">
              <span className="label-text text-[#40826D] text-lg">
                Your Email
              </span>
            </label>
            <input
              type="email"
              placeholder="Type here"
              className="input input-bordered w-full lg:max-w-xs bg-[#FEFDED] text-[#40826D] border-2 focus:ring-[#40826D]"
              value={userFormData.email}
              onChange={(e) => {
                setUserFormData({ ...userFormData, email: e.target.value });
              }}
            />
          </div>

          <div className="form-control w-full lg:max-w-xs">
            <label className="label ">
              <span className="label-text text-[#40826D] text-lg">
                Your Phone
              </span>
            </label>
            <input
              type="tel"
              placeholder="Type here"
              className="input input-bordered w-full lg:max-w-xs bg-[#FEFDED] text-[#40826D] border-2 focus:ring-[#40826D]"
              value={userFormData.phone}
              onChange={(e) => {
                setUserFormData({ ...userFormData, phone: e.target.value });
              }}
            />
          </div>

          <div className="form-control w-full lg:max-w-xs">
            <label className="label">
              <span className="label-text text-[#40826D] text-lg">
                Your Adress
              </span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full lg:max-w-xs bg-[#FEFDED] text-[#40826D] border-2 focus:ring-[#40826D]"
              value={userFormData.adress}
              onChange={(e) => {
                setUserFormData({ ...userFormData, adress: e.target.value });
              }}
            />
          </div>

          <div className="form-control w-full lg:max-w-xs">
            <label className="label">
              <span className="label-text text-[#40826D] text-lg">
                Your Password
              </span>
            </label>
            <input
              type="password"
              placeholder="Type here"
              className="input input-bordered w-full lg:max-w-xs bg-[#FEFDED] text-[#40826D] border-2 focus:ring-[#40826D]"
              value={userFormData.password}
              onChange={(e) => {
                setUserFormData({ ...userFormData, password: e.target.value });
              }}
            />
          </div>
        </div>
        <button
          className="btn btn-lg bg-[#40826D] hover:bg-[#23473c] text-white mt-10"
          type="submit"
        >
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default Profile;
