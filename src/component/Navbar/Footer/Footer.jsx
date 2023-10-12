import { Link } from '@mui/material';
import { BiLogoFacebook, BiLogoTwitter, BiLogoYoutube } from 'react-icons/bi'
import React from 'react';

const Footer = () => {
    return (
        <footer className='bg-[#f5f5f5] py-[5rem] text-[#787878]'>
            <div className='md:w-[70%] w-[90%] mx-auto'>
                <div className='grid md:grid-cols-3 sm:grid-cols-2 justify-center gap-5'>
                    <div className=' md:col-span-1'>
                        <div>
                            <Link underline="always" href='#' color="#787878">FAQ</Link><br />
                            <Link underline="always" href='#' color='#787878'>CONTACT</Link><br />
                            <Link underline="always" href='#' color='#787878'>SHOP</Link><br />
                            <Link underline="always" href='#' color='#787878'>EXPERT REVIEWS</Link><br /><br /><br /><br />
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
                            <Link underline="always" href='#' color='#787878'>ABOUT US</Link>
                            <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere.</p>
                        </div>
                    </div>
                    <div className=' md:col-span-1'>
                        <div>
                            <Link underline="always" href='#' color='#787878'>NEW RELEASES</Link>
                            <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.</p>
                            <div className='mt-3'>
                                <input placeholder='Enter your email here*' type="text" className='outline-none p-2 w-[100%] border-[1px] border-black' /><br />
                                <button className='mt-2 w-[100%] py-1 text-white bg-green-600 hover:bg-white hover:text-green-600 border-2 border-green-600'>Subscribe Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-center mt-7'>
                <small>© 2035 BY EZ ELECTRONICS. Powered and secured by Abass</small>
            </div>
        </footer>
    );
}

export default Footer;
