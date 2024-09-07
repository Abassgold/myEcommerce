import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Table } from 'flowbite-react';
import Loader from '../Loader/Loader';
import { useNavigate } from 'react-router-dom';
import { fetchMyOrders } from '../../Redux/orderSlice/MyOderslice';

const MyOrder = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { isLoading, error, allOrders } = useSelector(state => state.allOrders)
    const { user } = useSelector(state => state.signinSlce)
    const OrderDetails = function(id){
        let url =`/order/details/${id}`
        navigate(url)
    }
    
    console.log(user?._id);
    
    useEffect(() => {
        if (user) {
            dispatch(fetchMyOrders(user?._id));
        }
        if (error) {
            return alert(error.message)
        }
    }, [user, error])
    
    const myOrder = allOrders.filter(order => order.user === user?._id)
    return (
        <div>
            {isLoading ? <Loader /> : (
                <div className='mx-auto container'>
                    <div>
                        <h1 className='text-[2.5rem] font-[500] mt-6 px-4'>My Orders</h1>
                        <div className="overflow-x-auto">
                            {allOrders && myOrder?.length > 0 ? (
                                <div className={`my-[5rem]`}>
                                    <Table hoverable className="bg-gray-800 dark:bg-gray-800">
                                        <Table.Head className="">

                                            <Table.HeadCell className='bg-gray-700 dark:bg-gray-800 text-white'>Order ID</Table.HeadCell>
                                            <Table.HeadCell className='bg-gray-700 dark:bg-gray-800 text-white'>Num of Items</Table.HeadCell>
                                            <Table.HeadCell className='bg-gray-700 dark:bg-gray-800 text-white'>Price</Table.HeadCell>
                                            <Table.HeadCell className='bg-gray-700 dark:bg-gray-800 text-white'>Status</Table.HeadCell>
                                            <Table.HeadCell className='bg-gray-700 dark:bg-gray-800 '>
                                                <span className="text-white">Actions</span>
                                            </Table.HeadCell>
                                        </Table.Head>
                                        {myOrder.map((items, index) => (
                                            <Table.Body className="divide-y dark:border-gray-700" key={index}>
                                                <Table.Row
                                                    className="hover:text-white text-[#111827] hover:bg-[#111827] bg-[#ffff]"
                                                >
                                                    <Table.Cell className="whitespace-nowrap font-medium">
                                                        {items?._id}
                                                    </Table.Cell>
                                                    <Table.Cell>{items?.orderItems
                                                        ?.length}</Table.Cell>
                                                    <Table.Cell>${items?.itemsPrice}</Table.Cell>
                                                    <Table.Cell className={`${items?.orderStatus === 'Delivered' ? 'text-[green]' : 'text-[red]'}`}>{items?.orderStatus
                                                    }</Table.Cell>
                                                    <Table.Cell>
                                                        <div className='flex items-center gap-[2rem]'>
                                                            <a className="font-medium text-cyan-600 hover:underline cursor-pointer" onClick={e=>OrderDetails(items?._id)}>
                                                                View Details
                                                            </a>
                                                            <span class="material-symbols-outlined text-[red] cursor-pointer" title='Delete Order'>
                                                                delete
                                                            </span>
                                                        </div>
                                                    </Table.Cell>
                                                </Table.Row>
                                            </Table.Body>
                                        ))}
                                    </Table>
                                </div>
                            ) : (
                                <div className='text-center py-[5rem] text-[2rem] font-[500]'>
                                    <h1>You currently don't have any order</h1>
                                </div>
                            )}
                        </div>
                    </div>

                </div>
            )}
        </div>
    )
}

export default MyOrder