import {memo} from "react";

function Content2 ({onIncrease}){
    console.log('render');
    return(
        <>
            <h2>HELLO ANH EM </h2>
            <button onClick={onIncrease}>Click me!</button>
        </>
    )
} 

export default memo(Content2)