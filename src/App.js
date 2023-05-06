import{useStore, actions} from './store';
import { useRef,useState } from 'react';
function App() {
  const [state,dispatch] = useStore()
  const {todo,todoInput} = state

  const handleAdd = ()=>{
    dispatch(actions.addTodo(todoInput))
    dispatch(actions.setTodoInput(''))
    todoInputRef.current.focus()
  }

  const todoInputRef = useRef()
  return ( 
      <div>
        <input 
        ref={todoInputRef}
          value={todoInput}
          placeholder='Enter todo...'
          onChange={e => {
            dispatch(actions.setTodoInput( e.target.value))
          }}
        />
        <button onClick={handleAdd}>ADD</button>
          <ul>
            {todo.map((todo, index) =>(
              <li key={index}>{todo}
              <span>
                <button onClick={()=>dispatch(actions.deleteTodo(index))}>x</button>
              </span>
              </li>
            ))}
          </ul>
      </div>
    );
}

export default App;
