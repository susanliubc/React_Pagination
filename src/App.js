import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Posts from './components/Posts';
import Pagination from './components/Pagination';
import './App.css';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(10);
  console.log('width: ', window.innderWidth);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get('http://jsonplaceholder.typicode.com/posts');
      setPosts(res.data);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  console.log(posts);

  //Get current posts
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  //Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);
  return (
    <div className='container'>
      <h1 className='teal-text text-darken-3 center'>My Blog</h1>
      <Posts
        posts={window.innerWidth > 767 ? currentPosts : posts}
        loading={loading}
      />
      {window.innerWidth > 767 ? (
        <Pagination
          postPerPage={postPerPage}
          totalPosts={posts.length}
          paginate={paginate}
        />
      ) : (
        ''
      )}
    </div>
  );
};

export default App;
