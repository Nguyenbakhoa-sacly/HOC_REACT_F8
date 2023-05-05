import {ADD_JOB,DELETE_JOB,SET_JOB} from './contants'

// 1. gia tri khoi oi
export const initState ={
    job:'',//input 
    jobs:[] // ul
}

// 3. reducer
    // - state: lay gia tri khoi tao
    // - action: lay hang dong

const reducer = (state,action )=>{
    switch(action.type){
    case SET_JOB:
        return   {
            //dung de set lai job
            ...state,
            job: action.payload
            
        }
        
    case ADD_JOB:
        return {
            //state.jobs la du lieu co truoc
            //action.payload la du lieu moi duoc them vao
            ...state, jobs:[...state.jobs,action.payload]
        }
    case DELETE_JOB:
        // rai vao mang moi, de tranh xoa mang cu
        const newJobs = [...state.jobs]
        newJobs.splice(action.payload,1)
        return {
            ...state,
            jobs:newJobs
        }
        default:
            throw new Error("loi roi")
    }



}

export default reducer