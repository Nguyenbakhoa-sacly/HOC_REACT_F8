import { useReducer } from "react"


function Content(){ 

    return(
        <div style={{padding:20}}>
            <h3>Todo</h3>
            <input
                placeholder="Enter todo..."
            />
            <button  >
                Add
            </button>
            <ul>
                <li>Rau bat &times;</li>
                <li>Quet nha &times;</li>
                <li>Lau nha &times;</li>
            </ul>

        </div>
    )
}

export default Content