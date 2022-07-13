import './App.css';
import Header from './Component/Navbar/Header';
import {Routes, Route} from 'react-router-dom'
import Home from './Component/Home/Home';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
