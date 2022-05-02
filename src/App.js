
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddInventory from './Components/AddInventory/AddInventory';
import Login from './Components/Authentication/Login/Login';
import Register from './Components/Authentication/Register/Register';
import Blog from './Components/Blog/Blog';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import ManageInventoriesProduct from './Components/ManageInventories/ManageInventoriesProduct';
import MyItems from './Components/MyItems/MyItems';
import NotFound from './Components/NotFound/NotFound';
import RequireAuth from './Components/RequireAuth/RequireAuth';
import UpdateProduct from './Components/UpdateProduct/UpdateProduct';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/addInventory' element={<AddInventory />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/myItems' element={
          <RequireAuth>
            <MyItems />
          </RequireAuth>
        } />
        <Route path='/manage' element={
          <RequireAuth>
            <ManageInventoriesProduct />
          </RequireAuth>
        } />
        <Route path='/shoes/:manageId' element={
          <RequireAuth>
            <UpdateProduct />
          </RequireAuth>
        } />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
