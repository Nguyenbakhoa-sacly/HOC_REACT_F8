import { useReducer } from "react"

/**
 * useState
 * 1. Init state: 0
 * 2. Action: Up (state + 1), down (state - 1)

 * useReducer 
 * 1. Init state: 0
 * 2. Action: Up (state + 1), down (state - 1)
 * 3. Reducer
 * 4. Dispatch
 * 
 */
//gia tri khoi tao
const initState = 0
//hang dong 
const DOW_ACTION ='dow'
const UP_ACTION = 'up'

const reducer = (state,action)=>{
    //state nhan gia tri khoi tao
    // action nhan hanh dong dow, up
    switch(action){
        //lua chon hanh dong
        case UP_ACTION:
            return state + 1
            //gia tri khoi tao la gì thi return ra la loại đó
        case DOW_ACTION:
            return state - 1
        default:
            throw new Error('loi roi')
    }
}


function Content(){ 
    const [count , dispatch] = useReducer(reducer,initState)
/**
 * reducer nhan vao 2 tham so 
 * 1. la ham
 * 2. la gia tri khoi tao
 */
    return(
        <div style={{padding:20}}>
            <h2>{count}</h2>
            <button onClick={()=> dispatch(UP_ACTION)}>Up</button>
            <button onClick={()=> dispatch(DOW_ACTION)}>Down</button>
        </div>
    )
}

export default Content