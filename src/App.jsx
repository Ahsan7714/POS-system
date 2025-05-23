import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import Main from './Pages/AdminDashboard/Mainpage/Main';
import Orders from './Pages/AdminDashboard/Orders/Orders';
import CreateOrder from './Pages/AdminDashboard/CreateOrder/CreateOrder';
import Analytics from './Pages/AdminDashboard/Analytics/Analytics';
import MenuItems from './Pages/AdminDashboard/MenuItems/MenuItems';
import Kitchen from './Pages/AdminDashboard/kitchen/Kitchen';
import Signup from './Pages/AdminDashboard/Signup/Signup';
import Login from './Pages/AdminDashboard/Login/Login';
import AdminPanel from './Pages/AdminDashboard/Admin Panel/AdminPanel';
import Profile from './Pages/AdminDashboard/profile/Profile';
import SocialMedia from './Pages/AdminDashboard/social/SocialMedia';
import { Toaster } from 'react-hot-toast';
import Store from "./redux/store.js";
import { loadUser } from './redux/action/user';
import { allOrder } from './redux/action/order.js';
import Category from './Pages/AdminDashboard/CreateOrder/Category.jsx';
import DemographicsPage from './Pages/AdminDashboard/Demographs/DemographicsPage.jsx';


function App() {
  useEffect(()=>{
    Store.dispatch(loadUser())
    Store.dispatch(allOrder());
  },[loadUser,allOrder])
  return (
   <>
   <Routes>
    <Route path='/dashboard' element = {<Main />} />
    <Route path="/orders" element={<Orders />} />
    <Route path="/create-order" element={<Category />} />
    <Route path='/analytics' element={<Analytics />} />
    <Route path="/menu-items" element={<MenuItems />} />
    <Route path='/kitchen' element={<Kitchen />} />
    <Route path='/profile' element={<Profile/>} />
    <Route path='/social' element={<SocialMedia/>}/>
    <Route path ='/' element={<Signup/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/demographs' element={<DemographicsPage/>}/>
    <Route path='/admin' element={<AdminPanel/>}/>
    </Routes>
    <Toaster/>
   </>
  )
}

export default App
