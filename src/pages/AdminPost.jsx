import axios from 'axios'
import { useFormik } from 'formik'
import React, { useState } from 'react'

const AdminPost = () => {
    const handlePick =(e)=>{
        let file = e.target.files[0]
        let reader = new FileReader()
        reader.onload=()=>{
            formik.setFieldValue('image', reader.result)
        }
         reader.readAsDataURL(file)
    }
   const formik = useFormik({
        initialValues:{
            product:'',
            price:'',
            image:''
        },
        onSubmit: async (value)=>{
            try {
                
            } catch (error) {
                
            }
            console.log(value);

            axios.post('http://localhost:5000/admin/product', value)
        }
    })
    return (
        <div className={`md:w-[50%] w-[90%] mx-auto text-[20px] my-[3rem]`}>
            <form onSubmit={formik.handleSubmit}>
                <div className={``}>
                    <label htmlFor="">Proudct Name</label><br />
                    <input type="text" className='mt-1 border-[2px] outline-none border-black w-full p-2'  onChange={formik.handleChange} name='product'/>
                </div><br />
                <div>
                    <label htmlFor="">Proudct Price</label><br />
                    <input type="number"  className='mt-1 border-[2px] outline-none border-black w-full p-2' onChange={formik.handleChange} name='price'/>
                </div><br />
                <div>
                    <label htmlFor="">Proudct Picture</label><br />
                    <input type="file" className='mt-1 border-[2px] outline-none border-black w-full p-2' onChange={handlePick} name='image'/>
                </div><br />
                <div className='mt-1 text-end'>
                    <button type='submit' className={`border-[2px] border-green-950 rounded-sm duration-500 p-3 bg-green-950 hover:bg-green-50 text-green-50 hover:text-green-950`}>Upload</button>
                </div>
            </form>
        </div>
    )
}

export default AdminPost