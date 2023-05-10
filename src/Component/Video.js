import video from '../videos/video-1.mp4'
import { forwardRef, useImperativeHandle, useRef } from 'react';//chuyen tiep ref
function Video(props,ref) {
  const videoRef = useRef()

  useImperativeHandle(ref, () => ({
    play1() {
      videoRef.current.play()
    },
    pause1() {
      videoRef.current.pause()
    }
  }))
  return ( 
      <div>
            <video 
              ref={videoRef}
              width={280} 
              src={video} 
            />
      </div>
    );
}

export default forwardRef(Video);