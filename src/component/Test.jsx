import React from 'react'
import Usefetch from '../CostumHooks/Usefetch'
const Test = () => {
    const {error,isLoading, Data} = Usefetch('http://localhost:8000/Blogs')
  return (
    <div className=''>
      <h1></h1>
    </div>
  )
}

export default Test