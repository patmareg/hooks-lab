import React from 'react';
import { Link } from 'react-router-dom';

const Post = ({ post }) => {
  return (
    <div className='Post'>
      <div className="card" style={{width: "18rem"}}>
        <div className="card-body">
          <h5 className="card-title">{post.title}</h5>
          <p className="card-text">{post.body}</p>
          <Link to={`/posts/${post.id}`}>
            <p className="btn btn-primary">Go to detail</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Post;