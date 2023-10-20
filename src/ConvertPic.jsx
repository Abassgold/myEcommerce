import { useState } from "react";

const ConvertPic = ({file}) => {
    const [preview, setpreview] = useState('')
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () =>{
        setpreview(reader.result)
    }
}

export default ConvertPic;
