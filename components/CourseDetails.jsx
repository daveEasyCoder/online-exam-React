import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { course } from "../../data/course";
import ShowPopup from "./ShowPopup";

const CourseDetails = () => {
  const { id } = useParams();

  const course_details = course.find((crs) => crs.id == parseInt(id));

  const [SelectedId, setSelectedId] = useState([]);
  const [correctAnswerId, setCorrectAnswerId] = useState([]);
  const [wrongAnswerId, setWrongAnswerId] = useState([]);
  const [score, setScore] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);


  const handleShowAnswer = (isCorrect, optionId, QId) => {
    if (isCorrect) {
      setCorrectAnswerId((prev) => [...prev, optionId]);
      setScore((prev) => prev + 1);
    } else {
      setWrongAnswerId((prev) => [...prev, optionId]);
    }
    setSelectedId((prev) => [...prev, QId]);
    
    if (showAnswer) {
      setShowAnswer(false)
    }
  };




  return (
    <div className="ml-0 sm:ml-44 pt-23">
      <div className="max-w-6xl pl-3 pr-3 pb-4">
        {course_details ? (
          <div>
            <div className="flex flex-col lg:flex-row items-start gap-2">
              <img
                className="object-cover rounded-md w-[80%] lg:w-2/3"
                src={`${import.meta.env.BASE_URL}${course_details.image}`}
                alt="IMG"
              />
             <div className="border-1 border-gray-300 w-[80%] lg:w-1/3">
                <div className="h-8 bg-gray-200"></div>
               <p className="text-sm leading-6 tracking-wide px-2 py-3">{course_details.desc}</p>
             </div>
            </div>

            <div className="mt-5 max-w-xl">
              <h1 className="text-xl font-bold text-gray-800 mb-3">
                Quick Exam
              </h1>
              {course_details && course_details.questions.length
                ? course_details.questions.map((q, index) => (
                    <div key={index} className="">
                      <p className="font-bold mb-2">
                        {index + 1}. {q.question}
                      </p>
                      <div className="">
                        {q.answer.map((o, i) => (
                          <button
                            key={i}
                            onClick={() =>
                              !SelectedId.includes(q.id) &&
                              handleShowAnswer(o.correct, o.id, q.id)
                            }
                            className={`block border-1 px-3 py-1.5 text-sm mb-2 w-full rounded-2xl text-gray-800 bg-blue-50  cursor-pointer ${
                              correctAnswerId.includes(o.id) || (o.correct && SelectedId.includes(q.id))
                                ? "bg-green-100"
                                : wrongAnswerId.includes(o.id)
                                ? "bg-red-100"
                                : "border-blue-300"
                            }`}
                          >
                            {o.option}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))
                : null}
            </div>
          </div>
        ) : (
          <div>no course</div>
        )}
        <button
          onClick={() => setShowAnswer(true)}
          className="px-3 bg-blue-500 py-2 w-[90%] text-sm rounded-lg text-white cursor-pointer font-bold mt-4 max-w-xl"
        >
          Calculate
        </button>
        {
           SelectedId.length === course_details.questions.length && showAnswer ? <ShowPopup setShowAnswer={setShowAnswer}  score={score} course_details={course_details} /> :  showAnswer && <div className="mt-1 text-sm text-red-600">Please answer all provided questions</div>
        }
      </div>
    </div>
  );
};

export default CourseDetails;
