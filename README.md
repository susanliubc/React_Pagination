# React_Pagination

Pagination using React hooks and axios

Infinite Scroll Branch will only display the posts without any paginations by using customerized hook useInfiniteScroll.

Suitable for mobile application.

The key issue of inifinite scroll is to detect the bottom of the page. The condition is that document.documentElement.clientHeight + document.documentElement.scrollTop === document.documentElement.scrollHeight. It took me some time to figure out this condition, but turned out to be worthy.

One of the bug is that data only reloaded once after the first reaching to the bottom of page. Through logging scrollTop value in the handelScroll function, I realized that the scrollTop is a float rather an integer, which becomes less every time. So I use Math.ceil method to wrap the document.documentElement.scrollTop to achieve the infinite scrolling finally.
