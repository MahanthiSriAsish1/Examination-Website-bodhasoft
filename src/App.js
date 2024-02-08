import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css'
import ParentComponent from './ParentComponent'
import EndPage from './Pages/EndPage/EndPage';
import ErrorPage from './Pages/ErrorPage/ErrorPage';
import Timer from './Components/Timer/Timer';



function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='*' element={<ErrorPage />} />
          <Route path='/' element={<ParentComponent />} />
          <Route path='/EndPage' element={<EndPage ShowTimer={true}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
