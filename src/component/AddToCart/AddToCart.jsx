import React, { Suspense, lazy, useContext, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import SingleCart from '../SingleCart/SingleCart';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, decreaseQuantity, removeFromCart } from '../../Redux/CartSlice/Cartslice';
import { useEffect } from 'react';
import { fetchProduct } from '../../Redux/AllProductSlice/AllProductSlic';
import Loader from '../Loader/Loader';
import { Pagination, Spinner } from 'flowbite-react';
import { searchContext } from '../../App';
import { increment } from '../../Redux/Action';
import { setSlide } from '../../Redux/SlideSlice/Slide';
import { Box, Modal, Slide, Typography } from '@mui/material';

// import { Button, Modal } from "flowbite-react";

const AddToCart = () => {
    const [openModal, setOpenModal] = useState(false);
    const [loader, setLoader] = useState(false);
    const [input, setInput] = useState('')
    const { filter } = useContext(searchContext)
    const [quantity, setQuantity] = useState(1)
    const [show, setshow] = useState(false)
    const [selectedProduct, setSelectedProduct] = useState(null)
    const [currentPage, setCurrentPage] = useState(1);
    const { keyword } = useParams()
    const [category, setCategory] = useState('');

    const URI = `${import.meta.env.VITE_URI}/admin/all-products?page=${currentPage}&filter=${filter}`
    const IncreaseQty = (product) => {
        const count = 1;
        dispatch(setSlide())
        console.log(loader);
        setTimeout(() => {
            dispatch(addToCart({ newItems: product, itemQuantity: count, price: product?.price }))
            dispatch(setSlide());
        }, 200);
        setLoader(false)
        console.log(loader);
    }
    const decreaseQty = (product) => {
        const count = 1;
        dispatch(setSlide())
        setTimeout(() => {
            dispatch(decreaseQuantity({ newItems: product, itemQuantity: count, price: product?.price }))
            dispatch(setSlide());
        }, 200);
    }
    const deleteCart = function (product) {
        dispatch(setSlide())
        setTimeout(() => {
            dispatch(removeFromCart(product))
            dispatch(setSlide())
        }, 200);
    }
    const { isLoading, allProduct, totalPages, error } = useSelector((state) => state.products)
    const { cartItems } = useSelector(state => state.cartReducer)
    const { isOpen } = useSelector(state => state.Slide)
    const dispatch = useDispatch()
    const onPageChange = (page) => setCurrentPage(page);
    const operate = (b) => {
        setSelectedProduct(b)
        setTimeout(() => {
            setOpenModal(!openModal)
        }, 200);
    }
    useEffect(() => {
        dispatch(fetchProduct(URI))
    }, [dispatch, currentPage, keyword])
    const addCart = (product) => {
        dispatch(setSlide())
        setTimeout(() => {
            dispatch(addToCart({ newItems: product, itemQuantity: 1, price: product.price }))
            dispatch(setSlide())
        }, 200);
        if (isOpen) return;
    }
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 1000,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
    };
    const filteredProducts = allProduct && allProduct.result && allProduct.result.filter(val => {
        return (filter === '' && val) || (val.product && val.product.toLocaleLowerCase().includes(filter.toLowerCase()) && val)
    })

    return (
        <section className={`relative`}>
            <Modal
                open={openModal}
                onClose={() => setOpenModal(!openModal)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <SingleCart gettingValue={selectedProduct} />
                    </Typography>
                </Box>
            </Modal>
            {
                isLoading && <Loader />
            }
            {
                !isLoading && error && <h1 className='text-center text-[3rem]'>Error: {error}</h1>
            }
            {
                !isLoading && !error && (
                    (
                        <div className='py-[3rem]'>
                            <div className="mx-auto container px-[2rem]">
                                {
                                    filteredProducts?.length ? (
                                        <div className={`grid lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-center gap-4`}>
                                            {
                                                filteredProducts.map(product => {
                                                    const cartItem = cartItems?.find((item) => item?._id === product._id);
                                                    const cartQty = cartItem ? cartItem?.quantity : 0;
                                                    return (
                                                        <div className='mb-[5rem] p-2 bg-[#ffff] shadow-lg' key={product._id}>
                                                            <div className={`cursor-pointer`}>
                                                                <div className={`flex flex-col justify-end h-[15rem] sm:h-[30rem] bg-[url('https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/96/7057222/1.jpg?9360')] bg-no-repeat bg-center  bg-contain`}>

                                                                    <div className='text-white hidden md:block hover:bg-[rgb(205,204,197,0.5)] bg-[rgb(205,204,197)] py-3 text-center translate-y-[10px] transform hover:translate-y-0 duration-[500ms]' onClick={() => operate(product)}>
                                                                        Quick view
                                                                    </div>
                                                                </div>

                                                            </div>
                                                            <div className='py-2'>
                                                                <p className='text-[18px] font-[400] text-[#2f2e2e]'>{product.product}</p>
                                                                <p className='text-[16px] font-[400] text-[#605e5e]'>${product.price}</p>
                                                            </div>
                                                            <input type="text" value='1' className={`hidden count`} />
                                                            <div>
                                                                {
                                                                isOpen ? (
                                                                    <div className=' text-center text-[1.5rem]'>
                                                                        <Spinner color="info" aria-label="Info spinner example" />
                                                                    </div>
                                                                ) :
                                                                    cartQty <= 0 ? (
                                                                        <div className='cursor-pointer transform duration-[500ms] text-center bg-[#44dbbd] hover:bg-[#13322c] text-white py-3' onClick={() => addCart(product)}>
                                                                            Add to cart
                                                                        </div>
                                                                    ) : (
                                                                        <div>
                                                                            <div className='flex text-center'>
                                                                                <div className={`flex-[0.5] cursor-pointer transform duration-[500ms] text-center bg-[#44dbbd] hover:bg-[#13322c] text-white py-3  text-[1rem] rounded-md`}>

                                                                                    {
                                                                                        cartQty !== 1 ? (<span class="material-symbols-outlined " onClick={() => decreaseQty(product)}>
                                                                                            remove
                                                                                        </span>) : (
                                                                                            <span class="material-symbols-outlined cursor-pointer" onClick={() => deleteCart(product)}>
                                                                                                remove
                                                                                            </span>
                                                                                        )
                                                                                    }
                                                                                </div>
                                                                                <div className='flex-[1] py-3 text-[1.3rem]'>
                                                                                    {cartQty}</div>
                                                                                <div className={`cursor-pointer rounded-md flex-[0.5] transform duration-[500ms] text-center bg-[#44dbbd] hover:bg-[#13322c] text-white py-3`}>
                                                                                    <span class="material-symbols-outlined" onClick={() => IncreaseQty(product)}>
                                                                                        add
                                                                                    </span>
                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                    )
                                                                }

                                                            </div>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    ) : (
                                        <div className={`text-center text-[2rem] py-[3rem] whitespace-normal`}>
                                            <p>No products found for your search: "{filter}"</p>
                                        </div>
                                    )
                                }
                            </div>
                            {filteredProducts?.length > 0 && (
                                <div className="flex overflow-x-auto justify-center">
                                    {
                                        allProduct.totalPages && <Pagination currentPage={currentPage} totalPages={allProduct.totalPages} onPageChange={onPageChange} showIcons />
                                    }
                                </div>
                            )}
                        </div>
                    )
                )
            }
        </section>
    );
}

export default AddToCart;
