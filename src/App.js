import './App.css';
import Navbar from './componenets/Navbar';
import Parent from './componenets/Parent';
import Users from './componenets/Users';
import Home from './componenets/Home';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">

        <BrowserRouter>
            <Navbar/>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/Parent' element={<Parent/>}/>
              <Route path='/Users' element={<Users/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
