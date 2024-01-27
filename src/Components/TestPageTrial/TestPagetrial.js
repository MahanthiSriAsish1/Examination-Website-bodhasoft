import React, { useState, useEffect } from 'react'
import Navbar from '../Navbar/Navbar'
import axios from 'axios'
import './testpage.css'

const TestPagetrial = () => {
  const [QuestionIndex, setQuestionIndex] = useState('0')
  const [selectedOption, setselectedOption] = useState('')
  const [questionArray, setquestionArray] = useState([])
  const [score, setscore] = useState('0')

  useEffect(() => {
    const getQuestionPaper = async () => {
      try {
        const response = await axios.get('')
        setquestionArray = response.data
      } catch (error) {
        console.error('Error fetching question Paper', error);
      }
    }
    getQuestionPaper();
  }, [])

  useEffect(() => {
    console.log(selectedOption);
  }, [selectedOption]);

  const isLastQuestion = QuestionIndex === questionArray.length - 1;

  const handleNext = () => {
    const isCorrect = selectedOption === questionArray[QuestionIndex].correctAnswer;
    if (isCorrect) {
      setscore((prevScore) => prevScore + 1);
    }
    setQuestionIndex((prevIndex) => Math.min(prevIndex + 1, questionArray.length - 1));
    setselectedOption(null); // Reset selected option for the next question
  };

  const handlePrevious = () => {
    setQuestionIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    setselectedOption(null); // Reset selected option for the previous question
  };

  const handleOptionChange = (option) => {
    setselectedOption(option);

  };

  const handleSubmit = () => {
    const isCorrect = selectedOption === questionArray[QuestionIndex].correctAnswer;
    if (isCorrect) {
      setscore((prevScore) => prevScore + 1);
    } else {
      setscore((prevScore) => prevScore + 0);
    }

  }
  return (
    <div className='testpage-wrapper'>
      <Navbar />
      <div className='test-question'>
        <div className='question'>
          <h3>Q{QuestionIndex + 1}</h3>
          <p>{questionArray[QuestionIndex]}</p>
          <img src="" alt="" />
        </div>
        <div className='option-parent'>
          <form className='options'>
            {Object.entries(questionArray[QuestionIndex].options).map(([key, value]) => (
              <label key={key}>
                <input
                  type="radio"
                  name="options"
                  value={key}
                  checked={selectedOption === key}
                  onChange={() => handleOptionChange(key)}
                />
                {value}
              </label>
            ))}
          </form>
          {isLastQuestion ? (
            <div className='prev-next'>
              <button onClick={handlePrevious} disabled={QuestionIndex === 0}>Previous</button>
              <button onClick={handleSubmit}>Submit</button>
            </div>
          ) : (
            <div className='prev-next'>
              <button onClick={handlePrevious} disabled={QuestionIndex === 0}>Previous</button>
              <button onClick={handleNext} disabled={QuestionIndex === questionArray.length - 1}>Next</button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default TestPagetrial
