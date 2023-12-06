import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {marked} from 'marked'; // A library to convert markdown to HTML

function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch post list from the posts directory
    const fetchPosts = async () => {
      // Example: Fetching post file names from an API or static list
      const postFiles = ['first_post.md', 'another_post.md']; // Add your post file names here
      const postsData = await Promise.all(postFiles.map(async file => {
        const response = await fetch(`/posts/${file}`);
        console.log("Reading File")
        const text = await response.text();
        return {
          slug: file.replace('.md', ''),
          title: marked(text).match(/<h1>(.*?)<\/h1>/)[1], // Extract title from markdown
          content: marked(text)
        };
      }));
      setPosts(postsData);
    };

    fetchPosts();
  }, []);

  return (
    <div className="home-background">
      <h1>This is going to be my Blog</h1>
      <div>
        {posts.map(post => (
          <div key={post.slug}>
            <Link to={`/post/${post.slug}`}>{post.title}</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
