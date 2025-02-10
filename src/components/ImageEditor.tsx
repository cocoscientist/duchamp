import ImageViewer from "./ImageViewer"
import TextBox from "./TextBox"
import { useState } from 'react'
import TextBoxEditor from "./TextBoxEditor"

const ImageEditor = (props:any) => {
    const [content, setContent] = useState<any>([{
        textContent:"",
        size:40,
        color:"#f5f5f5",
        top:8
    },{
        textContent:"",
        size:40,
        color:"#f5f5f5",
        top:238
    }])
    const handleTextChange = (e:any,name:string,index:any) =>{
        const value = e.target.value
        console.log(name)
        const newState = content.map((val:any,i:number)=>{
            if(i!==index) return val
            else{
                val[name] = value
                console.log("Value",val)
                return val
            }
        })
        console.log(newState)
        setContent(newState)
    }
    {/*const [topTextContent, setTopTextContent] = useState<string>("")
    const [bottomTextContent, setBottomTextContent] = useState<string>("")*/}

    return (
        <div>
            <div style={{position:"relative",
            textAlign:"center"
            }}>
                <ImageViewer image={props.image}/>
                {/*
                <TextBox size={40} textContent={topTextContent} color="#ffffff" top={8}/>
                <TextBox size={40} textContent={bottomTextContent} color="#ffffff" top={288}/>*/}
                {content.map((val:any,i:number)=><TextBox key={i} textContent={val.textContent} color={val.color} size={val.size} top={val.top}/>)}
            </div>
            <div>
                {/*<div>Top Text: <input value={topTextContent} onChange={(e)=>{setTopTextContent(e.target.value)}}></input></div>
                <div>Bottom Text: <input value={bottomTextContent} onChange={(e)=>{setBottomTextContent(e.target.value)}}></input></div>*/}
                {content.map((val:any,i:number)=><TextBoxEditor key={i} textContent={val.textContent} color={val.color} size={val.size} top={val.top} index={i} onChangeHandler={handleTextChange}/>)}
            </div>
        </div>
    )
}

export default ImageEditor