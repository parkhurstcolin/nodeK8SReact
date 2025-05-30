import React, { useState, useEffect } from 'react';
import axios from 'axios'
import CommentCreate from "./CommentCreate";
import CommentList from "./CommentList";

const PostList = () => {
    const [posts, setPosts] = useState({});

    async function fetchPosts(){
        const res = await axios.get("https://posts.com/posts");

        setPosts(res.data);
    }

    useEffect(() => {
        fetchPosts();
    }, [])

    const renderedPosts = Object.values(posts).map(post => {
        return (
          <div
            className="card"
            style={{ width: "30%", marginBottom: "20px" }}
            key={post.id}
          >
            <div className="card-body">
              <h3>{post.title}</h3>
              <CommentList postId={post.id} comments={post.comments} />
              <CommentCreate postId={post.id} />
            </div>
          </div>
        );
    });

    return <div className='d-flex flex-row flex-wrap justify-content-between'>
        {renderedPosts}
    </div>
}

export default PostList