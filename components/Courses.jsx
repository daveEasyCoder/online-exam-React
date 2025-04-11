import React,{useState} from 'react'
import { course } from '../../data/course'
import CourseItem from './CourseItem'
const Courses = () => {

    const [courses,setCourses] = useState(course)

  return (
    <div className='mt-5 px-3'>
        <h1 className='mb-3 font-semibold text-gray-800 text-xl'>Latest Courses</h1>
        <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2'>
           {
            courses && courses.length ? 
             courses.map((c) => (
               <CourseItem key={c.id} c={c} />
             ))
            : <div>No Course</div>
           } 
        </div>
    </div>
  )
}

export default Courses