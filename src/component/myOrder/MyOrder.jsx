import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Table } from 'flowbite-react';
import Loader from '../Loader/Loader';
import { Link, useNavigate } from 'react-router-dom';
import { fetchMyOrders } from '../../Redux/orderSlice/MyOderslice';
import { RiDeleteBin6Line } from "react-icons/ri"
import { GoDotFill, GoClockFill } from "react-icons/go";

const MyOrder = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { isLoading, error, myOrders } = useSelector(state => state.MyOrderSlice)
    const { user } = useSelector(state => state.signinSlce)
    const [checkedItems, setCheckedItems] = useState({});
    const [drop, setDrop] = useState(false)
    // Handle checkbox change
    const handleCheckboxChange = (e) => {
        const { id, checked } = e.target;
        setCheckedItems((prevState) => ({
            ...prevState,
            [id]: checked,
        }));
    };
    useEffect(() => {
        if (user) {
            dispatch(fetchMyOrders(user?._id));
        }
        if (error) {
            return alert(error.message)
        }
    }, [user, error])
    console.log(myOrders)
    return (
        <>
            <section className=' py-[5rem] px-2'>
                <div className='container mx-auto'>
                    {myOrders && myOrders.length > 0 ? (
                        <section>
                            <div className='sm:flex justify-between'>
                                <div className='mb-2'>
                                    <button id="dropdownRadioButton" className="inline-flex  gap-1 items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5" type="button" onClick={e => setDrop(!drop)}>
                                        <GoClockFill />
                                        <span>
                                            Last 30 days
                                        </span>
                                        <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                                        </svg>
                                    </button>
                                    <div id="dropdownRadio" className={`absolute z-[10] ${drop ? `visible` : 'hidden'}  w-48 bg-white divide-y divide-gray-100 rounded-lg shadow`} >
                                        <ul className="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200">
                                            <li>
                                                <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                                    <input id="filter-radio-example-1" type="radio" value="" name="filter-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 " />
                                                    <label for="filter-radio-example-1" className="w-full ms-2 text-sm font-medium text-gray-900 rounded">Last day</label>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                                    <input checked="" id="filter-radio-example-2" type="radio" value="" name="filter-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500" />
                                                    <label for="filter-radio-example-2" className="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Last 7 days</label>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='mb-2'>
                                    <label for="table-search" className="sr-only">Search</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 rtl:inset-r-0 rtl:right-0 flex items-center ps-3 pointer-events-none">
                                            <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                                        </div>
                                        <input type="text" id="table-search" className="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Search for items" />
                                    </div>
                                </div>
                            </div>

                            <div className="relative w-full max-h-[30rem] overflow-auto shadow-sm sm:rounded-sm border rounded-md p-2">

                                {/* table */}
                                <table className="w-full whitespace-nowrap text-sm text-left rtl:text-right text-gray-500 border">
                                    <thead className="text-xs text-[#ffff] uppercase bg-[#16a34a]">
                                        <tr>
                                            <th scope="col" className="p-4">
                                                <div className="flex items-center">
                                                    <label htmlFor="checkbox-all-search" >reference id</label>
                                                </div>
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Order date
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Order Status
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                costumer
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                email
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                total price
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                action
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {myOrders.map((item, index) => (
                                            <tr className="bg-white border-b hover:bg-[#E4E5E7]">
                                                <td className="w-4 p-4">
                                                    <div className="flex items-center">
                                                        <label className="">{item?.reference}</label>
                                                    </div>
                                                </td>
                                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                                    {item?.date}, {item?.time}
                                                </th>
                                                <td className="px-6 py-4 capitalize">
                                                    <span className={` inline-flex  text-[1.1rem] gap-1 items-center ${item.orderStatus === 'delivered' ? 'border-[#16a34a] text-[#16a34a]' : 'border-[#FC5807] text-[#FC5807]'} border-[3px] rounded-[0.7rem] p-[0.4rem]`}>
                                                        <GoDotFill />
                                                        <span className={`text-[1rem]`}>
                                                        {item?.orderStatus}
                                                        </span>
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4 capitalize">
                                                    {item?.user.firstName}, {item?.user.lastName}
                                                </td>
                                                <td className="px-6 py-4">
                                                    {item?.user.email}
                                                </td>
                                                <td className="px-6 py-4">
                                                    {item?.itemsPrice}
                                                </td>
                                                <td className="px-6 py-4">
                                                    <div className='flex gap-2 items-center'>
                                                        <Link to='#' className="font-medium text-blue-600  hover:underline me-2">View Details</Link>
                                                        <RiDeleteBin6Line className='text-[red] text-[1.5rem] cursor-pointer' title='Delete' />
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </section>

                    ) : (
                        <div></div>
                    )}
                </div>
            </section>
        </>
    )
}

export default MyOrder