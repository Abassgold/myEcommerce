import { useState, useEffect } from "react"

 
const Usefetch = (url) => {
    const [Data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
    useEffect(() => {
        const abortController = new AbortController()
        const signal = abortController.signal
        setTimeout(()=>{
            fetch(url, {signal})
            .then((res)=>{
                if(!res.ok){
                    throw Error('could not connect to server')
                }
                return res.json()
            })
            .then((result)=>{
                setData(result)
                setError(null)
                setIsLoading(false)
            })
            .catch(err=>{
                if(err.name === 'AbortError') return console.log('Fetch aborted');
                setError(err.message)
                setData(null)
                setIsLoading(false)
            })
        }, 3000);
        return () => abortController.abort()
    }, [url])
return {Data, isLoading, error} 
}

export default Usefetch;