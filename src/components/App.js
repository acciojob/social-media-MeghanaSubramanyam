import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Users from './Users';
import Notifications from './Notifications';
import CreatePost from './CreatePost';
import PostDetail from './PostDetail';

function App() {
    return (
        <Router>
            <div className="app">
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/users">Users</Link>
                    <Link to="/notifications">Notifications</Link>
                    <Link to="/create">Create Post</Link>
                </nav>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/users" element={<Users />} />
                    <Route path="/notifications" element={<Notifications />} />
                    <Route path="/create" element={<CreatePost />} />
                    <Route path="/posts/:id" element={<PostDetail />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;

