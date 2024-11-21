import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addNotification } from '../redux/actions';

const Notifications = () => {
    const notifications = useSelector(state => state.notifications);
    const dispatch = useDispatch();

    return (
        <div>
            <h2>Notifications</h2>
            <button onClick={() => dispatch(addNotification(`New notification at ${new Date().toLocaleTimeString()}`))}>
                Refresh Notifications
            </button>
            <ul>
                {notifications.map((note, idx) => (
                    <li key={idx}>{note}</li>
                ))}
            </ul>
        </div>
    );
};

export default Notifications;
