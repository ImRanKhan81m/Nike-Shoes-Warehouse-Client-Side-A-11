
import { Route, Routes } from 'react-router-dom';
import AddInventory from './AddInventory/AddInventory';
import './App.css';
import Login from './Components/Authentication/Login/Login';
import Register from './Components/Authentication/Register/Register';
import Blog from './Components/Blog/Blog';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import ManageInventoriesProduct from './Components/ManageInventories/ManageInventoriesProduct';
import NotFound from './Components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/blog' element={<Blog/>} />
        <Route path='/manage' element={<ManageInventoriesProduct/>} />
        <Route path='/addInventory' element={<AddInventory/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </div>
  );
}

export default App;
