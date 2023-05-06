
function logger(reducer) {
    return (prevState, action )=>{
        console.group(action.type);
        console.log('action:',action);
        console.log('prevState:',prevState);
        const nextState = reducer(prevState, action);
        console.log('nextState:',nextState);
        console.groupEnd();
    
        return nextState;
    }
}

export default logger;