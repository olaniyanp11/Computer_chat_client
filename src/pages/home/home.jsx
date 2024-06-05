import React from 'react'
import { setSuccessMessage } from '../../../redux/userstate'
import { useSelector } from 'react-redux'
import { motion } from 'framer-motion'
import { X } from 'lucide-react'
import { useDispatch } from 'react-redux'


export const Home = () => {
  const successMessage = useSelector((state) => state.user.successMessage)
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn)
  const dispatch = useDispatch()

  
  return (
    <div>

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
      {isLoggedIn}
    </div>
  )
}
