import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar'
import axios from 'axios'
import './testpage.css'

const TestPagetrial = ({ formData }) => {
  const [QuestionIndex, setQuestionIndex] = useState(0)
  const [selectedOption, setselectedOption] = useState(
    localStorage.getItem(`selectedOption_${QuestionIndex}`) || ''
  );
  const [questionArray, setquestionArray] = useState([])
  const [score, setscore] = useState(0)
  const navigate = useNavigate();


  useEffect(() => {
    const getQuestionPaper = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/QuestionPaper')
        setquestionArray(response.data)
      } catch (error) {
        console.error('Error fetching question Paper', error);
      }
    }
    getQuestionPaper();
  }, [])

  useEffect(() => {
    localStorage.setItem(`selectedOption_${QuestionIndex}`, selectedOption);
  }, [selectedOption, QuestionIndex]);
   
  const isLastQuestion = QuestionIndex === questionArray.length - 1;

  const handleNext = () => {
    const isCorrect = selectedOption === questionArray[QuestionIndex].correctAnswer;
    if (isCorrect) {
      setscore(score+1);
    }
    setQuestionIndex((prevIndex) => Math.min(prevIndex + 1, questionArray.length - 1));
    setselectedOption('');
  };

  const handlePrevious = () => {
    setQuestionIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    setselectedOption('');
  };

  const handleOptionChange = (option) => {
    setselectedOption(option);
  };

  const renderOptions = () => {
    if(questionArray.length === 0){
      return
    }
    let options = []
    Object.entries(questionArray[QuestionIndex].options).forEach(([key, value]) => {
      options.push(
        <label key={key}>
          <input
            type="radio"
            name="options"
            value={value}
            checked={selectedOption === value}
            onChange={() => handleOptionChange(value)}
          />
          {value}
        </label>
      )
    })
    return options
  }

  const handleSubmit = async() => {
    const isCorrect = selectedOption === questionArray[QuestionIndex].correctAnswer;
    if (isCorrect) {
      await setscore(score + 1);
    }
    const postData = {
      fullName: formData.fullName,
        email: formData.email,
        college: formData.college,
        score: score,
    }
    try{
      const response = await axios.post('http://localhost:3001/api/upload-results',postData)
      if(response.status === 200){
        for (let i = 0; i < questionArray.length; i++) {
          localStorage.removeItem(`selectedOption_${i}`);
        }
        navigate('/EndPage')
      }
    }catch(e){
      alert('Error occurred while submitting.');
    }
  }

  return (
    <div className='testpage-wrapper'>
      <Navbar />
      <div className='test-question'>
        <div className='question'>
          <h3>Q{QuestionIndex + 1}</h3>
          <p>{questionArray[QuestionIndex]?.question}</p>
        </div>
        <div className='option-parent'>
          <form className='options'>
            {
              renderOptions()
            }
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
