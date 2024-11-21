import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import Main from './Pages/AdminDashboard/Mainpage/Main';
import Orders from './Pages/AdminDashboard/Orders/Orders';
import CreateOrder from './Pages/AdminDashboard/CreateOrder/CreateOrder';
import Analytics from './Pages/AdminDashboard/Analytics/Analytics';
import MenuItems from './Pages/AdminDashboard/MenuItems/MenuItems';

function App() {
  

  return (
   <>
   <Routes>
    <Route path='/' element = {<Main />} />
    <Route path="/orders" element={<Orders />} />
    <Route path="/create-order" element={<CreateOrder />} />
    <Route path='/analytics' element={<Analytics />} />
    <Route path="/menu-items" element={<MenuItems />} />
    </Routes>
   </>
  )
}

export default App
