import React, { useState } from 'react'
import './login.css'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { setSuccessMessage, setUserInfo, setloginstatus, setAccessToken } from '../../../redux/userstate'
import { X } from 'lucide-react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'


export const Login = () => {
    const successMessage = useSelector((state) => state.user.successMessage);
    const accesstoken = useSelector((state) => state.user.accesstoken);
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const isLoggedIn = useSelector((state) => state.isLoggedIn)
    const dispatch = useDispatch()
    const apiBaseUrl =  'https://computer-chat-api.onrender.com';

    const handlelogin = async (e) => {
        e.preventDefault()
        try {
            if (!email) {
                return setError("email field is required")
            }
            else if (!password) {
                return setError("email field is required")
            }
            const url = apiBaseUrl + '/login';
            console.log(url);
            const response = await axios.post(url, { email, password })
            console.log(response);
            if (response.data.message) {
                dispatch(setSuccessMessage("User logged in successfully"))
                dispatch(setloginstatus())
                dispatch(setUserInfo(response.data.user))
                dispatch(setAccessToken(response.data.AccessToken))
                window.localStorage.setItem('token', response.data.token)
            }
            else {
                return setError("Login failed. Please check your credentials.")
            }
        } catch (error) {
            setError(error.response.data.message);
        }
    }

    return (
        <>
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
                        Sign in to your account
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" onSubmit={handlelogin}>
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
                                    required
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                    className="block px-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                    Password
                                </label>
                                <div className="text-sm">
                                    <Link to="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                        Forgot password?
                                    </Link>
                                </div>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    onChange={(e) => setPassword(e.target.value)}
                                    value={password}
                                    className="block px-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Sign in
                            </button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        Not a member?{' '}
                        <Link to="/signup" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                            signup now
                        </Link>
                    </p>
                </div>
            </div>
        </>
    )
}
