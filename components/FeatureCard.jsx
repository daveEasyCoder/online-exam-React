import React from 'react'

const FeatureCard = ({icon,title,description}) => {
  return (
    <div className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl  border border-indigo-50 group hover:-translate-y-1 transition-transform duration-300">
    <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">{icon}</div>
    <h3 className="text-xl font-semibold text-gray-900 mb-4">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
  )
}

export default FeatureCard