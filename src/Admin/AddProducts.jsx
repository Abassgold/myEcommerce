import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import AddProductModal from "./Modal/AddProductModal";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../component/Loader/Loader";
import { fetchProductAdmin } from "../Redux/Admin/AdminProductslice";
const AddProducts = () => {
    const dispatch = useDispatch()
    const URI = `${import.meta.env.VITE_URI}/admin/products`
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { isLoading, allProduct, error } = useSelector((state) => state.AdminProductslice)
    useEffect(() => {
        if (!allProduct || allProduct.length === 0){
            dispatch(fetchProductAdmin(URI))
        };
    }, [dispatch, URI])
    const openModal = () => {
        setIsModalOpen(true);
    };
    const closeModal = () => {
        setIsModalOpen(false);
    };
    return (
        <>
            <section>
                {isLoading && <Loader/>}
                <div className="mb-4">
                    <div className="relative w-full max-h-[30rem] overflow-auto shadow-sm sm:rounded-sm border rounded-md p-2">
                        <table className="w-full whitespace-nowrap text-sm text-left rtl:text-right text-gray-500 border">
                            <thead className="text-xs text-[#ffff] uppercase bg-[#16a34a]">
                                <tr>
                                    <th scope="col" className="p-4">
                                        <div className="flex items-center">
                                            <label htmlFor="checkbox-all-search" >S/N</label>
                                        </div>
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        product name
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Porudct image
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Category name
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        unit price
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {Array.isArray(allProduct?.result) && allProduct?.result.map((items, index) => (
                                    <tr className="bg-white whitespace-normal border-b hover:bg-[#E4E5E7]">
                                        <td className="w-4 p-4">
                                            <div className="flex items-center">
                                                <label className="">{index+1}</label>
                                            </div>
                                        </td>
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 ">
                                            {items.product}
                                        </th>
                                        <td className="px-6 py-4 capitalize">
                                            <img src={items.images[0].url} alt="" className="w-[3rem] rounded-md object-cover" />
                                        </td>
                                        <td className="px-6 py-4">
                                            {items.category}
                                        </td>
                                        <td className="px-6 py-4">
                                        ₦{items?.price.toLocaleString()}.00
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className='flex gap-2 items-center'>
                                                <Link to='#' className="font-medium text-blue-600  hover:underline me-2">View Details</Link>
                                                <MdDelete className='text-[red] text-[1.5rem] cursor-pointer' title='Delete' />
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div>
                    <button className="p-[0.5rem] rounded-md hover:bg-[#2F2E2E] text-[poppins] text-[1.2rem] capitalize duration-1000 bg-[#16A34A] text-[#fff]" onClick={openModal}>add product</button>
                    <AddProductModal isOpen={isModalOpen} onClose={closeModal} />
                </div>
            </section>
        </>
    )
}

export default AddProducts