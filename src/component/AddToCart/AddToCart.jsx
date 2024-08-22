import React, { Suspense, lazy, useContext, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
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
import SearchFilter from '../utils/SearchFilter';

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
    const navigate = useNavigate()

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
        // if (isOpen) return;
    }
    const IncreaseQty = (product) => {
        const count = 1;
        dispatch(setSlide())
        console.log(loader);
        setTimeout(() => {
            dispatch(addToCart({ newItems: product, itemQuantity: count, price: product?.price }))
            dispatch(setSlide())
        }, 200);
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
    const searchFilterData = SearchFilter();
        console.log(searchFilterData?.price);
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
                isLoading && <Loader msg='Fetching...' />
            }
            {
                !isLoading && error && <h1 className='text-center text-[3rem]'>Error: {error}</h1>
            }
            {
                !isLoading && !error && (
                    (
                        <div className='py-[3rem]'>
                            <div className="mx-auto container px-2">
                                {allProduct && allProduct.length <= 0 && (<div className={`text-center text-[2rem] py-[3rem] whitespace-normal`}>
                                    <p>We're restocking our shelves. Please check back soon!</p>
                                </div>
                                )}
                                {
                                    filteredProducts?.length > 0 ? (
                                        <div>
                                            <div className='flex gap-4 mb-4 justify-between items-center'>

                                                <form class=" flex-1">
                                                    <select id="categories" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-[1.2rem]">
                                                        <option selected>Chose Category</option>
                                                        {searchFilterData?.filter.map((item, index)=>(
                                                           <option value={item} key={index}>{item}</option> 
                                                        ))}
                                                    </select>
                                                </form>
                                                <form class=" flex-1">
                                                    <select id="priceFilter" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ">
                                                        <option selected>Price filter</option>
                                                    {searchFilterData?.price.map((item, index)=>(
                                                           <option value={item} key={index}>{item}</option> 
                                                        ))}
                                                    </select>
                                                </form>
                                            </div>


                                            <div className={`grid md:grid-cols-3 xl:grid-cols-4 grid-cols-2  justify-center gap-4`}>
                                                {
                                                    filteredProducts.map(product => {
                                                        const cartItem = cartItems?.find((item) => item?._id === product._id);
                                                        const cartQty = cartItem ? cartItem?.quantity : 0;
                                                        return (
                                                            <div className='mb-[1rem] p-2 bg-[#ffff] border-[#d8dbe0] border-[0.5px] shadow-md rounded-md' key={product._id}>
                                                                <div className={`cursor-pointer`}>
                                                                    <img src={product?.images[0].url} alt="" />
                                                                    <div className='text-white hidden md:block hover:bg-[rgb(205,204,197,0.5)] bg-[rgb(205,204,197)] py-3 text-center translate-y-[10px] transform hover:translate-y-0 duration-[500ms]' onClick={() => operate(product)}>
                                                                        Quick view
                                                                    </div>
                                                                </div>
                                                                <div className='py-2'>
                                                                    <p className='text-[18px] font-[400] text-[#2f2e2e]'>{product.product}</p>
                                                                    <p className='text-[16px] font-[400] text-[#605e5e]'>${product.price}</p>
                                                                </div>
                                                                <div className='mb-4 text-white md:hidden block hover:bg-[rgb(205,204,197,0.5)] bg-[rgb(205,204,197)] py-3 text-center' onClick={() => navigate(`/product-details/${product._id}`)}>
                                                                    View details
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
                                        </div>
                                    ) :
                                        (
                                            <div className={`text-center text-[2rem] py-[3rem] whitespace-normal`}>
                                                <p>Unfortunately, we don't have that item in stock at the moment. Please check back later!</p>
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
