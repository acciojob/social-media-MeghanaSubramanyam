import React, { useState } from 'react';

function CreatePost({ onAddPost }) {
    const [author, setAuthor] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = () => {
        onAddPost({ author, content });
        setAuthor('');
        setContent('');
    };

    return (
        <div>
            <h2>Create Post</h2>
            <select id="postAuthor" value={author} onChange={(e) => setAuthor(e.target.value)}>
                <option value="">Select Author</option>
                <option value="John">John</option>
                <option value="Jane">Jane</option>
            </select>
            <textarea id="postContent" value={content} onChange={(e) => setContent(e.target.value)} />
            <button onClick={handleSubmit}>Add Post</button>
        </div>
    );
}

export default CreatePost;
