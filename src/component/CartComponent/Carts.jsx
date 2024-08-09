import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { addToCart, decreaseQuantity, removeFromCart } from '../../Redux/CartSlice/Cartslice'
const Carts = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
  const {authToken} = useSelector(state=>state.signinSlce)
    const { cartItems, cartItemsQuantity, cartTotalAmount } = useSelector(state => state.cartReducer)
    const IncreaseQty = (product) => {
        const count = 1;
        dispatch(addToCart({ newItems: product, itemQuantity: count, price: product?.price }))

    }
    const decreaseQty = (product) => {
        const count = 1;
        dispatch(decreaseQuantity({ newItems: product, itemQuantity: count, price: product?.price }))

    }
    const removeCart = function (product) {
        dispatch(removeFromCart(product))
    }
    const checkout = function () {
        authToken ? navigate('/checkout') : navigate('/signin', { state: { previousUrl: '/checkout' } });
    }
    return (
        <div>

            <div className="mx-auto md:w-[70%] w-[80%] text-[#606a7d] my-[3rem]">
                {cartItems?.length > 0 ? (
                    <div className={`flex flex-col xl:flex-row justify-between`}>
                        <div>
                            <div className={`py-[2rem] text-[1.3rem] border-b-[1px] border-[#a29d93]`}>
                                <h1>My Cart</h1>
                            </div>
                            <div>
                                {cartItems?.length > 0 && cartItems.map((items, index) => (
                                    <div className={`py-[2rem] border-b-[1px] border-[#a29d93]`} key={index}>
                                        <div className={`flex justify-between gap-[4rem]`}>
                                            <div className={`flex md:justify-between md:flex-row flex-col md:gap-[10rem] gap-3`}>
                                                <div className={`flex gap-4`}>
                                                    <img className={`border-[1px] w-[7rem]`} src={items?.images[0].url} alt="" />
                                                    <div>
                                                        <h1 className={`text-[1.2rem] mb-2`}>
                                                            {items?.product}
                                                        </h1>
                                                        <p className={`text-[1rem]`}>${items?.price.toFixed(2)}</p>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className={`flex justify-between gap-[4rem]`}>
                                                        <div className={`flex items-center p-1 border-[1px] border-[black]`}>
                                                            <span class="material-symbols-outlined text-[1rem] cursor-pointer" onClick={() => decreaseQty(items)}>
                                                                remove
                                                            </span>
                                                            <span className={`mx-3`}>{items?.quantity}</span>
                                                            <span class="material-symbols-outlined text-[1rem] cursor-pointer" onClick={() => IncreaseQty(items)}>
                                                                add
                                                            </span>
                                                        </div>
                                                        <div className={`text-[1rem]`}>
                                                            <p>${items?.qtyPrice.toFixed(2)}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div>
                                                    <span class="material-symbols-outlined cursor-pointer" onClick={() => removeCart(items)}>
                                                        close
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className='flex-[0.8]'>
                            <div className={`py-[2rem] text-[1.2rem] border-b-[px]`}>
                                <h1>Order Summary</h1>
                            </div>
                            <div>
                                <div className={`border-y-[1px] px-2 py-4 border-[#a29d93] mb-[2rem]`}>
                                    <div className={`flex justify-between items-center text-[1.2rem] font-[100] mb-4`}>
                                        <p>Subtotal:</p>
                                        <p>{Number(cartItemsQuantity)}(units)</p>
                                    </div>
                                    <div className={`flex justify-between items-center text-[1.3rem] font-[100]`}>
                                        <p>Est. total:</p>
                                        <p>${cartTotalAmount.toFixed(2)}</p>
                                    </div>
                                </div>

                                <div className={`text-center text-[1.3rem] font-[200] cursor-pointer`} onClick={checkout}>
                                    <div className='transform duration-[500ms] rem]  bg-[#44dbbd] hover:bg-[#13322c] text-white py-2'>
                                        Check out
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className='text-[1.5rem] py-[4rem]'>
                        <div className='mb-[1rem]'>
                            <h1>My Cart</h1>
                        </div>
                        <div className={`border-y-[1px] border-[#a29d93] text-center py-[10rem]`}>
                            <h1>Cart is empty</h1>
                            <div className={`text-[1rem] mt-2`}>
                                <Link to='/' className={`underline hover:text-[black]`}>Continue browsing</Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Carts