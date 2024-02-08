import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';
import axios from 'axios';
import '../../styles/testpage.css';

const TestPagetrial = ({ formData, duration, TestName }) => {
  const [QuestionIndex, setQuestionIndex] = useState(0);
  const [selectedOption, setselectedOption] = useState(
    localStorage.getItem(`selectedOption_${QuestionIndex}`) || ''
  );
  const [questionArray, setquestionArray] = useState([]);
  const [loading, setLoading] = useState(false);
  const [score, setscore] = useState(0);
  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
  const navigate = useNavigate();

  useEffect(() => {
    const getQuestionPaper = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/QuestionPaper`);
        setquestionArray(response.data);
      } catch (error) {
        console.error('Error fetching question Paper', error);
      }
    };
    getQuestionPaper();
  }, []);

  useEffect(() => {
    localStorage.setItem(`selectedOption_${QuestionIndex}`, selectedOption);
  }, [selectedOption, QuestionIndex]);

  const isLastQuestion = QuestionIndex === questionArray.length - 1;

  const handleNext = () => {
    const isCorrect = selectedOption === questionArray[QuestionIndex].correctAnswer;
    if (isCorrect) {
      setscore(score + 1);
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
    if (questionArray.length === 0) {
      return null;
    }
    return Object.entries(questionArray[QuestionIndex].options).map(([key, value]) => (
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
    ));
  };

  // const handleSubmit = async () => {
  //   const isCorrect = selectedOption === questionArray[QuestionIndex].correctAnswer;
  //   if (isCorrect) {
  //     await setscore(score + 1);
  //   }
  //   const postData = {
  //     fullName: formData.fullName,
  //     email: formData.email,
  //     college: formData.college,
  //     score: score,
  //   };
  //   try {
  //     const response = await axios.post(`${API_BASE_URL}/upload-results`, postData);
  //     if (response.status === 200) {
  //       for (let i = 0; i < questionArray.length; i++) {
  //         localStorage.removeItem(`selectedOption_${i}`);
  //       }
  //       navigate('/EndPage');
  //     }
  //   } catch (e) {
  //     alert('Error occurred while submitting.');
  //   }
  // };

  const handleSubmit = async () => {
    try {
      setLoading(true)

      const isCorrect = selectedOption === questionArray[QuestionIndex].correctAnswer;
      if (isCorrect) {
        await setscore(score + 1);
      }
      const postData = {
        fullName: formData.fullName,
        email: formData.email,
        college: formData.college,
        score: score,
      };
      const response = await axios.post(`${API_BASE_URL}/upload-results`, postData);
      if (response.status === 200) {
        for (let i = 0; i < questionArray.length; i++) {
          localStorage.removeItem(`selectedOption_${i}`);
        }
        navigate('/EndPage');
      }
    } catch (e) {
      alert('Error occurred while submitting.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='testpage-wrapper'>
      <Navbar duration={duration} TestName={TestName} ShowTimer={true}/>
      <div className='test-question'>
        <div className='question'>
          <h3>Q{QuestionIndex + 1}</h3>
          <p>{questionArray[QuestionIndex]?.question}</p>
        </div>
        <div className='option-parent'>
          <form className='options'>{renderOptions()}</form>
          {isLastQuestion ? (
            <div className='prev-next'>
              <button onClick={handlePrevious} disabled={QuestionIndex === 0}>
                Previous
              </button>
              <button onClick={handleSubmit}>Submit</button>
            </div>
          ) : (
            <div className='prev-next'>
              <button onClick={handlePrevious} disabled={QuestionIndex === 0}>
                Previous
              </button>
              <button onClick={handleNext} disabled={QuestionIndex === questionArray.length - 1}>
                Next
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TestPagetrial;
