import React from 'react'
import { Link } from 'react-router-dom'
import Rating from './Rating'
const CourseItem = ({c}) => {
  return (
    <>
       <Link key={c.id} to={`/details/${c.id}`} className='bg-white p-4 rounded-md drop-shadow-[0_3px_3px_rgba(0,0,0,0.10)] hover:shadow-lg'>
            <img className='rounded-lg h-34 w-full object-cover' src={`${import.meta.env.BASE_URL}${c.image}`} />
            <div>
                <p className='description'>{c.desc.length > 30 ? c.desc.slice(0,31)+'...' : c.desc}</p>
                <p className='author'>{c.auther}</p>
                <div className='flex items-center gap-1'>
                    <Rating stars={c.rating} />
                    <span className='text-sm text-gray-500 font-bold'>{c.rating}</span>
                </div>
            </div>
        </Link>
    </>
  )
}

export default CourseItem