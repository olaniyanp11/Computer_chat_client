import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { Send } from 'lucide-react'
import { setSuccessMessage } from '../../../redux/userstate'
import { useDispatch } from 'react-redux'
import Loading from './Loading'

export const UserPosts = () => {
    const userInfo = useSelector((state) => state.user.userInfo)
    const AccessToken = useSelector((state) => state.user.AccessToken)
    const [post, setPost] = useState('')
    const [load, setLoad] = useState(false)
    const base_url = import.meta.env.VITE_API_BASE_URL
    const url = base_url + '/post/create'
    console.log(url);
    const dispatch = useDispatch()
    const createPost = async (e) => {
        e.preventDefault()
        try {
            console.log("ok");
            setLoad(true)
            setTimeout(() => {
            }, [5000])
            const username = userInfo.username

            if (post === '') {
                setLoad(false)
                return "error creating post"
            }
            console.log(username + ' ' + post);
            const response = await axios.post(url, { username: username, post: post }, {
                headers: {
                    'AccessToken': AccessToken
                }
            })

            console.log("ok");
            dispatch(setSuccessMessage('post created successfully'))
            setPost("")
            setLoad(false)
            console.log(response);
        } catch (error) {
            console.log(error.message);
        }
    }
    return (
        <div className='flex w-full md:w-2/5 sm:w-1/2 flex-col bg-white  rounded-md  px-8 mt-5 py-7 items-left gap-1 ' >
            <div className='w-full bg-white flex justify-between relative items-center gap-4 py-5'>
                <img src="/image/man.jpg" className="w-[30px]  rounded-xl h-[30px] object-cover" alt="" srcset="" />
                <input type="text" name="post" className='w-full text-neutral-500 p-2 px-4 border outline-blue-300 border-neutral-300 rounded-[30px] ' value={post} onChange={(e) => { setPost(e.target.value) }} placeholder='Write a post' id="" />
                <div className='absolute right-5 cursor-pointer'>
                    {load ? <Loading /> : <Send className='text-blue-500  ' onClick={createPost} />
                    }
                </div>
            </div>
            <div>
                <img src="/image/man.jpg" alt="" className='w-full rounded-md min-h-20 object-cover ' />
                <h3 className='text-neutral-700 text-md'>Discovering Omen</h3>
                <article className='text-neutral-500 text-xs'>
                    Omen is a mysterious and enigmatic character in Valorant. With his abilities revolving around deception and misdirection, he can manipulate the battlefield to gain a strategic advantage. From his haunting voice lines to his unsettling presence, Omen keeps both allies and enemies on their toes. Dive into the shadows and uncover the secrets of this elusive agent
                </article>
                <div className='flex w-full justify-between'>
                    <a href="http://" className='p-2 bg-green-500 w-1/4 text-center text-white rounded-md '>Edit </a>
                    <a href="http://" className='p-2 bg-red-500 w-1/4 text-center text-white rounded-md '>Delete </a>
                </div>
            </div>
            <hr className='bg-neutral-700 w-full my-5' />
            <div>
                <img src="/image/man.jpg" alt="" className='w-full rounded-md min-h-20 object-cover ' />
                <h3 className='text-neutral-700 text-md'>Discovering Omen</h3>
                <article className='text-neutral-500 text-xs'>
                    Omen is a mysterious and enigmatic character in Valorant. With his abilities revolving around deception and misdirection, he can manipulate the battlefield to gain a strategic advantage. From his haunting voice lines to his unsettling presence, Omen keeps both allies and enemies on their toes. Dive into the shadows and uncover the secrets of this elusive agent
                </article>
                <div className='flex w-full justify-between'>
                    <a href="http://" className='p-2 bg-green-500 w-1/4 text-center text-white rounded-md '>Edit </a>
                    <a href="http://" className='p-2 bg-red-500 w-1/4 text-center text-white rounded-md '>Delete </a>
                </div>
            </div>

        </div>
    )
}
