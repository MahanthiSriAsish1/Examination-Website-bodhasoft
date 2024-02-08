// import React from 'react'
// import Navbar from '../../Components/Navbar/Navbar'
// import '../../styles/Endpage.css'

// const EndPage = () => {
//     const message = 'Thank you for completing the test, You Can Close This Window';
//     return (
//         <div className='EndPage-wrapper'>
//             <Navbar/>
//             <div className='EndMessage'>
//                 <h2>Test Completed</h2>
//                 <p>{message}</p>
//             </div>
//         </div>
//     )
// }

// export default EndPage


import React, { useEffect } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import '../../styles/Endpage.css';

const EndPage = ({ShowTimer}) => {
  const message = 'Thank you for completing the test. You can close this window.';

  useEffect(() => {
    const closeWindowTimeout = setTimeout(() => {
      window.close();
    }, 0);

    return () => clearTimeout(closeWindowTimeout);
  }, []);

  return (
    <div className='EndPage-wrapper'>
      <Navbar ShowTimer={ShowTimer}/>
      <div className='EndMessage'>
        <h2>Test Completed</h2>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default EndPage;

