export const addPost = (post) => ({ type: 'ADD_POST', payload: post });
export const editPost = (id, content) => ({ type: 'EDIT_POST', payload: { id, content } });
export const addReaction = (id) => ({ type: 'ADD_REACTION', payload: { id } });
export const addNotification = (notification) => ({ type: 'ADD_NOTIFICATION', payload: notification });
