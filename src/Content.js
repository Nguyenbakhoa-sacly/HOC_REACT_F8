import { useEffect,useState,useRef,memo, useCallback } from "react"
import Content2 from './Content2'
/**
 * dung usecallback component cuar minh cos dung memo
 */

function Content(){
    const [count, setCount] = useState(0)
    
    const handleincrease = useCallback(()=>{
        setCount(prevCount => prevCount + 1)
    },[])
    return(
        <div style={{padding:20}}>
            <Content2 onIncrease={handleincrease} />
            <h1>{count}</h1>
        </div>
    )
}

export default Content