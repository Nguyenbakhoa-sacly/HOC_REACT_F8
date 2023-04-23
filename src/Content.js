import { useEffect,useState } from "react"

//1. useEffect (callback)
// - gọi callback mõi khi component re-render
// - gọi callback sau khi componrnt them element vao DOM
//2. useEffect (callback,[])
// - Chỉ gọi callback 1 lần sau khi component mouunted
//3. useEffect (callback,[deps])
// - callback sẽ được gọi lại mỗi khi deps thay đổi

//callback luon duojc goi sau khi component mounted

// element cua button


function Content(){
    const [countdown, setCountdow] = useState(180)
    console.log(countdown);
    useEffect(()=>{
        const time = setInterval (()=>{
                setCountdow(prevState => prevState - 1)
            },1000)
            
            return()=>clearInterval(time)
    },[])

    return(
        <div>
            <h1>{countdown}</h1>
        </div>
    )
}

export default Content