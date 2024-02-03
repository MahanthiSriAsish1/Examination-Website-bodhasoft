import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css'
import EndPage from './Components/EndPage/EndPage';
import ParentComponent from './Pages/ParentComponent';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ParentComponent/>}/>
          <Route path='/EndPage' element={<EndPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
