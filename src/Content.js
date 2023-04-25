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

//dùng để list ra để chọn nội dung bài học
const lessons=[
    {
        id:1,
        name:'noi dung bai 1'
    },
    {
        id:2,
        name:'noi dung bai 2'
    },
    {
        id:3,
        name:'noi dung bai 3'
    }
]
function Content(){ 

    const [lessonId, setLessonId] = useState(1)

    useEffect(()=>{

        //log ra comment của bài học
        const hanldeComment = ({detail})=>{
            console.log(detail);
        }

        //lây nội dùng fake comment từ file index.js
        window.addEventListener(`lesson -${lessonId}`,hanldeComment)

        return ()=>{
        //Đóng nội dùng fake comment từ file index.js
        window.removeEventListener(`lesson -${lessonId}`,hanldeComment)

        }
    },[lessonId])
    
    return(
        <div>
            <ul>
                {
                    //lay các bài học từ arr
                lessons.map((lesson)=>(
                    <li
                        key={lesson.id} 
                        style={
                            {   
                                /**nếu id của lessonid bằng lesson.id thi noi dung
                                bai học mau do, con ko thì màu đen*/
                                color:lessonId === lesson.id ?
                                'red': '#333'
                            }
                        }
                        /**click vao roi gan id lay duocj cho
                        setLessonid treen leen cho lessonis*/
                        onClick={()=> setLessonId(lesson.id)}
                    >
                        {lesson.name}
                    </li>
                ))
                }
            </ul>
        </div>
    )
}

export default Content