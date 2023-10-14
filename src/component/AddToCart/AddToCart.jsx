import React from 'react';
import { Link } from 'react-router-dom';

const AddToCart = () => {
    return (
        <div className='pt-[3rem] pb-[3rem]'>
            <div className="mx-auto md:w-[70%] w-[90%]">
                <div className="grid md:grid-cols-2 grid-cols-1 gap-10 justify-center items-end">
                    <div className='mb-[5rem] px-4'>
                        <a href="">
                            <div className='z-0 flex flex-col justify-end h-[20rem] bg-[url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6fnaeqm__cfcZzBGOG3ioUpRIIJDag5uMyg&usqp=CAU")] bg-no-repeat bg-cover'>
                                <div className='text-white hover:bg-[rgb(205,204,197,0.5)] bg-[rgb(205,204,197)] py-3 text-center translate-y-[10px] transform hover:translate-y-0 duration-[500ms]'>
                                    Quick view
                                </div>
                            </div>
                            <div className='py-2 z-10'>
                                <p className='text-[18px] font-[400] text-[#2f2e2e]'>EZ 00001</p>
                                <p className='text-[16px] font-[400] text-[#605e5e]'>$200.00</p>
                            </div>
                            <div className='transform duration-[500ms] text-center bg-[#44dbbd] hover:bg-[#13322c] text-white py-3 z-20'>
                                <Link className=''>Add to cart</Link>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    ); 
}

export default AddToCart;
