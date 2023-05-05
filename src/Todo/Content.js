import { useReducer, useRef } from "react"
import  reducer, { initState } from "./reducer"
import { setJob, addJob, deleteJob } from "./actions"
import logger from './logger'
// 4. dispatch

function Content(){ 

    const [state,dispatch] = useReducer(logger(reducer),initState)

    //lay tu initState
    const {job,jobs} =state

    const handleSubmit = ()=>{
        dispatch(addJob(job))
        dispatch(setJob(''))
        inputRef.current.focus()

    }
    const inputRef = useRef()
    return(
        <div style={{padding:20}}>
            <h3>Todo</h3>
            <input
                value={job}
                ref={inputRef}
                placeholder="Enter todo..."
                onChange={e=>{
                    dispatch(setJob(e.target.value))
                }}   
            />
            <button onClick={handleSubmit} >
                Add
            </button>
            <ul>
                {
                    jobs.map((job , index) =>(
                        <li key ={index}>{job} 
                        <span style={{
                            cursor:"pointer"
                        }}  onClick={()=>dispatch(deleteJob(index))}>
                            &times;
                        </span>
                        </li>
                    ))
                }
            </ul>

        </div>
    )
}

export default Content