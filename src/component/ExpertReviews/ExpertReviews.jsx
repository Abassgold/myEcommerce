import React from 'react';
import { BiSearch } from 'react-icons/bi'
import { Link } from 'react-router-dom';
import CheckForum from '../CheckForum/CheckForum';

const ExpertReviews = () => {
    return (
        <div>
            <div className='md:w-[70%] w-[90%] mx-auto bg-[#2f2e2e]'>
                <div>
                    <div className='flex justify-between items-center text-[white] px-5 py-3'>
                        <div>
                            <Link to='#' className=' active:text-red-600 me-4'>All post</Link>
                            <Link to='#' className=' active:text-red-600'>My post</Link>
                        </div>
                        <div>
                            <div className='flex justify-end items-center  border-white py-1 px-2 border-[1px]'>
                                <BiSearch />
                                <form action="">
                                    <input placeholder='Search' type="text" className='outline-none bg-transparent ps-2' />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <CheckForum/>
        </div>
    );
}

export default ExpertReviews;
