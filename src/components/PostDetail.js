import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

function PostDetail({ posts, onUpdatePost }) {
    const { id } = useParams();
    const post = posts.find(p => p.id === parseInt(id));
    const [content, setContent] = useState(post.content);

    const handleEdit = () => {
        onUpdatePost(post.id, content);
    };

    return (
        <div className="post">
            <h3 id="postTitle">{post.author}</h3>
            <textarea id="postContent" value={content} onChange={(e) => setContent(e.target.value)} />
            <button className="button" onClick={handleEdit}>Edit Post</button>
        </div>
    );
}

export default PostDetail;
