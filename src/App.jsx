import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import Main from './Pages/AdminDashboard/Mainpage/Main';

function App() {
  

  return (
   <>
   <Routes>
    <Route path='/' element = {<Main />} />
    </Routes>
   </>
  )
}

export default App
