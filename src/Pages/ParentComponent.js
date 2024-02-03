import React, { useState} from 'react';
import UserForm from '../Components/TestForm/TestForm';
import TestPagetrial from '../Components/TestPageTrial/TestPagetrial';

const ParentComponent = () => {
  const [formData, setFormData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (data) => {
    setLoading(true);

    setTimeout(() => {
      setFormData(data);
      setLoading(false);
    }, 2200); 
  };

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        formData ? (
          <TestPagetrial formData={formData} />
        ) : (
          <UserForm onSubmit={handleSubmit} />
        )
      )}
    </div>
  );
};

export default ParentComponent;

