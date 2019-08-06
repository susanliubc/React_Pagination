import React from 'react';

const Posts = ({ posts, loading }) => {
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
