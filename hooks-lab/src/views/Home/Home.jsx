import React, { useCallback, useEffect, useState } from 'react';
import Post from '../../components/Post/Post';
import { getPosts } from '../../services/PostService';
import './Home.css'

const Home = () => {
  const [posts, setPosts] = useState([])

  const fetchPosts = useCallback(() => {
    getPosts()
      .then(response => {
        setPosts(response)
      })
  }, [])

  useEffect(() => {
    fetchPosts()
  }, [fetchPosts])

  return (
    <div className='Home'>
      {posts.map(post => {
        return <div key={post.id}>
          <Post post={post} />
        </div>
      })}
    </div>
  );
};

export default Home;