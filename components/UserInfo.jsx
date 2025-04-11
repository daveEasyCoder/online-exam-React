import React,{useState} from 'react'
import { useGlobalContext } from './GlobalContext/Context'
import { AiOutlineClose } from "react-icons/ai";
import { FaEye, FaEyeSlash } from "react-icons/fa";
const UserInfo = () => {
    const [showChangePassword, setShowChangePassword] = useState(false)
    const {user,setOldPassword,setNewPassword,setConfirmNewPassword,oldPassword,changePassword,changePasswordError} = useGlobalContext()
    
    const [showPassword,setShowPassword] = useState(false)

    const handleShowPassord = () => {
         setShowPassword(prev => !prev)
    }
    
  return (
     <div className='absolute right-0 top-10'>
        <div className='user-info bg-white w-52 rounded-lg px-4 py-5 flex flex-col gap-2 text-center'>
            <p className='text-md font-semibold text-gray-800'>{user.username}</p>
            <p className='text-sm font-normal'>{user.email}</p>
            <button onClick={() => setShowChangePassword(prev => !prev)} className='text-sm bg-blue-700 rounded-sm text-white py-1 font-normal cursor-pointer mt-2'>Change Password</button>
         </div>
         
         {
            showChangePassword && 
             <div className='fixed inset-0 bg-black/30 flex items-center justify-center'>
                <div className='bg-white px-5 py-8 rounded-sm w-sm md:w-xl relative'>
                    <p className='font-semibold text-lg mb-5'>Change Password</p>
                     {changePasswordError === "Password Changed" ? <p className='text-sm text-green-500 mb-2'>{changePasswordError}</p> : <p className='text-sm text-red-500 mb-2'>{changePasswordError}</p>} 
                    <div>
                       <input onChange={(e) => setOldPassword(e.target.value)} className='border-1 px-3 py-2 mb-4 text-sm rounded-sm w-full outline-0 focus:outline-1 focus:outline-blue-300' type="text" placeholder='Old Password' />
                    </div>
                    <div>
                       <input onChange={(e) => setNewPassword(e.target.value)} className='border-1 px-3 py-2 mb-4 text-sm rounded-sm w-full outline-0 focus:outline-1 focus:outline-blue-300' type={showPassword ? "text" : "password"} placeholder='New Password' />
                    </div>
                    <div className='relative'>
                       <input onChange={(e) => setConfirmNewPassword(e.target.value)} className='border-1 px-3 py-2 mb-4 text-sm rounded-sm w-full outline-0 focus:outline-1 focus:outline-blue-300' type={showPassword ? "text" : "password"} placeholder='Confirm New Password' />
                       {showPassword ? <FaEye onClick={handleShowPassord} className='absolute right-3 top-2 text-gray-500 cursor-pointer' size={18} /> : <FaEyeSlash onClick={handleShowPassord} className='absolute right-3 top-2 text-gray-500 cursor-pointer' size={18} />}
                    </div>
                    <button onClick={changePassword} className='bg-blue-700 text-sm px-6 cursor-pointer py-1 text-white rounded-sm hover:bg-blue-600 duration-300'>Change</button>

                    <div onClick={() => setShowChangePassword(false)} className='absolute top-5 right-4 cursor-pointer hover:bg-blue-100 duration-100 p-1.5 rounded-full'>
                     <AiOutlineClose 
                        size={21} 
                        color="black" 
                        className='text-gray-700 rounded-full '
                     />
                  </div>
                </div>
                 
                </div>
         }
    
     </div>
 
  )
}

export default UserInfo