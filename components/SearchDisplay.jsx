import React from 'react'
import { useParams } from 'react-router-dom'
import { course } from '../../data/course'
import CourseItem from './CourseItem'
const SearchDisplay = () => {

    const {title} = useParams()
    const results = course.filter(c => c.title.toLowerCase() === title.toLowerCase())   
     
    
  return (
    <div className='sm:ml-45 pl-2 pt-20'>
        
            {
             results && results.length ? 
               <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2'>
                   {
                    results.map((result,index) => (
                    <CourseItem key={index} c={result} /> 
                    ))
                  }
                </div>
              : <div className='h-[60vh] flex items-center justify-center font-semibold text-3xl text-gray-900'>No Results</div>
            }
      
    </div>
  )
}

export default SearchDisplay