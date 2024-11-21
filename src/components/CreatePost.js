import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPost } from '../redux/actions';

const CreatePost = () => {
    const users = useSelector(state => state.users);
    const dispatch = useDispatch();

    const [author, setAuthor] = useState(users[0]);
    const [content, setContent] = useState('');

    const handleSubmit = () => {
        dispatch(addPost({ id: Date.now(), author, content }));
        setContent('');
        alert('Post created successfully!');
    };

    return (
        <div>
            <h2>Create Post</h2>
            <select value={author} onChange={(e) => setAuthor(e.target.value)}>
                {users.map(user => (
                    <option key={user} value={user}>{user}</option>
                ))}
            </select>
            <textarea value={content} onChange={(e) => setContent(e.target.value)} />
            <button onClick={handleSubmit}>Add Post</button>
        </div>
    );
};

export default CreatePost;
