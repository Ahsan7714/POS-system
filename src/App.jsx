import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import Main from './Pages/AdminDashboard/Mainpage/Main';
import Orders from './Pages/AdminDashboard/Orders/Orders';
import CreateOrder from './Pages/AdminDashboard/CreateOrder/CreateOrder';
import Analytics from './Pages/AdminDashboard/Analytics/Analytics';

function App() {
  

  return (
   <>
   <Routes>
    <Route path='/' element = {<Main />} />
    <Route path="/orders" element={<Orders />} />
    <Route path="/create-order" element={<CreateOrder />} />
    <Route path='/analytics' element={<Analytics />} />
    </Routes>
   </>
  )
}

export default App
