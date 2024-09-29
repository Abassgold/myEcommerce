import { countries, getCountryCode } from 'countries-list'
import React, { useState } from 'react'
import { addShippingInfo } from '../../Redux/CartSlice/Cartslice'
import { useDispatch, useSelector } from 'react-redux'
import CheckoutSteps from '../CheckoutSteps/CheckoutSteps'
import { useNavigate } from 'react-router-dom'
import CostumTitle from '../../../CosutumTitle/CostumTitle'
const countrylist = Object.values(countries)
const Checkout = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { shippingInfo } = useSelector(state => state.cartReducer)
const [name, steName] = useState(shippingInfo.name)
    const [address, setAddress] = useState(shippingInfo.address)
    const [city, setCity] = useState(shippingInfo.city)
    const [postalCode, setPostalCode] = useState(shippingInfo.postalCode)
    const [phoneNo, setPhoneNo] = useState(shippingInfo.phoneNo)
    const [country, setCountry] = useState(shippingInfo.country)
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addShippingInfo({name, address, city, postalCode, phoneNo, country }))
        navigate('/order/confirm', { state: { previousUrl: '/order/confirm' } });
    }

    return (
        <>
        <CostumTitle title='Checkout'/>
            <div className="mx-auto md:max-w-[50%]  text-[#606a7d]  p-6 rounded-[0.5rem] my-[2rem]">
                <CheckoutSteps checkout />
                <div className='rounded-[0.5rem]'>
                    <h1 className='text-[2rem]'>Shipping Info</h1>
                    <div>
                        <form action="" onSubmit={handleSubmit}>
                        <div className={`my-1`}>
                                <label htmlFor="address" className={`mb-2 text-[1.3rem]`}>Full Name</label>
                                <input required type="text" className={ `focus:bg-[#ffff] bg-[#E5E5E5] w-full border-[1px] border-[#d1d5db] outline-[#44dbbd] rounded-md p-2`} onChange={e => steName(e.target.value)} value={name} />
                            </div>
                            <div className={`my-1`}>
                                <label htmlFor="address" className={`mb-2 text-[1.3rem]`}>Address</label>
                                <input required type="text" className={ `focus:bg-[#ffff] bg-[#E5E5E5] w-full border-[1px] border-[#d1d5db] outline-[#44dbbd] rounded-md p-2`} onChange={e => setAddress(e.target.value)} value={address} />
                            </div>
                            <div className={`my-1`}>
                                <label htmlFor="City" className={`mb-2 text-[1.3rem]`}>City</label>
                                <input required type="text" className={`focus:bg-[#ffff] bg-[#E5E5E5] w-full border-[1px] border-[#d1d5db] outline-[#44dbbd] rounded-[0.2rem] p-2`} onChange={e => setCity(e.target.value)} value={city} />
                            </div>
                            <div className={`my-1`}>
                                <label htmlFor="Phone No" className={`mb-2 text-[1.3rem]`}>Phone No</label>
                                <input required type="number" className={` focus:bg-[#ffff] bg-[#E5E5E5] w-full border-[1px] border-[#d1d5db] outline-[#44dbbd] rounded-[0.2rem] p-2`} onChange={e => setPhoneNo(e.target.value)} value={phoneNo} />
                            </div>
                            <div className={`my-1`}>
                                <label htmlFor="Postal Code" className={`mb-2 text-[1.3rem]`}>Postal Code</label>
                                <input required type="number" className={`focus:bg-[#ffff] bg-[#E5E5E5] w-full border-[1px] border-[#d1d5db] outline-[#44dbbd] rounded-[0.2rem] p-2`} onChange={e => setPostalCode(e.target.value)} value={postalCode} />
                            </div>
                            <div className={`my-1`}>
                                <label htmlFor="Country" className={`mb-2 text-[1.3rem]`}>Country</label>
                                <select required name="country" value={country} id="country" className='w-full p-2 focus:bg-[#ffff] bg-[#E5E5E5] border-[#d1d5db] outline-[#44dbbd] border-[1px] rounded-[0.2rem]' onChange={e => setCountry(e.target.value)}>
                                    <option selected disabled className='bg-[#CCA9C9]'>Select country</option>
                                    {countrylist.map((country, index) => (
                                        <option value={country.name} key={index}>{country.name}</option>
                                    ))}
                                </select>
                            </div>
                            <div className='my-3 text-[1.2rem]'>
                                <button className='w-full text-center transform duration-[500ms]  bg-[#44dbbd] hover:bg-[#13322c] text-white px-[4rem] py-3' type='submit'>CONTINUE</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Checkout