import React from 'react';
import { Link } from 'react-router-dom';

const CheckForum = () => {
    return (
        <div className='py-[5rem]'>
            <div className="text-center text-[#2f2e2e]">
                <h1 className='text-[42px] font-[400]'>EXPERTS REVIEWS</h1><br />
                <p className='text-[20px]'>Check out our forum and find the answers you’ve been looking for.</p>
            </div>
            <div className="md:w-[70%] w-[90%] mx-auto mt-14">
                <div className='border-[1px] border-black p-5'>
                    <div className='flex justify-between items-center mb-4'>
                        <div>All post</div>
                        <div>
                            <Link className='bg-[#44dbbd] hover:bg-[#2c7163] py-[7px] px-[2rem]'>Create post</Link>
                        </div>
                    </div>
                    <div className='flex justify-end items-center border-y-[1px] border-[#cdcdcd] py-2'>
                        <div className=''>
                            <span title='Comments' className='me-3'>🗨</span>
                            <span title='Reactions' className='mx-3'>😊</span>
                            <span title='Views' className='mx-3'>👁‍🗨</span>
                            <span className='ms-3 me-8'>Recent Activity</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CheckForum;
