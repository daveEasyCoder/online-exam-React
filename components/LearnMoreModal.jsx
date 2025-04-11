import React, { useState } from 'react'
import { AiOutlineClose } from "react-icons/ai";

const LearnMoreModal = ({setShowModal}) => {

  return (
        <div className='learn-more-modal fixed inset-0 z-50 flex items-center justify-center'>
           <div className='h-[60vh] overflow-y-auto max-w-2xl bg-white p-8 rounded-l-3xl relative'>
               <h1 className='text-3xl text-blue-700 font-bold mb-4'>About Our Platform</h1>
               <p className='font-semibold text-md mb-4'>Our Vision</p>
               <p className='text-sm mb-4 text-gray-600 leading-6'>We envision a future where education knows no boundaries, where assessment is fair, secure, and accessible to all. Our platform is designed to bridge the gap between traditional examination methods and modern technological capabilities.</p>
               <h2 className='text-xl font-semibold text-gray-700 mb-3'>Key Benefits</h2>
               <ul className='list-disc pl-2.5'>
                  <li className='text-sm text-gray-700 tracking-wide mb-1 leading-6'>Advanced proctoring system with AI-powered monitoring</li>
                  <li className='text-sm text-gray-700 tracking-wide mb-1 leading-6'>Real-time performance analytics and detailed reporting</li>
                  <li className='text-sm text-gray-700 tracking-wide mb-1 leading-6'>Support for multiple question formats and assessment types</li>
                  <li className='text-sm text-gray-700 tracking-wide mb-1 leading-6'>Automated grading system with manual override options</li>
                  <li className='text-sm text-gray-700 tracking-wide mb-1 leading-6'>24/7 technical support and assistance</li>
                  <li className='text-sm text-gray-700 tracking-wide mb-1 leading-6'>Secure data encryption and privacy protection</li>
               </ul>
    
               <div className='mt-6'>
                  <h1 className='text-lg font-semibold text-gray-700 mb-3 tracking-wide'>Who It's For</h1>
                  <div className='flex items-center gap-3'>
                    <div className='bg-blue-100 p-4 rounded-lg'>
                       <h1 className='font-semibold text-blue-500'>Educational Institutions</h1>
                       <p className='text-sm text-gray-600 mt-3 tracking-wide'>Perfect for schools, colleges, and universities looking to modernize their examination process.</p>
                    </div>
                    <div className='bg-red-100 p-4 rounded-lg'>
                      <h1 className='font-semibold'>Educational Institutions</h1>
                      <p className='text-sm text-gray-600 mt-3 tracking-wide'>Perfect for schools, colleges, and universities looking to modernize their examination process.</p>
                    </div>
                  </div>
               </div>
    
               <div>
                <h1 className='font-semibold text-gray-800 mb-4 text-xl mt-7'>Getting Started</h1>
                   <p className='tracking-wide leading-6 text-gray-600 text-sm'>Starting with our platform is simple. Register your institution, set up your first exam, and invite your students. Our step-by-step guide and support team will help you through every stage of the process.</p>
                   <hr className='my-5 text-gray-300' />
                   <div className='flex items-center justify-center'>
                      <button onClick={() => setShowModal(prev => !prev)} className='bg-blue-700 rounded-lg w-[100%] text-white font-bold py-2 text-sm cursor-pointer hover:bg-blue-600 duration-300'>Got It</button>
                   </div>
               </div>

             <div onClick={() => setShowModal(prev => !prev)} className='absolute top-5 right-4 cursor-pointer hover:bg-blue-100 duration-100 p-1.5 rounded-full'>
                <AiOutlineClose 
                    size={21} 
                    color="" 
                    className='text-gray-700  rounded-full '
                />
             </div>
              
           </div>
        </div>
  )
}

export default LearnMoreModal