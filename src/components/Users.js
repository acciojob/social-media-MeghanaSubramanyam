import React from 'react';
import { useSelector } from 'react-redux';

const Users = () => {
    const users = useSelector(state => state.users);
    const posts = useSelector(state => state.posts);

    const [selectedUser, setSelectedUser] = React.useState(null);

    return (
        <div>
            <h2>Users</h2>
            <ul>
                {users.map(user => (
                    <li key={user} onClick={() => setSelectedUser(user)}>
                        {user}
                    </li>
                ))}
            </ul>
            {selectedUser && (
                <div>
                    <h3>Posts by {selectedUser}</h3>
                    {posts.filter(post => post.author === selectedUser).map(post => (
                        <div key={post.id}>
                            {post.content}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Users;

