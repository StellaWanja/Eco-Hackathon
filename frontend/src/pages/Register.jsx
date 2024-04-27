import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SectionTitle } from "../components";
import { nanoid } from "nanoid";
import { toast } from "react-toastify";

const Register = () => {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const navigate = useNavigate();

  const isValidate = () => {
    let isProceed = true;
    let errorMessage = "";

    if (name.length === 0) {
      isProceed = false;
      errorMessage = "Please enter the value in username field";
    } else if (lastname.length === 0) {
      isProceed = false;
      errorMessage = "Please enter the value in lastname field";
    } else if (email.length === 0) {
      isProceed = false;
      errorMessage = "Please enter the value in email field";
    } else if (phone.length < 4) {
      isProceed = false;
      errorMessage = "Phone must be longer than 3 characters";
    } else if (address.length < 4) {
      isProceed = false;
      errorMessage = "Adress must be longer than 3 characters";
    } else if (password.length < 6) {
      isProceed = false;
      errorMessage = "Please enter a password longer than 5 characters";
    } else if (confirmPassword.length < 6) {
      isProceed = false;
      errorMessage = "Please enter a confirm password longer than 5 characters";
    } else if (password !== confirmPassword) {
      isProceed = false;
      errorMessage = "Passwords must match";
    }

    if (!isProceed) {
      toast.warn(errorMessage);
    }

    return isProceed;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let regObj = {
      id: nanoid(),
      name,
      lastname,
      email,
      phone,
      address,
      password,
    };

    console.log(regObj)

    if (isValidate()) {
      fetch("http://localhost:8080/user", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(regObj),
      })
        .then((res) => {
          localStorage.setItem('id', regObj.id);
          localStorage.setItem('email', regObj.email);
          localStorage.setItem('password', regObj.password);
          toast.success("Registration Successful");
          navigate("/login");
        })
        .catch((err) => {
          toast.error("Failed: " + err.message);
        });
    }
  };

  return (
    <>
      <SectionTitle title="Register" />
      <div className="flex flex-col justify-center sm:py-12 bg-[#FEFDED]">
        <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
          <div className="bg-dark border border-gray-600 shadow w-full rounded-lg divide-y divide-gray-200">
            <form className="px-5 py-7" onSubmit={handleSubmit}>
              <label className="font-semibold  pb-1 block text-[#40826D] text-lg">
                Name
              </label>
              <input
                type="text"
                className="rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full bg-[#FEFDED] text-[#40826D] border-2 focus:ring-[#40826D]"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required={true}
              />
              <label className="font-semibold pb-1 block text-[#40826D] text-lg">
                Lastname
              </label>
              <input
                type="text"
                className="rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full bg-[#FEFDED] text-[#40826D] border-2 focus:ring-[#40826D]"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
                required={true}
              />
              <label className="font-semibold pb-1 block text-[#40826D] text-lg">
                E-mail
              </label>
              <input
                type="email"
                className="rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full bg-[#FEFDED] text-[#40826D] border-2 focus:ring-[#40826D]"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required={true}
              />
              <label className="font-semibold pb-1 block text-[#40826D] text-lg">
                Phone
              </label>
              <input
                type="tel"
                className="rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full bg-[#FEFDED] text-[#40826D] border-2 focus:ring-[#40826D]"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required={true}
              />
              <label className="font-semibold pb-1 block text-[#40826D] text-lg">
                Address
              </label>
              <input
                type="text"
                className="rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full bg-[#FEFDED] text-[#40826D] border-2 focus:ring-[#40826D]"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required={true}
              />
              <label className="font-semibold pb-1 block text-[#40826D] text-lg">
                Password
              </label>
              <input
                type="password"
                className="rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full bg-[#FEFDED] text-[#40826D] border-2 focus:ring-[#40826D]"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required={true}
              />
              <label className="font-semibold pb-1 block text-[#40826D] text-lg">
                Confirm Password
              </label>
              <input
                type="password"
                className="rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full bg-[#FEFDED] text-[#40826D] border-2 focus:ring-[#40826D]"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required={true}
              />
              <button
                type="submit"
                className="transition duration-200 bg-[#40826D] hover:bg-[#23473c]  focus:shadow-sm focus:ring-4 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
              >
                <span className="inline-block mr-2">Register</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-4 h-4 inline-block"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </form>
          </div>
          <div className="py-5 text-center">
            <Link
              to="/login"
              className="btn btn-neutral text-white"
              onClick={() => window.scrollTo(0, 0)}
            >
              Already have an account? Please login.
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
