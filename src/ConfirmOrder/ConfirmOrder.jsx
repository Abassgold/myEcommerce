import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import CheckoutSteps from '../component/CheckoutSteps/CheckoutSteps'
import { PaystackButton } from 'react-paystack';
import axios from 'axios';
import { clearCart } from '../Redux/CartSlice/Cartslice';
import './Confirmorder.css'


const ConfirmOrder = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const location = useLocation()
    const { user } = useSelector(state => state.signinSlce)
    const { shippingInfo, cartItems, cartTotalAmount, cartItemsQuantity } = useSelector(state => state.cartReducer)
    const shippingPrice = cartTotalAmount > 300 ? 0 : 25;
    const taxPrice = Number((0.03 * cartTotalAmount).toFixed(2))
    const totalPrice = Number((cartTotalAmount + shippingPrice + taxPrice).toFixed(2))
    const config = {
        reference: (new Date()).getTime().toString(),
        email: user?.email,
        amount: (totalPrice * 100).toFixed(0),
        publicKey: import.meta.env.VITE_PUBLICKEY,
    };
    const handlePaystackSuccessAction = async (reference) => {
        let paymentInfo = { ...shippingInfo, ...reference, userId: user?._id, cartItems, cartTotalAmount, itemsPrice: Number(cartTotalAmount.toFixed(2)), taxPrice, shippingPrice, date: new Date().toLocaleDateString(), time: new Date().toLocaleTimeString(), user }
        try {
            const { data } = await axios.patch(`${import.meta.env.VITE_URI}/orders/new-order`, paymentInfo)
            if (!data.success) return
            dispatch(clearCart())
            navigate('/buy-now')
        } catch (error) {
            console.log(error?.message);
        }
    };
    const handlePaystackCloseAction = () => {
    }
    const componentProps = {
        ...config,
        text: 'Proceed to Payment',
        onSuccess: (reference) => handlePaystackSuccessAction(reference),
        onClose: handlePaystackCloseAction,
    };
    return (
        <div>
            <div className='mx-auto md:w-[50%] w-[90%] '>
                <CheckoutSteps checkout confirmOrder />
            </div>
            <div className={`container px-[1rem] mx-auto mb-[4rem]`}>
                <div className={`flex  xl:flex-row flex-col justify-between gap-[3rem]`}>
                    <div className=''>
                        <div>
                            <h1 className={`text-[2rem] my-[1rem]`}>Shipping Info</h1>
                            <div className={`text-[1.2rem] font-[400] px-3`}>
                                <p className={`my-3 capitalize`}><span className='font-[500]'>Name:</span > <span>{shippingInfo?.name}</span></p>
                                <p className={`my-3`}><span className='font-[500]'>Phone:</span> {shippingInfo?.address}</p>
                                <p className={`my-3 capitalize`}><span className='font-[500]'>Address:</span> <span>{shippingInfo?.address}, {shippingInfo?.city}, {shippingInfo?.
                                    postalCode}, {shippingInfo?.country}</span></p>
                            </div>
                            <div>
                                <div className={`text-[1.6rem] font-[500] border-y-[1px]  border-[RGB(210 210 210)] py-[1rem]`}>
                                    <h1>Your Cart Items</h1>
                                </div>
                                <div>
                                    {cartItems && cartItems?.map((items, index) => (
                                        <div className={`py-[1rem] px-3 border-b border-[RGB(210 210 210)] text-[1.2rem]`} key={index}>
                                            <div className={`flex md:gap-[5rem] justify-between items-center `}>
                                                <img className={`w-[5rem] p-1 border border-[RGB(210 210 210)]`} src={items?.images[0].url} alt="" />
                                                <div className={`flex justify-between gap-[3rem]  lg:flex-row flex-col`}>
                                                    <Link to={`/product-details/${items?._id}`} className='truncated-text'>
                                                        <p>{items?.product}</p>
                                                    </Link>
                                                    <p className={`whitespace-nowrap`}>{items?.quantity} x ${items?.price.toLocaleString()} = <span className='font-[500]'>${items?.qtyPrice.toLocaleString()}</span></p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`max-w-[30rem] border-[2px] border-[RGB(210 210 210)] rounded-lg p-3 h-[25rem]`}>
                        <div className={`text-[2rem] my-[1rem]`}>
                            <h1>Order Summary</h1>
                        </div>
                        <div className={`text-[1.2rem] border-y border-[RGB(210 210 210)] p-3`}>
                            <div className={`flex justify-between items-center `}>
                                <p>Subtotal:</p>
                                <p className='font-[500]'>{cartTotalAmount.toLocaleString()}.00</p>
                            </div>
                            <div className={`flex justify-between items-center my-3`}>
                                <p>Shipping:</p>
                                <p className='font-[500]'>₦{shippingPrice.toLocaleString()}.00</p>
                            </div>
                            <div className={`flex justify-between items-center`}>
                                <p>Tax:</p>
                                <p className='font-[500]'>₦{taxPrice.toLocaleString()}.00</p>
                            </div>
                        </div>
                        <div className={`flex justify-between text-[poppins]  items-center gap-[3rem] border-b border-[RGB(210 210 210)] p-3 mb-[1.2rem] text-[1.7rem] font-[500]`}>
                            <p className='kol'>Total:</p>
                            <p className=''>₦{totalPrice.toLocaleString()}.00</p>
                        </div>
                        <div className={`w-full transform duration-[500ms]   bg-[#44dbbd] hover:bg-[#13322c] text-white p-2  text-center text-[1.5rem] whitespace-nowrap rounded-md`}>
                            <PaystackButton {...componentProps} />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default ConfirmOrder