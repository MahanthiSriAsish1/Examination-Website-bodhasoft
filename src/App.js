import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Login from './Components/Login/Login';
import TestPagetrial from './Components/TestPageTrial/TestPagetrial';
import './index.css'
import Register from './Components/RegisterPage/Register';
import TestHome from './Pages/TestHome';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path='/TestHome' element={<TestHome/>}/>
          <Route path='/Testpage' element={<TestPagetrial/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
