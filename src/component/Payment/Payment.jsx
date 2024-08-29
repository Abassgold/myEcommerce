import { AddressElement, CardCvcElement, CardExpiryElement, CardNumberElement, Elements, useElements, useStripe } from '@stripe/react-stripe-js'
import axios from 'axios'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CheckoutSteps from '../CheckoutSteps/CheckoutSteps';
import { countries } from 'countries-list';
import { useNavigate } from 'react-router-dom';

const Payment = () => {
    const countryList = Object.values(countries)
    console.log(countryList);
    const navigate = useNavigate();
    const stripe = useStripe();
    const element = useElements();
    const dispatch = useDispatch()
    const { user } = useSelector(state => state.signinSlce)
    const { cartItems, shippingInfo } = useSelector(state => state.cartReducer)
    const [country, setCountry] = useState(shippingInfo?.country)
    const orderinfo = JSON.parse(sessionStorage.getItem('orderInfo'))
    const paymentData = {
        amount: orderinfo?.totalPrice
    }
    let url = `${import.meta.env.VITE_URI}/payment/process`

    const handleSubmit = async function (e) {
        e.preventDefault();
        if (!(stripe || element)) return;
        document.querySelector('#paymentBtn').disabled = true;
        try {
            const { data } = await axios.post(url, paymentData)
            const clientSecret = data?.clientSecret;
            const result = await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: element.getElement(CardNumberElement),
                    billing_details: {
                        name: user?.firstName,
                        email: user?.email
                    }
                }
            });
            if (result.error) {
                document.querySelector('#paymentBtn').disabled = false;
                alert(result?.error?.message)
            }
            else {
                //The payment is process or not
                if (result?.paymentIntent?.status === 'succeeded') {
                    //TODO : New Order
                    return navigate('/success');
                }
                alert('There was an issue while processing the payment')
            }
        } catch (error) {
            document.querySelector('#paymentBtn').disabled = false;
            alert(error?.message)
        }

    }
    useEffect(() => {

    }, [])
    return (
        <div className='py-[2rem]'>
            <div className={`md:w-[50%] w-[90%] mx-auto`}>
                <CheckoutSteps checkout confirmOrder payment />
                <div className={`text-[#606A7D]`}>
                    <h1 className={`text-[2.5rem] font-[500] text-center py-2`}>Card Info</h1>
                    <form action="" className='text-[1.5rem]' onSubmit={handleSubmit}>
                        <div className={`my-2`}>
                            <label htmlFor="cardNumber">Card Number</label><br />
                            <CardNumberElement
                                className={`p-[1rem]  border rounded-md`}
                            />
                        </div>
                        <div className={`flex justify-between gap-3 items-center`}>
                            <div className='flex-1'>
                                <div className={`my-2`}>
                                    <label htmlFor="Card expiry">Expiration</label><br />
                                    <CardExpiryElement className={`p-[1rem]  border rounded-md`} />
                                </div>
                            </div>
                            <div className='flex-1'>
                                <div className={`my-2`}>
                                    <label htmlFor="cardCvc">CVC</label><br />
                                    <CardCvcElement className={`p-[1rem] border rounded-md`} />
                                </div>
                            </div>
                        </div>
                        <div className={`my-2`}>
                            <label htmlFor="Country">Country</label><br />
                            <select required name="" id="" value={country} className='w-full outline-none p-[1rem] border rounded-md' onChange={e => setCountry(e.target.value)}>
                                {countryList && countryList.map((list, index) => (
                                    <option value={list.name} key={index}>{list.name}</option>
                                ))}
                            </select>
                        </div>
                        <div className={`text-center text-[2rem] mt-4`}>
                            <button type='submit' id='paymentBtn' className={` cursor-pointer w-full p-[1rem] transform duration-[500ms]  bg-[#44dbbd] hover:bg-[#13322c] text-white rounded-sm`}>Pay- {orderinfo?.totalPrice}</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default Payment