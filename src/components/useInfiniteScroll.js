import React, { useState, useEffect } from 'react';

const useInfiniteScroll = callback => {
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!fetching) return;
    callback(() => console.log('Called back'));
  }, [fetching]);

  const handleScroll = () => {
    if (
      document.documentElement.clientHeight +
        Math.ceil(document.documentElement.scrollTop) ===
      document.documentElement.scrollHeight
    ) {
      setFetching(true);
    }
  };

  return [fetching, setFetching];
};

export default useInfiniteScroll;
