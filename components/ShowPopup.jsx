import React from 'react'

const ShowPopup = ({setShowAnswer,score,course_details}) => {
  return (
    <div className="showAnswer">
          <div className="showAnswer-content">
            <h1 className="font-bold text-xl text-gray-700">You Scored</h1>
            <p className="text-gray-500 font-semibold my-1">{score}/{course_details.questions.length}</p>
            <button onClick={() => setShowAnswer(false)} className="bg-blue-500 w-[80%] rounded-sm text-white font-bold text-sm py-1 cursor-pointer">Ok</button>
          </div>
        </div>
  )
}

export default ShowPopup