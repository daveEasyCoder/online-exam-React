import React from 'react'
import { Link } from 'react-router-dom'
import { FaGraduationCap } from 'react-icons/fa';
const WelcomeHeader = () => {
  return (
    <header className='fixed  top-0 left-0 right-0 flex justify-between px-7 py-5 z-30'>
    <div className='font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600'>
        <Link to="/" className='flex items-center gap-2'>
            <FaGraduationCap size={43} color="#673AB7" />
            <span className='text-xl'> DT Exam</span>
        </Link>
    </div>
    <div>
        <ul className='flex gap-4'>
            <li>
                <Link to="/signin" className='bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 font-semibold hover:text-blue-500 tracking-wide text-sm'>SignIn</Link>
            </li>
            <li>
                <Link to="/signup" className='bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 hover:text-blue-500 font-semibold tracking-wide text-sm'>SignUp</Link>
            </li>
            <li>
                <Link to="/developer" className='bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 hover:text-blue-500 font-semibold tracking-wide text-sm'>About</Link>
            </li>
        </ul>
    </div>
</header>
  )
}

export default WelcomeHeader