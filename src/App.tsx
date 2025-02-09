import { useState } from 'react'
import ImageViewer from './components/ImageViewer';

function App() {
  const [image, setImage] = useState(undefined)

  const handleUpload = (e:any) =>{
    e.preventDefault();
    console.log(e.target.files)
    setImage(e.target.files[0])
  }

  return (
    <>
      <h1>Upload Image</h1>
      <input type = 'file' onChange={handleUpload}></input>
      {image!==undefined?<ImageViewer image={URL.createObjectURL(image)}/>:<></>}
    </>
  )
}

export default App
