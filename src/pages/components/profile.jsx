import React from 'react'
import { useSelector } from 'react-redux'
export const Profile = () => {
    const userInfo = useSelector((state) => state.user.userInfo)

    return (
        <div className='md:w-1/4 hidden sm-flex md:flex flex-col h-1/2 bg-white  rounded-md  px-8 mt-5 py-7 items-center gap-1 ' >
            <img src="/image/man.jpg" alt="" className='w-20 rounded-full min-h-20 object-cover ' />
            <span className='text-neutral-500 text-sm'>{userInfo.firstname}</span>
            <span>{userInfo.Lastname}</span>
            <hr className='bg-neutral-700 w-full'/>
            <p className='text-neutral-500 text-sm'>{userInfo.username}</p>
            <hr className='bg-neutral-700 w-full'/>
            <p className='text-neutral-500 text-sm'>{userInfo.email}</p>
            <hr className='bg-neutral-700 w-full' />
            <p className='text-neutral-500 text-sm'>{userInfo.firstname}</p>
            <hr className='bg-neutral-700 w-full' />

        </div>
    )
}
