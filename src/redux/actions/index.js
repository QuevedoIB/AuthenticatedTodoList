export const addTodo = data => ({
  type: 'ADD_TODO',
  payload: data,
});

export const removeTodo = data => ({
  type: 'REMOVE_TODO',
  payload: data,
});

export const editTodo = data => ({
  type: 'EDIT_TODO',
  payload: data,
});
