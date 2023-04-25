import { useEffect,useState,useRef } from "react"

//useRef
    /**
     * 
     * 
     */
function Content(){
    const [count, setCount] = useState(60)
    
    const timeId = useRef()
    const prevCount = useRef()

    useEffect (()=>{
        prevCount.current = count
    },[count])
    
    const handleStart = ()=>{
        timeId.current= setInterval(()=>{
            setCount(prevCount => prevCount -1)
        },1000)
    }

    const handleStop = () =>{
        clearInterval(timeId.current)
    }

    return(
        <div style={{padding:20}}>
            <h1>{count}</h1>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
        </div>
    )
}

export default Content