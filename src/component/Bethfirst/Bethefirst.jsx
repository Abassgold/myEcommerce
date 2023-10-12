import React from 'react';

const Bethefirst = () => {
    return (
        <section>
            <div className='bg-[#f5f5f5] py-[5rem]'>
                <div className='mx-auto md:w-2/3 w-[90%]'>
                    <div className='md:w-1/3 w-3/4'>
                        <h1 className='text-[42px] font-[400] text-[#2f2e2e]'>
                            BE THE FIRST TO KNOW
                        </h1>
                    </div>
                </div>
            </div>
            <div className='py-[8rem]'>
                <div className='mx-auto md:w-2/3 w-[90%]'>
                <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                        <p>
                            BE THE FIRST TO KNOW
                            Welcome to Exclusive - your go-to destination for electronics, bags, and more! Our mission is to provide high-quality, innovative products to enhance your everyday life. From smartphones to smartwatches, backpacks to wallets, our selection of products is sure to impress. Our team of experts sources the latest and greatest products, so you can stay ahead of the curve. This is a great space to write a little more about our company and why we are the best choice for your shopping needs. We believe that shopping should be convenient, affordable, and fun, and we strive to make that a reality for all of our customers. With our easy-to-use website, fast shipping, and excellent customer service, you can shop with confidence and ease. So what are you waiting for? Join the Exclusive community today and experience the difference for yourself!
                        </p>
                    </div>
                    <div>
                        <div>
                            <p>
                            Subscribe today to receive exclusive discounts, product updates, and more!
                            </p>
                        </div>
                        <div>
                            <input type="email" className="w-full px-[5px] py-[4px] border-[3px] border-black outline-none" placeholder='Enter your email here*'/>
                            <div className='mt-2'>
                            <button className='text-white bg-green-600 w-full py-2 hover:bg-white hover:text-green-600 border-2 border-green-600'>Subscribe Now</button>
                            </div>
                            
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
    );
}

export default Bethefirst;
