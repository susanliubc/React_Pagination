import React, { useState, useEffect } from 'react';

const useInfiniteScroll = callback => {
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!fetching) return;
    callback(() => console.log('Called back'));
  }, [fetching]);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop >
      document.documentElement.offsetHeight
    )
      return;
    setFetching(true);
  };

  return [fetching, setFetching];
};

export default useInfiniteScroll;
