import { useReducer, useRef } from "react"

// 1. init state: gia tri khoi tao
const initState ={
    job:'',//input 
    jobs:[] // ul
}

// 2. action: hanh dong
const SET_JOB = 'set_job'//dung de set lai job:''
const ADD_JOB ='add_job' //button add
const DELETE_JOB = 'delete_job' //button delete

const setJob = payload =>{
    return {
        type: SET_JOB,
        payload
    }
}

const addJob = payload =>{
    return {
        type: ADD_JOB,
        payload
    }
}
const deleteJob= payload =>{
    return {
        type: DELETE_JOB,
        payload
    }
}
// 3. reducer
    // - state: lay gia tri khoi tao
    // - action: lay hang dong
    let newState
const reducer = (state,action )=>{

    switch(action.type){
    case SET_JOB:
        newState = {
            ...state,
            job:action.payload
            
        }
        break
    case ADD_JOB:
        newState={
            //state.jobs la du lieu co truoc
            //action.payload la du lieu moi duoc them vao
            ...state, jobs:[...state.jobs,action.payload]
        }
        break
    case DELETE_JOB:
        // rai vao mang moi, de tranh xoa mang cu
        const newJobs = [...state.jobs]
        newJobs.splice(action.payload,1)
        newState={
            ...state,
            jobs:newJobs
        }
        break
        default:
            throw new Error("loi roi")
    }

    return newState

}
// 4. dispatch

function Content(){ 

    const [state,dispatch] = useReducer(reducer,initState)

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
                        <span onClick={()=>dispatch(deleteJob(index))}>
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