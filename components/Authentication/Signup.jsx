import React, { useState } from "react";
import WelcomeHeader from "../WelcomeHeader";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { useGlobalContext } from "../GlobalContext/Context";
const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
 
  const {
    username,
    setUsername,
    email,
    setEmail,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    handleSignup,
    signupError,
    showPopup,
    setShowPopup,
  } = useGlobalContext();

  const toggleShowIcon = () => {
    setShowPassword((prev) => !prev);
  };
  return (
    <div className="welcome-page flex items-center justify-center bg-gray-50">
      <WelcomeHeader />
      <div>
        <div className="w-sm md:w-lg rounded-2xl shadow-md p-5 mt-5  bg-white">
          <p className="text-2xl text-gray-700 font-bold mb-5">Sign Up</p>
           {signupError && <p className="text-red-500 text-sm mb-5">{signupError}</p>}
          <form onSubmit={handleSignup}>
            <div>
              <input
                className="border-1 border-gray-400 rounded-sm text-sm tracking-wide px-2 py-2 w-full mb-5 outline-0 focus:outline-1 focus:outline-blue-500"
                type="text"
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value.toLowerCase())}
                value={username}
              />
            </div>
            <div className="">
              <input
                className="border-1 border-gray-400 rounded-sm text-sm tracking-wide px-2 py-2 w-full mb-5 outline-0 focus:outline-1 focus:outline-blue-500"
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value.toLowerCase())}
                value={email}
                 autoComplete="username"
              />
            </div>
            <div className="relative">
              <input
                className="border-1 border-gray-400 rounded-sm text-sm tracking-wide px-2 py-2 w-full mb-5 outline-0 focus:outline-1 focus:outline-blue-500"
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                autoComplete="new-password"
              />
            </div>
            <div className="relative">
              <input
                className="border-1 border-gray-400 rounded-sm text-sm tracking-wide px-2 py-2 w-full mb-5 outline-0 focus:outline-1 focus:outline-blue-500"
                type={showPassword ? "text" : "password"}
                placeholder="Confirm Password"
                onChange={(e) => setConfirmPassword(e.target.value)}
                value={confirmPassword}
                autoComplete="new-password"
              />
              {showPassword ? (
                <FaEye
                  onClick={toggleShowIcon}
                  className="absolute right-3 top-2 text-gray-500 cursor-pointer"
                  size={18}
                />
              ) : (
                <FaEyeSlash
                  onClick={toggleShowIcon}
                  className="absolute right-3 top-2 text-gray-500 cursor-pointer"
                  size={18}
                />
              )}
            </div>
            <button type="submit" className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:bg-gradient-to-r hover:from-blue-600 hover:via-purple-600 hover:to-pink-600  text-white w-[100%]  text-sm py-2 rounded-sm mb-5 mt-2 cursor-pointer duration-300">
              Sign Up
            </button>
            <p className="text-center">
              Already have an account ?{" "}
              <Link to="/signin" className="text-sm text-blue-500">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>

      {/* POPUP MESSAGE */}
      {showPopup && 
         <div className="h-screen fixed flex items-center justify-center inset-0 bg-black/15">
            <div className="popup-message bg-white rounded-xl shadow-lg px-5 py-12 w-96 text-center">
                    <FaCheckCircle className="text-blue-600 mx-auto mb-5" size={50} />
                <p className="text-lg text-gray-700 font-bold mb-5">Signup Successful</p>
                <p className="text-sm text-gray-600 mb-5">You have successfully signed up!</p>
                <Link onClick={() => setShowPopup(false)} to="/signin" className="bg-gradient-to-r from-blue-600 to-blue-400 text-white px-30  text-sm py-2 rounded-sm mb-5 mt-2 cursor-pointer font-semibold">
                    Go to Login
                </Link>
            </div>
        </div>
      }

     
        {/* POPUP MESSAGE */}
    </div>
  );
};

export default Signup;
