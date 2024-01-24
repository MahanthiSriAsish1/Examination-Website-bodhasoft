import React, { Fragment, useState, useEffect } from 'react'
import Navbar from './Navbar';

const TestPage = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        // Fetch questions from the API
        const fetchQuestions = async () => {
            try {
                const response = await fetch('https://your-api-endpoint.com/questions');
                const data = await response.json();
                setQuestions(data);
            } catch (error) {
                console.error('Error fetching questions:', error);
            }
        };

        fetchQuestions();
    }, []); // Empty dependency array ensures the effect runs only once on mount

    const handleAnswerClick = (selectedAnswer) => {
        if (selectedAnswer === questions[currentQuestion].correctAnswer) {
            setScore(score + 1);
        }

        // Move to the next question
        setCurrentQuestion(currentQuestion + 1);
    };
    return (
        <Fragment>
            <div>
                {questions.length > 0 && <Navbar />}
                {questions.length > 0 ? (
                    currentQuestion < questions.length ? (
                        <div>
                            <h2>Question {currentQuestion + 1}</h2>
                            <p>{questions[currentQuestion].question}</p>
                            <ul>
                                {questions[currentQuestion].options.map((option, index) => (
                                    <li key={index} onClick={() => handleAnswerClick(option)}>
                                        {option}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ) : (
                        <div>
                            <h2>Quiz Completed!</h2>
                            <p>Your Score: {score}/{questions.length}</p>
                        </div>
                    )
                ) : (
                    <p>Loading questions...</p>
                )}
            </div>
        </Fragment>
    )
}

export default TestPage
