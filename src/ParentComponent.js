import React, { useEffect, useState } from 'react';
import TestPagetrial from './Pages/TestPageTrial/TestPagetrial';
import UserForm from './Pages/TestForm/TestForm';
import Loader from './Components/Loader/Loader';
import axios from 'axios'


const ParentComponent = () => {
  const [formData, setFormData] = useState(null);
  const [loading, setLoading] = useState(false)
  const [duration, setDuration] = useState(0);
  const [TestName, setTestName] = useState('');
  const [Instructions,setInstructions] = useState('');
  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

  // useEffect(() => {
  //   const getExamDetails = async () => {
  //     try {
  //       const response = await axios.get(`${API_BASE_URL}/getExamDetails`)
  //       console.log(response);
  //       setDuration = response.data.duration
  //       setTestName = response.data.TestName
  //       setInstructions = response.data.Instructions
  //     } catch (e) {
  //       console.log(e);
  //       throw (e);
  //     }
  //   }
  //   getExamDetails();
  // }, [])

  const handleSubmit = (data) => {
    setLoading(true)
    setTimeout(() => {
      setFormData(data);
      setLoading(false)
    }, 2000);
  };

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        formData ? (
          <TestPagetrial formData={formData} duration={duration} TestName={TestName} />
        ) : (
          <UserForm onSubmit={handleSubmit} duration={duration} TestName={TestName} Instructions={Instructions} />
        )
      )}
    </div>
  );
};

export default ParentComponent;

