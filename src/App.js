import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Home from './components/Home';
import Users from './components/Users';
import Notifications from './components/Notifications';
import CreatePost from './components/CreatePost';

function App() {
    const [tab, setTab] = React.useState('home');

    return (
        <Provider store={store}>
            <nav>
                <button onClick={() => setTab('home')}>Home</button>
                <button onClick={() => setTab('users')}>Users</button>
                <button onClick={() => setTab('notifications')}>Notifications</button>
                <button onClick={() => setTab('createPost')}>Create Post</button>
            </nav>
            {tab === 'home' && <Home />}
            {tab === 'users' && <Users />}
            {tab === 'notifications' && <Notifications />}
            {tab === 'createPost' && <CreatePost />}
        </Provider>
    );
}

export default App;


