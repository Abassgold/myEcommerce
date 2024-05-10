import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { addToCart, decreaseQuantity, removeFromCart } from '../../Redux/CartSlice/Cartslice'
import { setSlide } from '../../Redux/SlideSlice/Slide';

const CartComponent = () => {
    const dispatch = useDispatch()
    const { cartItems, cartItemsQuantity, cartTotalAmount } = useSelector(state => state.cartReducer)
    const { isOpen } = useSelector(state => state.Slide)
    const IncreaseQty = (product)=> {
        const count = 1;
        dispatch(addToCart({newItems:product, itemQuantity:count, price:product?.price}))
 
     }
     const decreaseQty = (product)=> {
         const count = 1;
         dispatch(decreaseQuantity({newItems:product, itemQuantity:count, price:product?.price}))
 
     }
     const removeCart = function(product){
         dispatch(removeFromCart(product))
     }
    return (
        <div  className=' h-screen'>
            <div>
                <div className='text-[2rem] bg-[#2f2e2e] gap-[7rem] py-[1.7rem] ps-3  flex items-center'>
                    <span class="material-symbols-outlined text-white cursor-pointer" onClick={()=>dispatch(setSlide())}>
                        arrow_forward_ios
                    </span>
                    <h1 className='text-center'>Cart</h1>
                </div>
                <div className={`px-[2rem] bg-[#ffffff]`}>

                    <div className={`text-[#7e756c]`}>
                        {cartItems?.length > 0 ?(<div className={` max-h-[27rem] overflow-y-scroll`}>
                            {cartItems.map(items => (
                            < div className='flex items-center gap-3 py-4 border-b-[1px] border-[black]' key={items?._id}>
                                <div className={`flex-1 p-2`}>
                                    <img src={items?.images[0].url} alt="" className={`w-[5rem]`} />
                                </div>
                                <div className={`flex-1`}>
                                    <div className={`flex gap-[7.5rem]`}>
                                        <div>
                                            <p>{items?.product}</p>
                                            <p>${items?.price}</p>
                                            <div className={`flex items-center gap-2 text-[1.5rem]`}>
                                                <span class="material-symbols-outlined cursor-pointer bg-yellow-700 text-white" onClick={() => decreaseQty(items)}>
                                                    remove
                                                </span>
                                                {/* <input type="text" value={quantity} className='count hidden'/> */}
                                                <span className={`mb-[1px]`} >{items?.quantity}</span>
                                                <span class="material-symbols-outlined cursor-pointer  bg-red-700 text-white" onClick={() => IncreaseQty(items)}>
                                                    add
                                                </span>
                                            </div>
                                        </div>
                                        <div className='text-red-700'>
                                            <span class="material-symbols-outlined cursor-pointer" onClick={()=>removeCart(items)}>
                                                delete
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                        </div>) 
                            : <div className={`text-[2rem] py-[2rem] mb-3 px-[5rem]`}>No Cart Items</div>}
                        {cartItems?.length > 0 && (
                            <div className='text-[2rem] pb-3'>
                                <h1>Subtotal</h1>
                                <p>${cartTotalAmount}</p>
                            </div>
                        )}
                    </div>
                </div>
                <div className='border-[1px] border-t-[#d2d2d2] py-[3rem] text-[1.2rem] text-center bg-white'>
                    <Link to='' className='transform duration-[500ms]  bg-[#44dbbd] hover:bg-[#13322c] text-white px-[4rem] py-2'>View Cart</Link>
                </div>
            </div>
        </div >
    )
}

export default CartComponent