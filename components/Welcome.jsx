import React,{useEffect} from 'react'
import { Link } from 'react-router-dom'
import WelcomeHeader from './WelcomeHeader';
import { useGlobalContext } from "./GlobalContext/Context";
import { useNavigate } from 'react-router-dom';
const Welcome = () => {

    const {user} = useGlobalContext()
  
    // console.log(user);
    
    useEffect(() => {
        document.body.style.backgroundColor = "white";
    
        return () => {
          document.body.style.backgroundColor = "rgb(244, 244, 244)"; // Reset when leaving
        };
      }, []);

    
  return (
        <div className='welcome-page flex justify-center items-center'>
           <WelcomeHeader />
            <div>
                <div className='px-7 flex gap-3 items-center'>
                    <div className=''>
                        <p className="text-6xl font-bold mb-3.5  text-gray-800 leading-15 whitespace-nowrap">Welcome to <br /> <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 text-5xl">DT Exam</span></p>
                        <p className='text-sm tracking-wide text-gray-600 leading-5 mb-7 w-[70%]'>DT Exam is your trusted platform for seamless online examinations. We provide a secure and user-friendly environment for students and educators alike. Whether you're taking a quiz, midterm, or final, our system ensures accuracy, reliability, and a smooth testing experience. Join us and take your assessments with confidence.</p>
                        <Link to="/signup" className='bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-semibold px-9 py-2 rounded-sm hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 transition duration-300 cursor-pointer'>Get Start</Link>
                    </div>
                    <div className='w-1/2'>
                        {/* <img className='w-97' src="../src/assets/svg.jpg" alt="" /> */}
                    </div>
                </div>
            </div>
        </div>
   
  )
}

export default Welcome