import React,{useState} from  'react'
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useGlobalContext } from '../GlobalContext/Context'
import WelcomeHeader from '../WelcomeHeader';
import { useNavigate } from 'react-router-dom';
const Signin = () => {
 
    const { setEmailSignin,setPasswordSignin,emailSignin,passwordSignin,handleSignin } = useGlobalContext()
    const [showPassword,setShowPassword] = useState(false)

    const [signinError,setSigninError] = useState('')

    const navigate = useNavigate()

    const handleLogin = () => {
      if (handleSignin()) {
        setEmailSignin('')
        setPasswordSignin('')
        navigate("/home"); 
      } else {
        setSigninError("Invalid email or password"); 
      }
    }
  return (
    <div className="welcome-page flex items-center justify-center bg-gray-50">
    <WelcomeHeader />
    <div>
      <div className="w-sm md:w-lg rounded-2xl shadow-md p-5 bg-white">
        <p className="text-2xl text-gray-700 font-bold mb-5">Sign In</p>
         {signinError && <p className="text-red-500 text-sm mb-5">{signinError}</p>}
        <div>
          <div className="">
            <input
              className="border-1 border-gray-400 rounded-sm text-sm tracking-wide px-2 py-2 w-full mb-5 outline-0 focus:outline-1 focus:outline-blue-500"
              type="email"
              placeholder="Email"
              onChange={(e) => setEmailSignin(e.target.value.toLowerCase())}
              value={emailSignin}
            />
          </div>
          <div className="relative">
            <input
              className="border-1 border-gray-400 rounded-sm text-sm tracking-wide px-2 py-2 w-full mb-5 outline-0 focus:outline-1 focus:outline-blue-500"
            //   type={showPassword ? "text" : "password"}
              placeholder="Password"
              onChange={(e) => setPasswordSignin(e.target.value)}
              value={passwordSignin}
            />
            {showPassword ? (
              <FaEye
                onClick={() => setShowPassword(prev =>!prev)}
                className="absolute right-3 top-2 text-gray-500 cursor-pointer"
                size={18}
              />
            ) : (
              <FaEyeSlash
                onClick={() => setShowPassword(prev =>!prev)}
                className="absolute right-3 top-2 text-gray-500 cursor-pointer"
                size={18}
              />
            )}
          </div>
          <button onClick={handleLogin} className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white w-[100%]  text-sm py-2 rounded-sm mb-5 mt-2 cursor-pointer">
           <Link className=''>
             Sign In
           </Link>
          </button>
          <p className="text-center">
             Have no an account ?{" "}
            <Link to="/signup" className="text-sm text-blue-500">
               Signup
            </Link>
          </p>
        </div>
      </div>
    </div>

  </div>
  )
}

export default Signin