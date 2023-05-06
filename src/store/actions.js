import { SET_TODO_INPUT, ADD_TODO_INPUT,DELETE_TODO_INPUT,  } from './contants'

export const setTodoInput = payload => ({
    type: SET_TODO_INPUT,
    payload

});
export const addTodo = payload => ({
    type: ADD_TODO_INPUT,
    payload

});
export const deleteTodo = payload => ({
    type: DELETE_TODO_INPUT,
    payload

});
