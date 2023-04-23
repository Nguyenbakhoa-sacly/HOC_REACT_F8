import { useEffect,useState } from "react"

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

function Content(){ 

    const [avatar, setAvatar] = useState()

    useEffect(()=>{

        return ()=>{
            avatar && URL.revokeObjectURL(avatar.preview)
        }
    },[avatar])

    const hanldePreviewAvatar=(e)=>{
        const file = e.target.files[0]

        file.preview = URL.createObjectURL(file)
        
        //set lai
        setAvatar(file)
    }
    return(
        <div>
            <input 
            type="file"
            onChange={hanldePreviewAvatar}
            />  
            {avatar && (
                <img 
                    src={avatar.preview}

                    alt=""
                    style={{
                        width:200,
                        height:200,
                        
                    }}
                />
            )}
        </div>
    )
}

export default Content