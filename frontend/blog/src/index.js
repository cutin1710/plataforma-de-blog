import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'


import Home from './pages/Home'
import CreatePost from './pages/CreatePost'
import EditPost from './pages/EditPost'
import Register from './pages/Register'
import Login from './pages/Login'
import PostDetailsPage from './pages/PostDetailsPage'
import UserProfilePage from './pages/UserProfilePage'

import Header from './components/Header'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Header />
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/createpost' element={<CreatePost />}/>
        <Route path='/edit' element={<EditPost />}/>
        <Route path='/profile' element={<UserProfilePage />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
      </Routes>
    </BrowserRouter>
  </div>
);