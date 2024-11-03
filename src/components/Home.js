import React, { useState } from 'react';

function Home() {
    const [posts, setPosts] = useState([
        { id: 1, author: 'John', content: 'Hello world!', reactions: 0 },
        { id: 2, author: 'Jane', content: 'React is awesome!', reactions: 0 },
    ]);

    const addReaction = (id) => {
        setPosts(posts.map(post => post.id === id ? { ...post, reactions: post.reactions + 1 } : post));
    };

    return (
        <div>
            <h2>Home</h2>
            <div className="posts-list">
                {posts.map(post => (
                    <div key={post.id} className="post">
                        <h3>{post.author}</h3>
                        <p>{post.content}</p>
                        <button onClick={() => addReaction(post.id)}>React</button>
                        <span>Reactions: {post.reactions}</span>
                        <Link to={`/posts/${post.id}`}>View Post</Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;
