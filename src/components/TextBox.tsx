interface TextBoxProps {
    textContent:string;
    size:number;
    color:string;
    top:number;
}

const TextBox = (props:TextBoxProps) => {
    return (
        <div style={{
            color:props.color,
            fontSize:props.size+"px",
            position:"absolute",
            textAlign:"center",
            marginLeft:"45%",
            top:props.top+"px"
        }}>{props.textContent}</div>
    )
}

export default TextBox