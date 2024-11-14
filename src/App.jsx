import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import Main from './Pages/AdminDashboard/Mainpage/Main';
import Orders from './Pages/AdminDashboard/Orders/Orders';

function App() {
  

  return (
   <>
   <Routes>
    <Route path='/' element = {<Main />} />
    <Route path="/orders" element={<Orders />} />
    </Routes>
   </>
  )
}

export default App
