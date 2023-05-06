import { SET_TODO_INPUT, ADD_TODO_INPUT, DELETE_TODO_INPUT } from "./contants"

const initState = {
    todo:[],
    todoInput:''
}

function reducer (state, action) {
    switch (action.type) {
        case SET_TODO_INPUT:
            return {
                ...state,
                todoInput: action.payload
            }
            case ADD_TODO_INPUT:
                return {
                    ...state,
                    todo: [...state.todo, action.payload]
                }
            case DELETE_TODO_INPUT:{
                const newState = [...state.todo]
                newState.splice(Number(action.payload), 1)
                return{
                    ...state,
                    todo: newState
                }}
            
        default:
            throw new Error('loi roi')
    }
}
export {initState} 
export default reducer