import React, { useState, useEffect } from 'react';
import useInfiniteScroll from './useInfiniteScroll';
import axios from 'axios';

const Posts = ({ posts, loading, width }) => {
  const [currentPosts, setCurrentPosts] = useState([]);
  console.log('currentPosts: ', currentPosts);
  console.log('posts: ', posts);
  console.log('width: ', width);

  useEffect(() => {
    setCurrentPosts(posts);
  }, [posts]);

  const fetchMorePosts = () => {
    axios
      .get('http://jsonplaceholder.typicode.com/posts')
      .then(res => {
        console.log('before setting');
        setCurrentPosts(prevPosts => [...prevPosts, ...res.data]);
        setFetching(false);
        console.log('after setting');
      })
      .catch(err => console.log('Fetch error: ', err));
  };

  const [fetching, setFetching] = useInfiniteScroll(fetchMorePosts);
  console.log('Pre fetching: ', fetching);

  if (loading) return <h2>Loading...</h2>;
  return (
    <ul className='collection'>
      {width > 767
        ? posts.map(post => (
            <li key={post.id} className='collection-item flow-text indigo-text'>
              {post.title}
            </li>
          ))
        : currentPosts.map((currentPost, index) => (
            <li key={index} className='collection-item flow-text indigo-text'>
              {currentPost.title}
            </li>
          ))}
    </ul>
  );
};

export default Posts;
