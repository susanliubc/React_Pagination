import React, { useState } from 'react';
import useInfiniteScroll from './useInfiniteScroll';
import axios from 'axios';

const Posts = ({ posts, loading }) => {
  const [currentPosts, setCurrentPosts] = useState([]);

  const fetchMorePosts = () => {
    axios
      .get('http://jsonplaceholder.typicode.com/posts')
      .then(res => {
        setCurrentPosts([...posts, ...res.data]);
        // setFetching(false);
      })
      .catch(err => console.log('Fetch error: ', err));
  };

  const [fetching, setFetching] = useInfiniteScroll(fetchMorePosts);

  if (loading) return <h2>Loading...</h2>;
  return (
    <ul className='collection'>
      {posts.map(post => (
        <li key={post.id} className='collection-item flow-text indigo-text'>
          {post.title}
        </li>
      ))}
    </ul>
  );
};

export default Posts;
