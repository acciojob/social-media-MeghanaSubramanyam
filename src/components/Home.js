import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addReaction, editPost } from '../redux/actions';

const Home = () => {
    const posts = useSelector(state => state.posts);
    const dispatch = useDispatch();

    return (
        <div>
            <h2>Home</h2>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <strong>{post.author}</strong>: {post.content} <br />
                        Reactions: {post.reactions || 0}
                        <button onClick={() => dispatch(addReaction(post.id))}>React</button>
                        <button onClick={() => {
                            const newContent = prompt("Edit post:", post.content);
                            if (newContent) dispatch(editPost(post.id, newContent));
                        }}>Edit</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Home;
