import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
export const AllPosts = () => {
  const base_url = import.meta.env.VITE_API_BASE_URL
  const url = base_url + '/post/get/All/post'
  const dispatch = useDispatch()
  const AccessToken = useSelector((state) => state.user.AccessToken)
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get(url, {
        headers: {
          'AccessToken': AccessToken, // Custom header for access token
          'Content-Type': 'application/json', // Ensure the correct content type
        },
      }
      )
      console.log(response);
    }
    fetchPosts()
  }, [])
  return (
    <div>Post</div>
  )
}
