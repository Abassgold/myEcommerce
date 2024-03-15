import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { IoLogoWhatsapp } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct } from '../Redux/AllProductSlice/AllProductSlic';


const ProductDetails = () => {
    const {id} = useParams()
    let URI = `http://localhost:5000/admin/product/${id}`
    const [show, setShow] = useState(true)
    const [show1, setShow1] = useState(true)
    const dispatch = useDispatch()
    const { isLoading, allProduct, error} =useSelector((state)=>state.products)
    useEffect(()=>{
        dispatch(fetchProduct(URI))
    },[])
    console.log(allProduct.result);
    return (
        <div className='pt-[9rem]'>
            <div className={`mx-auto md:w-[60%] w-[90%]`}>
                <div>
                    <div className={`my-6 px-[1rem]`}>
                        <span>Home / Buy now / EZ0001</span>
                    </div>
                    <div className={`md:flex`}>
                        <div className={`flex-1 mb-4 px-[1rem]`}>
                            <div className={`border-[#484747] border-[1px] p-2 cursor-crosshair`}>
                                <img src="https://static.wixstatic.com/media/42dbaa_9c1e33067abc4368b043aca99792bea3.png/v1/fill/w_500,h_500,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/42dbaa_9c1e33067abc4368b043aca99792bea3.png" alt="" />
                            </div>
                            <div className='my-2'>
                                <div className={`flex`}>
                                    <div className={`border-[#484747] border-[1px] p-[1px]`}>
                                        <img src="https://static.wixstatic.com/media/42dbaa_9c1e33067abc4368b043aca99792bea3.png/v1/fill/w_500,h_500,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/42dbaa_9c1e33067abc4368b043aca99792bea3.png" alt="" className={`w-[50px] h-[3rem]`} />
                                    </div>
                                    <div className={`border-[#484747] border-[1px] p-[1px]`}>
                                        <img src="https://static.wixstatic.com/media/42dbaa_9c1e33067abc4368b043aca99792bea3.png/v1/fill/w_500,h_500,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/42dbaa_9c1e33067abc4368b043aca99792bea3.png" alt="" className={`w-[50px] h-[3rem]`} />
                                    </div>
                                </div>
                            </div>
                            <div className={``}>
                            <small>I'm a product detail. I'm a great place to add more details about your product such as sizing, material, care instructions and cleaning instructions.</small>
                            </div>
                        </div>
                        <div className={`flex-1 px-[1rem]`}>
                            <h1>EZ 00001</h1>
                            <p>SKU: 0001</p><br />
                            <p>$200.00</p><br />
                            <small>Quantity</small>
                            <div className={`flex items-center gap-2 text-[1.5rem]`}>
                                <span class="material-symbols-outlined">
                                    remove
                                </span>
                                <span className={``}>1</span>
                                <span class="material-symbols-outlined">
                                    add
                                </span>
                            </div>
                            <div className={`my-3 transform duration-[500ms] text-center bg-[#44dbbd] hover:bg-[#13322c] text-white  py-2`}>
                                <Link>Add to Cart</Link>
                            </div>
                            <div className={`transform duration-[500ms] text-center bg-[black] hover:bg-[#6a6f6e] text-white  py-2`}>
                                <Link>Buy Now</Link>
                            </div>
                            <div className={`my-[3rem]`}>
                                <div className={`flex justify-between items-center text-[12px] text-[#484747] cursor-pointer mb-2`} onClick={e => setShow(!show)}>
                                    <p>PRDUCT INFO</p>
                                    <span class="material-symbols-outlined">
                                        {show ? 'remove' : 'ADD'}
                                    </span>
                                </div>
                                <p className={`text-[13px] text-[#484747] ${show ? 'block' : 'hidden'}`}>
                                    I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item. Buyers like to know what they’re getting before they purchase, so give them as much information as possible so they can buy with confidence and certainty.
                                </p>
                            </div>
                            <div>
                                <div className={`flex justify-between text-[12px] text-[#484747] cursor-pointer items-center mb-2`} onClick={e => setShow1(!show1)}>
                                    <p>RETURN AND REFUND POLICY</p>
                                    <span class="material-symbols-outlined">
                                        {show1 ? 'remove' : 'ADD'}
                                    </span>
                                </div>
                                <p className={`text-[13px] text-[#484747]  ${show1 ? 'block' : 'hidden'}`}>
                                    I’m a Return and Refund policy. I’m a great place to let your customers know what to do in case they are dissatisfied with their purchase. Having a straightforward refund or exchange policy is a great way to build trust and reassure your customers that they can buy with confidence.
                                </p>
                            </div>
                            <div className={`my-7`}>
                                <div className={`flex gap-3`}>
                                    <span className='text-[#60d66a]'>
                                        <IoLogoWhatsapp />
                                    </span>
                                    <span className='text-[#778cb7]'>
                                        <FaFacebookF />
                                    </span>
                                    <span className='text-[#2fc7f2]'>
                                        <FaTwitter />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProductDetails