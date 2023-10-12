import React from 'react';
import { AiOutlineWifi } from 'react-icons/ai'
import {BsLightningFill, BsPhone} from 'react-icons/bs'
import {FiSettings, FiBox, FiBluetooth} from 'react-icons/fi'

const Service = () => {
    return (
        <div className='md:w-2/3 w-[90%] mx-auto'>
            <div className='grid md:grid-cols-3 justify-center gap-10 sm:grid-cols-2 text-center'>
                <div className='mb-2 '>
                    <div>
                        <div className='flex justify-center'>
                            <div className='text-[#44dbbd] w-[4.5rem] text-[2rem] border-2 border-[#44dbbd] rounded-lg'>
                                <div className='flex justify-center py-[1rem]'>
                                    <AiOutlineWifi />
                                </div>
                            </div>
                        </div>
                        <h2>Wide Range of Products</h2>
                        <p>Exclusive offers a wide range of products, from the latest smartphones and laptops to stylish bags and accessories. We have something for everyone.</p>
                    </div>
                </div>
                <div className='mb-2'>
                    <div>
                    <div className='flex justify-center'>
                            <div className='text-[#44dbbd] w-[4.5rem] text-[2rem] border-2 border-[#44dbbd] rounded-lg'>
                                <div className='flex justify-center py-[1rem]'>
                                    <BsLightningFill />
                                </div>
                            </div>
                        </div>
                        <h2>Affordable Prices</h2>
                        <p>
                            We offer competitive prices on all our products. Shop with us and get the best deals on the latest electronics and bags.
                        </p>
                    </div>
                </div>
                <div className='mb-2'>
                    <div>
                    <div className='flex justify-center'>
                            <div className='text-[#44dbbd] w-[4.5rem] text-[2rem] border-2 border-[#44dbbd] rounded-lg'>
                                <div className='flex justify-center py-[1rem]'>
                                    <BsPhone />
                                </div>
                            </div>
                        </div>
                        <h2>Excellent Customer Service</h2>
                        <p>
                            At Exclusive, we value our customers and strive to provide the best customer service possible. Our friendly and knowledgeable staff are always happy to assist you with any questions or concerns you may have.
                        </p>
                    </div>
                </div>
                <div className='mb-2'>
                    <div>
                    <div className='flex justify-center'>
                            <div className='text-[#44dbbd] w-[4.5rem] text-[2rem] border-2 border-[#44dbbd] rounded-lg'>
                                <div className='flex justify-center py-[1rem]'>
                                    <FiSettings />
                                </div>
                            </div>
                        </div>
                        <h2>Easy Navigation and Ordering</h2>
                        <p>
                            Our website is user-friendly and easy to navigate. Ordering with us is a breeze!
                        </p>
                    </div>
                </div>
                <div className='mb-2'>
                    <div>
                    <div className='flex justify-center'>
                            <div className='text-[#44dbbd] w-[4.5rem] text-[2rem] border-2 border-[#44dbbd] rounded-lg'>
                                <div className='flex justify-center py-[1rem]'>
                                    <FiBox />
                                </div>
                            </div>
                        </div>
                        <h2>Quality and Durability</h2>
                        <p>
                            All our products are of the highest quality and built to last. We stand behind the products we sell and offer a hassle-free return policy.
                        </p>
                    </div>
                </div>
                <div className='mb-2'>
                    <div>
                    <div className='flex justify-center'>
                            <div className='text-[#44dbbd] w-[4.5rem] text-[2rem] border-2 border-[#44dbbd] rounded-lg'>
                                <div className='flex justify-center py-[1rem]'>
                                    <FiBluetooth />
                                </div>
                            </div>
                        </div>
                        <h2>Secure Shopping</h2>
                        <p>
                            We take the security of your personal information seriously. Our website is secured with SSL encryption to ensure that your data is always safe with us.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Service;
