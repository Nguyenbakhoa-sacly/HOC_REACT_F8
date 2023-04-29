import { useState,useMemo,useRef } from "react"
// import Content2 from './Content2'
/**
 *  useMeno dung để tránh thực hiện lại 1 đoạn logic ko cần thiết
 */

function Content(){

    const [name,setName] = useState('')
    const [price,setPrice] = useState('')
    const [product,setProduct] =useState([])

    const nameref = useRef()

    const handleSubmit = () =>{
        setProduct([...product,{
            name,
            price: +price
        }])
        
        setName('')
        setPrice('')
        nameref.current.focus()
    }

    // tinh tong down hang
    const total = useMemo(()=>{
        const result= product.reduce((result,prod) =>{
            console.log("Tính toán lại...")
            return result + prod.price
        },0)
        return result
    },[product])

    // const total = product.reduce((result,prod)=>{
    //     console.log("Tính toán lại...");
    //     return result + prod.price
    // },0)

    return(
        <div style={{padding:20}}>
            <input 
                ref={nameref}
                value={name}
                placeholder="Enter name..."
                onChange={e =>setName(e.target.value) }
            />
            <br />
            <input 
                value={price}
                placeholder="Enter price..."
                onChange={e => setPrice(e.target.value)}
            />
            <br />
            <button onClick={handleSubmit}>
                Add
            </button>
            <br />
            Total:{total}
            <ul>{ product.map((product,index)=>{
                    return(
                        <li key={index}>
                            {product.name} -{product.price}
                        </li>
                    )})
                }
            </ul>
        </div>
    )
}

export default Content