import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllOrders } from '../../Redux/orderSlice/OrderSlice';
import { Link, useParams } from 'react-router-dom'
import Loader from '../Loader/Loader';
const OrderDetails = () => {
    const dispatch = useDispatch();
    const { isLoading, error, allOrders } = useSelector(state => state.allOrders);
    const { user } = useSelector(state => state.signinSlce)
    const { id } = useParams();
    useEffect(() => {
        dispatch(fetchAllOrders())
        if (error) {
            alert(error.message)
        }
    }, [error, dispatch])
    dispatch
    console.log(allOrders);
    const orderDetails = allOrders && allOrders.filter(order => order.user === user?._id).find(order => order?._id === id)
    const userName = `${user?.firstName}, ${user?.lastName}`
    const shippingInfo = orderDetails?.shippingInfo;
    const totalPrice = orderDetails?.totalPrice;
    const orderItems = orderDetails?.orderItems;
    const orderStatus = orderDetails?.orderStatus;
    const paymentInfo = orderDetails?.paymentInfo;
    const address = `${shippingInfo?.address}, ${shippingInfo?.city}, ${shippingInfo?.postalCode}, ${shippingInfo?.country}`
    const phone = `${shippingInfo?.phoneNo}`
    const isPaid = paymentInfo?.status === 'Paid' ? 'text-[#1768D9]' : 'text-[red]'
    const isDelivered = orderStatus === 'Delivered' ? 'text-[#1768D9]' : 'text-[red]'
    console.log(orderDetails);
    return (
        <div className='py-[5rem]'>
            {isLoading ? <Loader /> : (
                <div className='md:w-[70%] w-[90%] mx-auto'>
                    <h1 className={`text-[2rem] font-[400] mb-[2rem]`}>Order # {id}</h1>
                    <div>
                        <h1 className='text-[2rem] font-[500]'>Shipping Info</h1>
                        <div className=' whitespace-nowrap'>
                            <p className='flex items-center gap-2 my-[1rem]'><span className='text-[1.5rem] font-[600]'>Name:</span> <span className='text-[1.2rem] font-[400] capitalize'>{userName}</span></p>
                            <p className='flex items-center gap-2 my-[1rem]'><span className='text-[1.5rem] font-[600]'>Phone:</span> <span className='text-[1.2rem] font-[400]'>{phone}</span></p>
                            <p className=' my-[1rem]'><span className='text-[1.5rem] font-[600]'>Address:</span> <span className='text-[1.2rem] font-[400] capitalize whitespace-normal'>{address}</span></p>
                            <p className='flex items-center gap-2 my-[1rem]'><span className='text-[1.5rem] font-[600] '>Amount:</span> <span className='text-[1.2rem] font-[400]'>${totalPrice}</span></p>
                        </div>
                    </div>
                    <div className='border-t'>
                        <div className={`md:flex md:justify-between md:items-center`}>
                            <div className='my-[1rem]'>
                                <h1 className='text-[2rem] font-[500] mb-2'>Payment Status</h1>
                                <p className={`text-[1.5rem] ${isPaid} uppercase`}>{paymentInfo?.status}</p>
                            </div>
                            <div className='my-[1rem]'>
                                <h1 className='text-[2rem] font-[500] mb-2'>Order Status</h1>
                                <p className={`text-[1.5rem] ${isDelivered}`}>{orderStatus}</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h1 className={`text-[2rem] font-[500] mb-[2rem]`}>Order Items</h1>
                    </div>
                    <div className='border-y'>
                        <div>
                            {orderItems?.map((items, index) => (
                                <div className={`md:flex md:justify-between md:items-center`} key={index}>
                                    <div className='text-[1.5rem] flex justify-between gap-[5rem] items-center my-[2rem]'>
                                        <div>
                                            <img className={`w-[5rem] p-1 border-[0.5px] border-[black]`} src={items?.image} alt="" />
                                        </div>
                                        <div>
                                            <Link to={`/product-details/${items?.product}`}>
                                            <p className={`hover:underline text-[1.3rem]`}>{items?.name}</p>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className='text-[1.5rem] flex justify-between md:gap-[5rem] items-center my-[2rem]'>
                                        <p>${(items?.price * items?.quantity).toFixed(2)}</p>
                                        <p>{items?.quantity} Piece(s)</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default OrderDetails