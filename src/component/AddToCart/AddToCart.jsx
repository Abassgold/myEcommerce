import React, { Suspense, lazy, useContext, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import SingleCart from '../SingleCart/SingleCart';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../Redux/CartSlice/Cartslice'; 
import { useEffect } from 'react';
import { fetchProduct } from '../../Redux/AllProductSlice/AllProductSlic';
import Loader from '../Loader/Loader';
import { Pagination } from 'flowbite-react';
import { searchContext } from '../../App';


const AddToCart = () => {
    const {filter} = useContext(searchContext)
    const [show, setshow] = useState(false)
    const [selectedProduct, setSelectedProduct] = useState(null)
    const [currentPage, setCurrentPage] = useState(1);
    const {keyword} = useParams()
    const [category, setCategory] = useState('');
    
    const URI = `http://localhost:5000/admin/all-products?page=${currentPage}&filter=${filter}`
    const { isLoading, allProduct, totalPages, error } = useSelector((state) => state.products)
    const dispatch = useDispatch()
    const onPageChange = (page) => setCurrentPage(page);
    const operate = (a, b) => {
        // setshow(a)
        setSelectedProduct(b)
        setTimeout(() => {
            setshow(a)
        }, 2000);
    }
    useEffect(() => {
        dispatch(fetchProduct(URI))
    }, [dispatch, currentPage, keyword, filter])


    return (
        <section className={`relative`}>
            {
                show && (
                    <div className={`h-full fixed top-0 left-auto right-auto w-full `}>
                        <SingleCart gettingValue={selectedProduct} show={show} setShow={setshow} />
                    </div>
                )}
            {
                isLoading && <Loader />
            }
            {
                !isLoading && error && <h1 className='text-center text-[3rem]'>Error: {error}</h1>
            }
            {
                !isLoading && !error && (
                    (
                        <div className='pt-[3rem] pb-[3rem]'>
                            <div className="mx-auto md:w-[70%] w-[80%]">
                                <div className={`grid md:grid-cols-2 md:justify-center`}>
                                    {
                                        allProduct && allProduct.result && allProduct.result.map(product => (
                                            <div className='mb-[5rem] px-4' key={product._id}>
                                                <div className={`cursor-pointer`}>
                                                    <div className={`flex flex-col justify-end h-[15rem] sm:h-[30rem] bg-[url('https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/96/7057222/1.jpg?9360')] bg-no-repeat bg-center sm:bg-cover bg-contain`}>

                                                        <div className='text-white hidden md:block hover:bg-[rgb(205,204,197,0.5)] bg-[rgb(205,204,197)] py-3 text-center translate-y-[10px] transform hover:translate-y-0 duration-[500ms]' onClick={() => operate(!show, product)}>
                                                            Quick view
                                                        </div>
                                                    </div>
                                                    <div className='py-2'>
                                                        <p className='text-[18px] font-[400] text-[#2f2e2e]'>{product.product}</p>
                                                        <p className='text-[16px] font-[400] text-[#605e5e]'>${product.price}</p>
                                                    </div>
                                                    <div className='transform duration-[500ms] text-center bg-[#44dbbd] hover:bg-[#13322c] text-white py-3' onClick={() => dispatch(addToCart({ name: 'Product A', quantity: 2, price: 10 }))}>
                                                        Add to cart
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className="flex overflow-x-auto sm:justify-center">
                                {
                                    allProduct.totalPages && <Pagination currentPage={currentPage} totalPages={allProduct.totalPages} onPageChange={onPageChange} showIcons />
                                }
                            </div>
                        </div>
                    )
                )
            }
        </section>
    );
}

export default AddToCart;
