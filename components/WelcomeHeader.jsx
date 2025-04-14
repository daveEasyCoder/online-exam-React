import React from 'react'
import { Link } from 'react-router-dom'
import { FaGraduationCap } from 'react-icons/fa';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useGlobalContext } from './GlobalContext/Context';
const WelcomeHeader = () => {
    const {showHeader,setShowHeader} = useGlobalContext()
  return (
    <header className='fixed top-0 left-0 right-0 flex items-center justify-between px-7 py-5 z-30'>
    <div className='font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600'>
        <Link to="/" className='flex items-center gap-2'>
            <FaGraduationCap size={43} color="#673AB7" />
            <span className='text-xl'> DT Exam</span>
        </Link>
    </div>
    <div>
        <ul className={`flex flex-col justify-center items-center gap-4 absolute sm:static sm:py-0 bg-black/90 sm:bg-transparent left-0 right-0 ${showHeader ? 'top-0' : '-top-46'} py-8 sm:flex-row duration-300`}>
            <li>
                <Link onClick={() => setShowHeader(false)} to="/signin" className='bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 font-semibold hover:text-blue-500 tracking-wide text-sm'>SignIn</Link>
            </li>
            <li>
                <Link onClick={() => setShowHeader(false)} to="/signup" className='bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 hover:text-blue-500 font-semibold tracking-wide text-sm'>SignUp</Link>
            </li>
            <li>
                <Link onClick={() => setShowHeader(false)} to="/developer" className='bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 hover:text-blue-500 font-semibold tracking-wide text-sm'>About</Link>
            </li>
        </ul>
        {
            showHeader ?  <FaTimes onClick={() => setShowHeader(prev => !prev)} className='cursor-pointer sm:hidden text-gray-300 text-xl relative z-10' /> :  <FaBars onClick={() => setShowHeader(prev => !prev)} className='cursor-pointer sm:hidden text-gray-600 text-lg relative z-10' />
        }
    </div>
</header>
  )
}

export default WelcomeHeader