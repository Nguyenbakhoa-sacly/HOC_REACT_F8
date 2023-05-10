import Video from './Component/Video';
import { useImperativeHandle,useEffect, useRef } from 'react';

function App() {
  const videoRef = useRef();
  // useEffect(()=>{
  //   console.log(videoRef);
  // })
  const handlePlay= ()=>{

    videoRef.current.play1();
  }
  const handlePause= ()=>{
    videoRef.current.pause1();
  }

  return ( 
      <div>
          <Video  ref={videoRef}/>
          <button onClick={handlePlay}> Play</button>
          <button onClick={handlePause}>Pause</button>
      </div>
    );
}

export default App;
