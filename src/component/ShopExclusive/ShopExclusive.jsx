import React from 'react';
import { Link } from 'react-router-dom';

const ShopExclusive = () => {
    return (
        <div className="bg-[url('https://static.wixstatic.com/media/84770f_1e775f8cf3bd4a3b97bcf6368528e01b.jpg/v1/fill/w_1349,h_816,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/84770f_1e775f8cf3bd4a3b97bcf6368528e01b.jpg')] bg-center bg-cover py-[10rem]">
            <div className='mx-auto md:w-[70%] w-[90%]'>
                <div className='md:w-1/3'>
                    <h1 className='text-black text-[42px] font-[400]'>Shop Exclusive Today</h1>
                    <p>Experience the convenience and quality of Exclusive products. Shop with us today and get the best deals on the latest electronics and bags.</p><br />
                </div>
                <div>
                    <Link to="#" className='bg-[#44dbbd] hover:bg-[#19352f] text-white py-2 px-3 rounded-[3px]'>Shop Now</Link>
                </div>
            </div>
        </div>
    );
}

export default ShopExclusive;
