import { useQuery } from 'react-query';
import { useState } from 'react';

const fetchPosts = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  return res.json();
};

const PostsComponent = () => {
  const [show, setShow] = useState(true);

  const { data, isLoading, isError, error, refetch, isFetching } = useQuery('posts', fetchPosts, {
    cacheTime: 300000,        // 5 minutes (in milliseconds)
    staleTime: 60000,         // 1 minute (in milliseconds)
    refetchOnWindowFocus: false,
    keepPreviousData: true
  });

  if (isLoading) return <div>Loading posts...</div>;
  
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div>
      <div>
        <h2>Posts: {data?.length}</h2>
        <button onClick={() => refetch()} disabled={isFetching}>
          {isFetching ? 'Refetching...' : 'Refetch'}
        </button>
        <button onClick={() => setShow(!show)}>
          {show ? 'Hide' : 'Show'}
        </button>
      </div>

      {show && (
        <ul>
          {data?.slice(0, 5).map(post => (
            <li key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PostsComponent;