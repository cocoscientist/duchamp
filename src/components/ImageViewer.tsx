interface ImageViewerProps {
    image:string;
}

const ImageViewer = (props:ImageViewerProps) => {
    return (
        <img src={props.image}/>
    )
}

export default ImageViewer