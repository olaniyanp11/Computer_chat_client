import React, { useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { X } from 'lucide-react';
import { setSuccessMessage, setUserInfo, setloginstatus } from '../../../redux/userstate'
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Signup = () => {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const successMessage = useSelector((state) => state.user.successMessage);
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate required fields
    if (!firstname) return setError("First name is required");
    if (!lastname) return setError("Last name is required");
    if (!username) return setError("Username is required");
    if (!email) return setError("Email is required");
    if (!password) return setError("Password is required");

    try {
      const response = await axios.post('http://localhost:3000/signup', {
        firstname,
        lastname,
        username,
        email,
        password,
      });

      // Handle successful response
      dispatch(setSuccessMessage("user account created successfully"))
      return navigate('/login')
    } catch (error) {
      // Handle errors
      setError(error.response?.data?.message || 'An error occurred. Please try again.');
    }
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        {error !== "" && (
          <div className='absolute top-0 left-0 w-full h-full flex justify-center items-center'>
            <motion.div
              initial={{ opacity: 0, y: -20 }}  // Initial animation properties
              animate={{ opacity: 1, y: 0 }}     // Animation properties when the component mounts
              exit={{ opacity: 0, y: -20 }}       // Animation properties when the component unmounts
              transition={{ duration: 0.3 }}     // Transition duration
              className="max-w-md w-full fixed rounded-md bg-red-500 text-white px-5 py-5 flex justify-between items-center"
            >
              <p className="mr-4">{error}</p>
              <button onClick={() => setError("")} className="focus:outline-none">
                <X className="h-5 w-5" />
              </button>
            </motion.div>
          </div>
        )}
        {successMessage !== "" && (
          <div className='absolute top-0 left-0 w-full h-full flex justify-center items-center'>
            <motion.div
              initial={{ opacity: 0, y: -20 }}  // Initial animation properties
              animate={{ opacity: 1, y: 0 }}     // Animation properties when the component mounts
              exit={{ opacity: 0, y: -20 }}       // Animation properties when the component unmounts
              transition={{ duration: 0.3 }}     // Transition duration
              className="max-w-md w-full fixed rounded-md bg-green-500 text-white px-5 py-5 flex justify-between items-center"
            >
              <p className="mr-4">{successMessage}</p>
              <button onClick={() => dispatch(setSuccessMessage(""))} className="focus:outline-none">
                <X className="h-5 w-5" />
              </button>
            </motion.div>
          </div>
        )}


        <img
          className="mx-auto h-10 w-auto"
          src="https://applications.federalpolyilaro.edu.ng/Content/Images/school_logo.jpg"
          alt="Your Company"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Welcome to CS Chat
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="firstname" className="block text-sm font-medium leading-6 text-gray-900">
              Firstname
            </label>
            <div className="mt-2">
              <input
                id="firstname"
                name="firstname"
                type="text"
                autoComplete="given-name"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-5"
              />
            </div>
          </div>
          <div>
            <label htmlFor="lastname" className="block text-sm font-medium leading-6 text-gray-900">
              Lastname
            </label>
            <div className="mt-2">
              <input
                id="lastname"
                name="lastname"
                type="text"
                autoComplete="family-name"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-5"
              />
            </div>
          </div>
          <div>
            <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
              Username
            </label>
            <div className="mt-2">
              <input
                id="username"
                name="username"
                type="text"
                autoComplete="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-5"
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-5"
              />
            </div>
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
              Password
            </label>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-5"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign up
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Already have an account?{' '}
          <a href="/login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
