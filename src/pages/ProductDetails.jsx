import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { IoLogoWhatsapp } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { fetchSingleProduct } from '../Redux/AllProductSlice/productSlice';
import Loader from '../component/Loader/Loader';
import { Modal, Button } from 'flowbite-react';
import { addToCart } from '../Redux/CartSlice/Cartslice';
import { fetchReviews } from '../Redux/reviewSlice/Reviewslice';
import { Alert } from "flowbite-react";
import axios from 'axios';
import CostumTitle from '../../CosutumTitle/CostumTitle';

const ProductDetails = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const URI = `${import.meta.env.VITE_URI}/admin/product/${id}`
    const [quantity, setQuantity] = useState(1)
    const [show, setShow] = useState(true)
    const [show1, setShow1] = useState(true)
    const [picarray, setPicArray] = useState(0)
    const [openModal, setOpenModal] = useState(false);
    const [rating, setRating] = useState('');
    const dispatch = useDispatch()
    const { user } = useSelector(state => state.signinSlce)
    const { authToken } = useSelector(state => state.signinSlce)
    const style = {
        clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
        width: '2rem',
    }
    const changePic = function (b) {
        setPicArray(b)
    }
    useEffect(() => {
        if(product?._id === id) return;
        dispatch(fetchSingleProduct(URI))
    }, [dispatch, URI])
    const { isLoading, product, error } = useSelector((state) => state.productSlice)
    console.log(product)
    const { cartItems } = useSelector(state => state.cartReducer)
    const findIndex = cartItems?.find((cartItem) => cartItem._id === id)
    const qnty = findIndex ? findIndex.quantity : 0;
    console.log(qnty);
    const increaseQuantity = (stock) => {
        const count = Number(document.querySelector('.count').value);
        const qnty = findIndex ? findIndex.quantity : 0;
        if (count >= stock) return
        const qty = count + 1
        setQuantity(qty)
    }
    const decreaseQuantity = (stock) => {
        const count = Number(document.querySelector('.count').value);
        if (count <= 1) return
        const qty = count - 1
        setQuantity(qty)
    }
    function addCart(stock) {
        const count = Number(document.querySelector('.count').value);
        if (findIndex) {
            if ((count + findIndex.quantity) > stock) return alert('cart exceeded quantity')
        }
        dispatch(addToCart({ newItems: product, itemQuantity: quantity, price: (product?.price * quantity) }))
    }
    const sendRating = () => {
        if (rating === '') return;
        try {
            const { data } = axios.patch()
            if (!data?.success) return;
            setOpenModal(false)
        } catch (error) {
            alert(error.message)
        }
    }
    const postReview = function () {
        authToken ? navigate('/buy-now') : navigate('/signin', { state: { previousUrl: `/product-details/${id}` } })
    }
    return (
        <> 
        <CostumTitle title='Product-Details'/>
        <div className='pt-[9rem]'>
            <div className={`mx-auto md:w-[60%] w-[90%]`}>
                <div>
                    {
                        isLoading && <Loader />
                    }
                    {
                        !isLoading && error && <h1 className='text-center text-[3rem]'>Error: {error}</h1>
                    }
                    {
                        !isLoading && !error && (
                            <div>
                                <div className={`my-6 px-[1rem]`}>
                                    <span>Home / Buy now / {product.product}</span>
                                </div>
                                <div className={`md:flex`}>
                                    <div className={`flex-1 mb-4 px-[1rem]`}>
                                        <div className={`border-[#484747] border-[1px] p-2 cursor-crosshair`}>
                                            <img src={product?.images?.[picarray].url} alt="" />
                                        </div>
                                        <input type="text" name="" id="count" value={quantity} className='hidden text-red-700' />
                                        <div className='my-2'>
                                            <div className={`flex`}>
                                                <div className={`border-[#484747] border-[1px] p-[1px]`}>
                                                    <img src={product?.images?.[0].url} alt="" className={`w-[50px] h-[3rem]`} onClick={e => changePic(0)} />
                                                </div>
                                                    <div className={`border-[#484747] border-[1px] p-[1px]`}>
                                                    <img src={product?.images?.[1].url} alt="" className={`w-[50px] h-[3rem]`} onClick={e => changePic(1)} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className={`mb-[1rem]`}>
                                            <small>{product?.description}</small>
                                        </div>
                                        <div>{product.numOfReviews} Reviews</div>
                                        <h2 className='mt-1'>Star Rating</h2>
                                        <div className='text-[red]'>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star"></span>
                                            <span className="fa fa-star"></span>
                                        </div>

                                    </div>
                                    <div className={`flex-1 px-[1rem]`}>
                                        <h1 className='mb-[7px]'>{product.product}</h1>
                                        <p>Status: <span className={`font-[500]`}>{product.stock > 0 ? 'in Stock' : 'Out of Stock'}</span></p><br />
                                        <p>Sold by : <span className='font-[500]'>{product.seller}</span></p>
                                        <p>₦{(Number(product.price)).toLocaleString()}.00</p><br />
                                        <small>Quantity</small>
                                        <div className={`flex items-center gap-2 text-[1.5rem]`}>
                                            <span class="material-symbols-outlined  bg-yellow-700 cursor-pointer text-white" onClick={() => decreaseQuantity(product?.stock)}>
                                                remove
                                            </span>
                                            <input type="text" value={quantity} className='count hidden' />
                                            <span className={`mb-[1px]`} >{quantity}</span>
                                            <span class="material-symbols-outlined  bg-red-700 text-white cursor-pointer" onClick={() => increaseQuantity(product?.stock)}>
                                                add
                                            </span>
                                        </div>
                                        <Link onClick={() => addCart(product.stock)}>
                                            <div className={`my-3 transform duration-[500ms] text-center bg-[#44dbbd] hover:bg-[#13322c] text-white  py-2`}>
                                                Add to Cart
                                            </div>
                                        </Link>
                                        <Link>
                                            <div className={`transform duration-[500ms] text-center bg-[black] hover:bg-[#6a6f6e] text-white  py-2`}>
                                                Buy Now
                                            </div>
                                        </Link>
                                        <div className={`my-[3rem]`}>
                                            <div className={`flex justify-between items-center text-[12px] text-[#484747] cursor-pointer mb-2`} onClick={e => setShow(!show)}>
                                                <p>PRDUCT INFO</p>
                                                <span class="material-symbols-outlined">
                                                    {show ? 'remove' : 'ADD'}
                                                </span>
                                            </div>
                                            <p className={`text-[13px] text-[#484747] ${show ? 'block' : 'hidden'}`}>
                                                {product.description}
                                            </p>
                                        </div>
                                        <div>
                                            <div className={`flex justify-between text-[12px] text-[#484747] cursor-pointer items-center mb-2`} onClick={e => setShow1(!show1)}>
                                                <p>RETURN AND REFUND POLICY</p>
                                                <span class="material-symbols-outlined">
                                                    {show1 ? 'remove' : 'ADD'}
                                                </span>
                                            </div>
                                            <p className={`text-[13px] text-[#484747] transition duration-[5s] ${show1 ? 'block' : 'hidden'}`}>
                                                I’m a Return and Refund policy. I’m a great place to let your customers know what to do in case they are dissatisfied with their purchase. Having a straightforward refund or exchange policy is a great way to build trust and reassure your customers that they can buy with confidence.
                                            </p>
                                        </div>
                                        <div className='mt-2'>
                                            {user ? (
                                                <Button className='transform duration-[500ms] bg-[#44dbbd] hover:bg-[#13322c] text-white' onClick={() => setOpenModal(true)}>Submit Your Review</Button>
                                            ) : (
                                                <Alert color="failure" className='cursor-pointer' onClick={postReview}>
                                                    <span className="font-medium text-[1.3rem] hover:underline underline-offset-[.2rem]">Login to post your review</span>
                                                </Alert>
                                            )}
                                            <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
                                                <Modal.Header>Terms of Service</Modal.Header>
                                                <Modal.Body>
                                                    <div className="space-y-6">
                                                        <div className='flex'>
                                                            <div style={style} className='star'></div>
                                                            <div style={style} className='star'>2</div>
                                                            <div style={style} className='star'>3</div>
                                                            <div style={style} className='star'>4</div>
                                                            <div style={style} className='star'>5</div>
                                                        </div>
                                                        <textarea className='w-full outline-none border-[1px] p-2 border-black' name="" placeholder='Submit Your review...' onChange={e => setRating(e.target.value)}></textarea>
                                                    </div>
                                                </Modal.Body>
                                                <Modal.Footer>
                                                    <div className='text-white'>
                                                        <button className=' text-end transform duration-[500ms] bg-[#44dbbd] hover:bg-[#13322c] p-2 rounded-lg' onClick={() => sendRating()}>submit</button>
                                                    </div>
                                                </Modal.Footer>
                                            </Modal>
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
                        )
                    }
                </div>
            </div>

        </div>
        </>
    )
}

export default ProductDetails