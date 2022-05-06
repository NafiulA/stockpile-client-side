import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/authentication/Login/Login';
import Register from './components/authentication/Register/Register';
import RequireAuth from './components/authentication/RequireAuth/RequireAuth';
import Home from './components/homepage/Home/Home';
import AddItem from './components/management/AddItem/AddItem';
import ManageInventory from './components/management/ManageInventory/ManageInventory';
import ManageItem from './components/management/ManageItem/ManageItem';
import MyItems from './components/management/MyItems/MyItems';
import Blogs from './components/others/Blogs/Blogs';
import Contact from './components/others/Contact/Contact';
import Footer from './components/shared/Footer/Footer';
import Header from './components/shared/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/inventory/:id' element={<RequireAuth><ManageItem></ManageItem></RequireAuth>}></Route>
        <Route path='/manageinventories' element={<RequireAuth><ManageInventory></ManageInventory></RequireAuth>}></Route>
        <Route path='/additem' element={<RequireAuth><AddItem></AddItem></RequireAuth>}></Route>
        <Route path='/myitems' element={<RequireAuth><MyItems></MyItems></RequireAuth>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
      <Footer></Footer>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
