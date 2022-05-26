import { Route, Routes } from 'react-router-dom';
import './App.css';
import Location from './components/Location/Location';
import Home from './pages/Home';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Location></Location>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
      </Routes>
    </div>
  );
}

export default App;
