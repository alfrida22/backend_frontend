import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Home from '../components/user/Home';
import AllFoods from '../components/user/AllFoods';
import FoodDetails from '../components/user/FoodDetails';
import Order from '../components/user/Order';
import Checkout from '../components/user/Checkout';
import Contact from '../components/user/Contact';
import Login from '../components/user/Login';
import Register from '../components/user/Register';
import Profile from '../components/user/Profile';
import Logout from '../components/user/Logout';

const UserRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/home' />} />
      <Route path='/home' element={<Home />} />
      <Route path='/foods' element={<AllFoods />} />
      <Route path='/foods/:id' element={<FoodDetails />} />
      <Route path='/order' element={<Order />} />
      <Route path='/checkout' element={<Checkout />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/logout' element={<Logout />} />
    </Routes>
  );
};

export default UserRoutes;
