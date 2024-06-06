import React, { useState } from 'react'
import { Menu } from 'lucide-react'
import { X } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
export const Navbar = () => {
    const [IsOpen, setIsOpen] = useState(true)
    const Toggle = () => {
        setIsOpen(!IsOpen)
        console.log(IsOpen);
    }
    return (
        <>
            <nav className="w-full px-10  h-15 flex justify-between py-3 items-center shadow-md">
                <img src="https://applications.federalpolyilaro.edu.ng/Content/Images/school_logo.jpg" alt="logo" className="w-10 h-10" />
                <div className=" gap-7 justify-center items-center hidden sm:flex">
                    <ul className="flex gap-3 text-neutral-500 ">
                        <li><Link to="#" >Friends</Link></li>
                        <li><Link to="/AllPosts">Posts</Link></li>
                    </ul>
                    <Link to="#" className="text-white bg-gradient-to-r hover:text-blue700 hover:bg-white hover:border-blue-700 from-blue-700 to-blue-500 px-8 rounded-md text-center flex items-center justify-center py-2">Logout</Link>
                </div>
                <Menu className={` text-blue-600 ${IsOpen ? 'flex' : 'hidden'} sm:hidden`} onClick={() => Toggle()} />
                <motion.div
                    animate={{ x: IsOpen ? 500 : 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="fixed gap-7 justify-center z-50  items-center flex sm:hidden right-0 flex-col top-0 bg-gradient-to-tr from-blue-700 to-blue-500 py-[20px] h-screen w-1/2">
                    <X className=' text-white fixed top-6 right-6 sm:hidden flex' onClick={() => Toggle()} />
                    <ul className="flex flex-col gap-3 text-white ">
                        <li> <Link to="#" >Friends</Link> </li>
                        <li><Link to="/AllPosts">Posts</Link></li>
                    </ul>
                    <Link to="#" className="text-blue-700 bg-white hover:text-blue700 hover:bg-white hover:border-neutral-100 px-8 rounded-md text-center flex items-center justify-center py-2">Logout</Link>
                </motion.div>
            </nav>
        </>
    )
}
