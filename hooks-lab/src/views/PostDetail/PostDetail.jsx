import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDetail } from '../../services/PostService';

const PostDetail = () => {
  const { id } = useParams()

  const [detail, setDetail] = useState(null)
  const [loading, setLoading] = useState(true)

  // const fetchPost = useCallback((id) => {
  //   getDetail(id)
  // }, [])

  useEffect(() => {
    console.log('slay')
    getDetail(id)
      .then(response => {
        setDetail(response)
        setLoading(false)
      })
      .catch(() => {console.log('slay')})
  }, [id])

  return (
    <div className='PostDetail'>
      {console.log(id)}
      {!loading && <p>Loading...</p>}
      {loading && <div className="card-body">
        <h5 className="card-title">{detail.title}</h5>
        <p className="card-text">{detail.body}</p>
        {detail.comments.map(comment => {
          return <p>{comment}</p>
        })}
      </div>}
    </div>
  );
};

export default PostDetail;