import React, { useState, useEffect } from 'react';
import {marked} from 'marked'; // A library to convert markdown to HTML
import './App.css';


function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      // Example: Fetching post file names from an API or static list
      const postFiles = ['first_post.md']; // Add your post file names here
      const postsData = await Promise.all(postFiles.map(async file => {
        const response = await fetch(`/posts/${file}`);
        const text = await response.text();

        // Extracting the title (assuming it's the first line and an H1)
        const titleLine = text.split('\n')[0];
        const title = titleLine.replace(/^# /, ''); // Remove '# ' from the start

        // Optionally, remove the title line from the content
        const contentWithoutTitle = text.substring(text.indexOf('\n') + 1);

        return {
          slug: file.replace('.md', ''),
          title: title,
          content: marked(contentWithoutTitle) // Convert markdown content to HTML
        };
      }));

      setPosts(postsData);
    };

    fetchPosts();
  }, []);


  return (
    <div className="home-background">
      <h1>Welcome to my Blog!</h1>
      <div className="blog-header"> {/* Corrected classname to className */}
        <h3>This is where I give updates on my projects and work.</h3>
      </div>
      <ol>
        {posts.map(post => (
          <li key={post.slug}>
            <button onClick={() => window.location.href = `/post/${post.slug}`}>
              {post.title}
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Blog;

