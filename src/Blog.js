import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {marked} from 'marked'; // A library to convert markdown to HTML

function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      // Example: Fetching post file names from an API or static list
      const postFiles = ['first_post.md', 'another_post.md']; // Add your post file names here
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

