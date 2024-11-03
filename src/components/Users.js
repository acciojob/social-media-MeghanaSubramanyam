import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Users() {
    const users = ['John', 'Jane'];
    return (
        <div>
            <h2>Users</h2>
            {users.map((user, index) => (
                <div key={index}>
                    <Link to={`/users/${user}`}>{user}</Link>
                </div>
            ))}
        </div>
    );
}

export default Users;
