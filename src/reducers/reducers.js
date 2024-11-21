import { combineReducers } from 'redux';

const initialState = {
    posts: [],
    users: ["Alice", "Bob", "Charlie"],
    notifications: []
};

function postsReducer(state = initialState.posts, action) {
    switch (action.type) {
        case 'ADD_POST':
            return [...state, action.payload];
        case 'EDIT_POST':
            return state.map(post =>
                post.id === action.payload.id ? { ...post, content: action.payload.content } : post
            );
        case 'ADD_REACTION':
            return state.map(post =>
                post.id === action.payload.id ? { ...post, reactions: (post.reactions || 0) + 1 } : post
            );
        default:
            return state;
    }
}

function usersReducer(state = initialState.users, action) {
    return state; // No actions defined for users yet
}

function notificationsReducer(state = initialState.notifications, action) {
    switch (action.type) {
        case 'ADD_NOTIFICATION':
            return [...state, action.payload];
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    posts: postsReducer,
    users: usersReducer,
    notifications: notificationsReducer
});

export default rootReducer;
