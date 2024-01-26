import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import './testpage.css'

const TestPagetrial = () => {
  const[QuestionNumber,setQuestionNumber] = useState('1')
  return (
    <div className='testpage-wrapper'>
      <Navbar />
      <div className='test-question'>
        <div className='question'>
          <p>Q{QuestionNumber}</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum repudiandae ipsa, nihil facilis, similique voluptates ullam veritatis vero velit odio repellat quae itaque facere quod cupiditate nesciunt eligendi ipsum vel beatae earum odit explicabo placeat, amet et. Illum, animi ut? Quidem aliquam aliquid eum voluptatibus.</p>
          <img src="" alt="" />
        </div>
        <div className='option-parent'>
          <form className='options'>
            <label><input type="radio" name="options" />option1</label>
            <label><input type="radio" name="options" />option2</label>
            <label><input type="radio" name="options" />option3</label>
            <label><input type="radio" name="options" />option4</label>
          </form>
          <div className='prev-next'>
            <button>Previous</button>
            <button>Next</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TestPagetrial
