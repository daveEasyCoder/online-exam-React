import React from 'react'
import Courses from './Courses'



const Home = () => {

  
  return (
    <div className='ml-0 sm:ml-44 pt-24 max-w-7xl'>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 px-3  gap-3'>
          <div className='course-list rounded-3xl bg-white font-bold'>React</div>
          <div className='course-list rounded-3xl bg-white font-bold'>Python</div>
          <div className='course-list rounded-3xl bg-white font-bold'>React Native</div>
          <div className='course-list rounded-3xl bg-white font-bold'>HTML</div>
          <div className='course-list rounded-3xl bg-white font-bold'>CSS</div>
          <div className='course-list rounded-3xl bg-white font-bold'>javascript</div>
          <div className='course-list rounded-3xl bg-white font-bold'>C++</div>
      </div>

      <Courses />
  
    </div>
  )
}

export default Home