import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { marked } from 'marked';

function Post() {
  const { slug } = useParams();
  const [postContent, setPostContent] = useState('');

  console.log("IM IN A POST NOW!!!!")

  useEffect(() => {
    // Fetch the markdown content of the post
    const fetchPostContent = async () => {
      const response = await fetch(`/posts/${slug}.md`);
      const text = await response.text();
      setPostContent(marked(text));
    };

    fetchPostContent();
  }, [slug]);

  return (
    <div className="post-content" dangerouslySetInnerHTML={{ __html: postContent }} />
  );
}

export default Post;
