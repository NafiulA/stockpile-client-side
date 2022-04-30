import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/authentication/Login/Login';
import Register from './components/authentication/Register/Register';
import Home from './components/homepage/Home/Home';
import InventoryItem from './components/homepage/InventoryItem/InventoryItem';
import AddItem from './components/management/AddItem/AddItem';
import ManageInventory from './components/management/ManageInventory/ManageInventory';
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
        <Route path='/inventory/:id' element={<InventoryItem></InventoryItem>}></Route>
        <Route path='/manageinventories' element={<ManageInventory></ManageInventory>}></Route>
        <Route path='/additem' element={<AddItem></AddItem>}></Route>
        <Route path='/myitems' element={<MyItems></MyItems>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
