import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const SingleCart = ({ gettingValue}) => {
    const dispatch =  useDispatch()
    const [quantity, setQuantity] = useState(1)
    const { cartItems } = useSelector(state => state.cartReducer)
    const findIndex = cartItems?.find((cartItem) => cartItem._id === gettingValue?.id)
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
    return (
        <section>
            <div className={``}>
                <div className='container mx-auto  bg-white'>
                    <div className={`flex gap-5 h-[30rem] p-[2rem`}>
                        <div className='flex-1'>
                            <img src={gettingValue.images[0].url} alt="" className={`w-[20rem] h-[23rem]`} title='Kola' />
                        </div>
                        <div className='flex-1'>
                            <div className={`px-6`}>
                                <p className='text-[2.5rem] font-[200] text-[#504866]'>{gettingValue.product}</p><br />
                                <p className='text-[2rem]'>${gettingValue.price}</p><br />
                                <small className='text-[#2f2e2e] font-[50]'>SKU: 002</small><br /><br />
                                <small className='text-[#2f2e2e] font-[50]'>Quantity</small>
                                <div className={`flex items-center gap-2 text-[1.5rem]`}>
                                    <span class="material-symbols-outlined  bg-yellow-700 text-white cursor-pointer" onClick={()=>decreaseQuantity(gettingValue?.stock)}>
                                        remove
                                    </span>
                                    <input type="text" value={quantity} className='count hidden' />
                                    <span className={`mb-[1px]`}>{quantity}</span>
                                    <span class="material-symbols-outlined  bg-red-700 text-white cursor-pointer" onClick={()=>increaseQuantity(gettingValue?.stock)}>
                                        add
                                    </span>
                                </div>
                                <div className={`mt-6`}>
                                    <button className={` text-[poppins] p-1 w-full  text-[1.2rem] bg-[#44dbbd] text-white hover:text-[#44dbbd] hover:bg-white duration-500 border-[2px] border-[#44dbbd]`} onClick={() =>addCart(gettingValue?.stock)} >Add to Cart</button>
                                </div>
                                <div className={`underline mt-2 font-[50] text-[15px] pt-[1rem]`}>
                                    <Link to={`/product-details/${gettingValue._id}`}>View More Details</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SingleCart;