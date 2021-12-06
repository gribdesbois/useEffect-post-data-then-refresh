import React, { useState } from 'react'
import { useEffect } from 'react'

export default function Posts() {
  const [posts, setPosts] = useState([])
  const baseUrl = 'https://jsonplaceholder.typicode.com/posts/'

  const getPosts = async () => {
    try {
      const userPosts = await axios.get(baseUrl)
      setPosts(userPosts.data)
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    getPosts()
    
  }, [])

  /* Hook to add post name through API */
  const [newPost, setNewPost] = useState({postName: ''})

  const handleChange = (event) => {
    setNewPost({ ...newPost, [event.target.name] : event.target.value})
  }


  return (
    <div>
      
    </div>
  )
}
