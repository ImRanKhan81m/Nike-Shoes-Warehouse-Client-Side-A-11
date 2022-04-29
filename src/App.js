
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/Authentication/Login/Login';
import Register from './Components/Authentication/Register/Register';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import ManageInventories from './Components/ManageInventories/ManageInventories';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/manage' element={<ManageInventories/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
      </Routes>
    </div>
  );
}

export default App;
