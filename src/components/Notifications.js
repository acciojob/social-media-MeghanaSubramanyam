import React, { useState } from 'react';

function Notifications() {
    const [notifications, setNotifications] = useState([]);

    const fetchNotifications = () => {
        setNotifications(['New post by John', 'Jane reacted to your post']);
    };

    return (
        <div>
            <h2>Notifications</h2>
            <button className="button" onClick={fetchNotifications}>Refresh Notifications</button>
            <ul>
                {notifications.map((notification, index) => (
                    <li key={index}>{notification}</li>
                ))}
            </ul>
        </div>
    );
}

export default Notifications;
