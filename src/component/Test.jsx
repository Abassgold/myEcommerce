import React from 'react'
import Usefetch from '../CostumHooks/Usefetch'
const Test = () => {
    const {error, isLoading, Data} = Usefetch('http://localhost:8000/Blogs');
    if(Data){
    console.log(Data)
    }
    if(error){
      console.log(error);
    }
  return (
    <div className='text-center'>
      {
        isLoading && <div>Loading...</div>
      }
    </div>
  )
}
export default Test;