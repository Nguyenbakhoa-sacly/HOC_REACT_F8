
function logger(reducer){

    return(prevstate,action) => {
        console.group(action.type);
        console.log('prevstate:',prevstate);
        console.log('action:',action);

        const newState= reducer(prevstate,action)
        console.log('next State:',newState);
        console.groupEnd()
        return newState
    }
}   

export default logger