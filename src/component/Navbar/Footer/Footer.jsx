import { BiLogoFacebook, BiLogoTwitter, BiLogoYoutube } from 'react-icons/bi'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='bg-[#f5f5f5] py-[5rem] text-[#787878]'>
            <div className='md:w-[70%] w-[90%] mx-auto'>
                <div className='grid md:grid-cols-3 sm:grid-cols-2 justify-center gap-5'>
                    <div className=' md:col-span-1'>
                        <div>
                            <Link className='underline underline-offset-2 text-[#787878]' to='#'>FAQ</Link><br />
                            <Link className='underline underline-offset-2 text-[#787878]' to='#'>CONTACT</Link><br />
                            <Link className='underline underline-offset-2 text-[#787878]' to='/buy-now'>SHOP</Link><br />
                            <Link className='underline underline-offset-2 text-[#787878]' to='/support'>EXPERT REVIEWS</Link><br /><br /><br /><br />
                            <div className='flex gap-5 items-center text-[#787878] font-[500] text-[25px]'>
                                <a href="">
                                    <BiLogoFacebook />
                                </a>
                                <a href="">
                                    <BiLogoTwitter />
                                </a>
                                <a href="">
                                    <BiLogoYoutube />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='md:col-span-1'>
                        <div>
                            <Link className='underline underline-offset-2 text-[#787878]' to='#'>ABOUT US</Link>
                            <p>We’re more than just a store; we’re a community of passionate individuals who believe in the power of [mention your products or services]. Whether you’re a seasoned enthusiast or just starting your journey, we’re here to help you find the perfect products to inspire and empower you.</p>
                        </div>
                    </div>
                    <div className=' md:col-span-1'>
                        <div>
                            <Link className='underline underline-offset-2 text-[#787878]' to='#'>NEW RELEASES</Link>
                            <p>Our newest arrivals are here! Explore a curated selection of fresh products, handpicked to elevate your lifestyle. From trendy fashion to innovative items, discover the latest must-haves. Don't miss out on these limited-time offers. Shop now and experience the excitement of our new releases!</p>
                            <div className='mt-3'>
                                <input placeholder='Enter your email here*' type="text" className='outline-none p-2 w-[100%] border-[1px] border-black' /><br />
                                <button className='mt-2 w-[100%] py-1 text-white bg-green-600 hover:bg-white hover:text-green-600 border-2 border-green-600'>Subscribe Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-center mt-7'>
                <small>© 2035 BY EXCLUSVE STORE. All rights reserved. Powered by Abass</small>
            </div>
        </footer>
    );
}

export default Footer;
