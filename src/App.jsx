// src/App.jsx
import './index.css'
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Dashboard } from './pages/dashboad/dashboard';
import { Login } from './pages/login/login';
import { Home } from './pages/home/home';
import Signup from './pages/signup/signup';
import { Logout } from './pages/components/logout';
import { useEffect } from 'react';
import axios from 'axios';
import { AllPosts } from './pages/AllPosts/AllPosts';
import { setloginstatus, setUserInfo } from '../redux/userstate';
function App() {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const dispatch = useDispatch()
  useEffect(() => {
    const fetchUser = async () => {
      try {
        console.log("get request");
        const response = await axios.get('https://computer-chat-api.onrender.com/user/refresh',
          { withCredentials: true });
        console.log(response);
        if (response.data) {
          dispatch(setUserInfo(response.data));
          dispatch(setloginstatus(true));
          console.log(response.data);
        }
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };
    fetchUser();
  }, [dispatch]);
  return (
    <Router>
      <Routes>
        <Route path="/" element={isLoggedIn ? <Home /> : <Navigate to="/login" />} />
        <Route path="/dashboard" element={isLoggedIn ? <Dashboard /> : <Navigate to="/login" />} />
        <Route path="/AllPosts" element={isLoggedIn ? <AllPosts /> : <Navigate to="/login" />} />
        <Route path="/login" element={isLoggedIn ? <Navigate to="/dashboard" /> : <Login />} />
        <Route path="/signup" element={isLoggedIn ? <Navigate to="/dashboard" /> : <Signup />} />
        <Route path='/logout' element={<Logout />} />
      </Routes>
    </Router>
  );
}

export default App;
