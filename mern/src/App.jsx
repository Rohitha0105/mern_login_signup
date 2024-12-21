import React from 'react';
import Login from './pages/login_signup/Login'
import Signup from './pages/login_signup/Signup';
import HomePage from './pages/login_signup/HomePage/HomePage';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import AddPost from './pages/login_signup/HomePage/AddPost';
const App = () => {
  return (
    <div>
      <BrowserRouter>
         <Routes>
           <Route path='/' element={<Login />}></Route>
           <Route path='/signup' element={<Signup />}></Route>
           <Route path='/login' element={<Login />}></Route>
           <Route path='/home' element={<HomePage />}></Route>
           <Route path='/addpost' element= {<AddPost />} ></Route>
         </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
