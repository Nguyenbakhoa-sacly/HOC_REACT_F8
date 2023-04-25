import { useEffect, useState, useLayoutEffect } from "react"

//1. useEffect (callback)
// - gọi callback mõi khi component re-render
// - gọi callback sau khi componrnt them element vao DOM
//2. useEffect (callback,[])
// - Chỉ gọi callback 1 lần sau khi component mouunted
//3. useEffect (callback,[deps])
// - callback sẽ được gọi lại mỗi khi deps thay đổi

//luon luon dung
//1. callback luon duojc goi sau khi component mounted
//2. Cleanup funtion luon duoc goi truoc khi component unmounted
//3. Cleanup funtion luon duoc goi truoc khi callback duoc goi ( trừ lần mounted)

/**useLayoutEffect
 * 1 Cập nhật lại sate
 * 2 Cập nhật lại DOM
 * 3 gọi cleanup nếu deps thay đổi (sync)
 * 4 gọi useLayoutEffect callback (sysnc)
 * 5 Render lại UI
*/
function Content(){
    const [count,setCount] = useState(0)

    useLayoutEffect(()=>{
        if(count > 3)
            setCount(0)
    },[count])

    const hanldeClick = () =>{
        setCount(count + 1 )
    }


    return(
        <div>
            <h1>{count}</h1>
            <button
            onClick={hanldeClick}
            >
                Run
            </button>        
        </div>
    )
}

export default Content