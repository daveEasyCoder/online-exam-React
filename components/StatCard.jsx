import React from 'react'

const StatCard = ({number,label}) => {
  return (
    <div className="p-8 rounded-2xl bg-white/10 backdrop-blur-lg">
    <div className="text-5xl font-bold text-white mb-4">{number}</div>
    <div className="text-lg text-white/90 font-medium">{label}</div>
  </div>
  )
}

export default StatCard