import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './Pages.css';

function BlogPost() {
  const { postId } = useParams();
  const navigate = useNavigate();

  const posts = {
    1: {
      title: "Introduction to React Router",
      content: "React Router is a powerful library for handling navigation in React applications...",
      author: "Jane Smith",
      date: "2024-01-15"
    },
    2: {
      title: "Advanced Routing Patterns",
      content: "Learn about nested routes, protected routes, and dynamic routing in React...",
      author: "John Doe",
      date: "2024-01-20"
    },
    3: {
      title: "State Management in React",
      content: "Explore different state management solutions for React applications...",
      author: "Bob Johnson",
      date: "2024-01-25"
    }
  };

  const post = posts[postId];

  if (!post) {
    return (
      <div className="page-container">
        <h2>Blog Post Not Found</h2>
        <p>The blog post with ID {postId} does not exist.</p>
        <button onClick={() => navigate('/')} className="back-btn">Back to Home</button>
      </div>
    );
  }

  return (
    <div className="page-container">
      <article className="blog-post">
        <h1>{post.title}</h1>
        <div className="post-meta">
          <span>By {post.author}</span>
          <span>Published: {post.date}</span>
        </div>
        <div className="post-content">
          <p>{post.content}</p>
          <p>This is a dynamic route example. The post ID "{postId}" is extracted from the URL.</p>
        </div>
        <button onClick={() => navigate(-1)} className="back-btn">Go Back</button>
      </article>
    </div>
  );
}

export default BlogPost;