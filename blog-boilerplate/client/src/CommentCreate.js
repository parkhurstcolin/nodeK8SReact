import React, { useState } from "react";
import axios from "axios";

const CommentCreate = ({ postId }) => {
  const [content, setContent] = useState("");

  async function onSubmit(event) {
    event.preventDefault();

    await axios.post(`https://posts.com/posts/${postId}/comments`, {
      content,
    });

    setContent("");
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>New Comment</label>
          <input
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="form-control"
          />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default CommentCreate;
