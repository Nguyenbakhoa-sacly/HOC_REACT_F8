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
const tabs= ['posts','comments','albums']

function Content(){
    //state cua input
    const [title,setTitle] = useState('')
    // state cua API
    const [posts, setPosts] = useState([])
    // state button
    const [type,setType] = useState('posts')

    const [goToTop, setGoToTop] = useState(false)

    useEffect( ()=>{
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
        
            .then(res => res.json())
            .then(posts =>{
                setPosts(posts)
        })
    },[type])

    useEffect( ()=>{
        const hanldeScroll = ()=>{

            if(window.scrollY >= 200){
                setGoToTop(true)
            }else{
                setGoToTop(false)
            }
        }

        //them su kien cuon o pham vi window
        window.addEventListener('scroll',hanldeScroll)

        //xoa bo su kien cuon o pham vi window
        return ()=>{

            window.removeEventListener('scroll',hanldeScroll)
        }
    },[])

    return(
        <div>
            {tabs.map(tab =>(
                <button
                    key ={tab}
                    style={type === tab ? {
                        color:'#fff',
                        backgroundColor:"#333"
                    }:{}}
                    onClick={e=>setType(tab)}
                >
                    {tab}
                </button>
            ))}

            <input 
            value={title}
            onChange={e => setTitle(e.target.value)}
            />

            <ul>
                {posts.map(post =>(
                    <li key = {post.id}>{post.title || post.name}</li>
                ))}
            </ul>

            {goToTop && (
                <button
                    style={
                        {
                            position:"fixed",
                            right:20,
                            bottom:20
                        }
                    }
                >
                    GO TO TOP
                </button>
            )}
            
        </div>
    )
}

export default Content