import { useState, useEffect } from "react"

 
const Usefetch = (url) => {
    const [Data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
    useEffect(() => {
        setTimeout(()=>{
            fetch(url)
            .then((res)=>{
                if(!res){
                    throw Error('could not connect to server')
                }
                return res.json()
            })
            .then((result)=>{
                setData(result)
            })
        }, 1000)
    }, [url])
return {Data, isLoading, error} 
}

export default Usefetch