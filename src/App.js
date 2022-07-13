import './App.css';
import Header from './Component/Navbar/Header';
import {Routes, Route} from 'react-router-dom'
import Home from './Component/Home/Home';
import DetailsPage from './Component/Products/DetailsPage';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/products/:id' element={<DetailsPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
