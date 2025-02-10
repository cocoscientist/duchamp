import ImageViewer from "./ImageViewer"
import TextBox from "./TextBox"
import { useState } from 'react'

const ImageEditor = (props:any) => {
    const [topTextContent, setTopTextContent] = useState<string>("")
    const [bottomTextContent, setBottomTextContent] = useState<string>("")

    return (
        <div>
            <div style={{position:"relative",
            textAlign:"center"
            }}>
                <ImageViewer image={props.image}/>
                <TextBox size={40} textContent={topTextContent} color="#ffffff" top={8}/>
                <TextBox size={40} textContent={bottomTextContent} color="#ffffff" top={288}/>
            </div>
            <div>
                <div>Top Text: <input value={topTextContent} onChange={(e)=>{setTopTextContent(e.target.value)}}></input></div>
                <div>Bottom Text: <input value={bottomTextContent} onChange={(e)=>{setBottomTextContent(e.target.value)}}></input></div>
            </div>
        </div>
    )
}

export default ImageEditor