interface TextBoxEditorProps {
    textContent:string;
    top:number;
    color:string;
    size:number;
    index:number;
    onChangeHandler:any;
}

const TextBoxEditor = (props:any) => {
    return (
        <div style={{border:"solid #454545"}}>
            TextBox:
            <div>
                <input name="textContent" value={props.textContent} onChange={(e)=>props.onChangeHandler(e,"textContent",props.index)}/>
                <input name="color" type="color" value={props.color} onChange={(e)=>props.onChangeHandler(e,"color",props.index)}/>
                <input name="size" type="number" value={props.size} onChange={(e)=>props.onChangeHandler(e,"size",props.index)}/>
                <input name="top" type="number" value={props.top} onChange={(e)=>props.onChangeHandler(e,"top",props.index)}/>
            </div>
        </div>
    )
}

export default TextBoxEditor