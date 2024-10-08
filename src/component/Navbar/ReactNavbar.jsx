import { useState } from 'react';
import { Button, Navbar, Avatar, Dropdown, Badge } from "flowbite-react";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import CartComponent from '../CartComponent/CartComponent';
import { logOut } from '../../Redux/signInSlice/signinSlce';
import axios from 'axios';
const ReactNavbar = () => {
    const [Open, setOpen] = useState(false);
    const [dropdown, setDropdown] = useState(false);
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { user } = useSelector(state => state.signinSlce)
    const { cartItems } = useSelector(state => state.cartReducer);
    const { isOpen } = useSelector(state => state.Slide)
    const signOut = async () => {
        try {
            const { data } = await axios.get(`${import.meta.env.VITE_URI}/user/logout`, {
                withCredentials: true,
            });
            
            if(!data?.success) return;
            dispatch(logOut())
            setDropdown(!dropdown)
        } catch (error) {
            console.log(error?.message);
        }

    }

    return (
        <div className='bg-[#2f2e2e] py-1'>
            <nav>
                <div class="mx-auto max-w-[90rem] px-2 sm:px-6 lg:px-8">
                    <div class="relative flex h-16 items-center justify-between">
                        <div class=" inset-y-0 left-0 flex items-center md:hidden">
                            {/* <!-- Mobile menu button--> */}
                            <button onClick={e => setOpen(!Open)} type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                                <span class="absolute -inset-0.5"></span>
                                <span class="sr-only">Open main menu</span>
                                {Open ? (
                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                ) : (
                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                    </svg>
                                )}
                            </button>
                        </div>
                        <div className="flex  flex-1 items-center  md:gap-[10rem] sm:items-stretch justify-start">
                            <div className="flex flex-shrink-0 gap-2 cursor-pointer" onClick={e => navigate('/')}>
                                <img className="h-8 p-[0.12rem] bg-[#44dbbd] w-auto" src="https://res.cloudinary.com/abasskola/image/upload/v1724107912/Preview_b8xkcn.jpg" alt="Your Company" />
                                <h1 className='text-white text-[1.5rem]'>Exclusive</h1>
                            </div>
                            <div className="sm:ml-6 hidden md:block">
                                <div className="flex space-x-4">
                                    <Link to='/' className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white" aria-current="page">Home</Link>
                                    <Link to='/newsletter' className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">News Letter</Link>
                                    <Link to='/support' className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Support</Link>
                                    <Link to='/forum' className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Expert Reviews</Link>
                                </div>
                            </div>
                        </div>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                            <span className={` cursor-pointer xs:block hidden mx-[0.63rem] text-white border-[2px] border-[#44dbbd] hover:bg-inherit hover:text-[#44dbbd] duration-[0.9s] p-2 bg-[#44dbbd]`} onClick={e => navigate('/buy-now')}>
                                Buy Now
                            </span>
                            <div class="relative py-2 me-3 cursor-pointer" onClick={e => navigate('/cart')}>
                                <div class="t-0 absolute left-3">
                                    <p class="flex h-2 w-2 items-center justify-center rounded-full p-3 text-xs text-white text-[1.5rem]">{cartItems?.length}</p>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="file: mt-4 h-6 w-6 text-[#44dbbd]">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                </svg>
                            </div>
                            <div className="relative ml-3">
                                <div>
                                    <button onClick={e => setDropdown(!dropdown)} type="button" className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                                        <span className="absolute -inset-1.5"></span>
                                        <span className="sr-only">Open user menu</span>
                                        <img className="h-8 w-8 rounded-full object-cover" src={user ? user?.photo?.url : 'https://cdn-icons-png.flaticon.com/512/149/149071.png'} alt="" />
                                    </button>
                                </div>
                                {dropdown && (
                                    <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
                                        {user && (
                                            <div>
                                                <div className='border-b pb-2'>
                                                    <span className="block px-4 pt-2 text-sm text-gray-700 capitalize">{user?.firstName} {user?.lastName}</span>
                                                    <span className="block px-4 text-sm text-gray-700 font-medium">{user?.email}</span>
                                                </div>
                                                <div className='border-b mb-2'>
                                                    <Link to="/profile/me" className="block hover:bg-[#757585] px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0" onClick={e => setDropdown(!dropdown)}>Profile </Link>
                                                    {user?.role === 'admin' && (
                                                        <Link className="block hover:bg-[#757585] px-4 py-2 text-sm text-gray-700" to='/admin/dashboard' onClick={e => setDropdown(!dropdown)}>Dashboard</Link>
                                                    )}
                                                    <Link to='/orders/me' className="block hover:bg-[#757585] px-4 py-2 text-sm text-gray-700" onClick={e => setDropdown(!dropdown)}>Orders</Link>
                                                    <Link to='/settings' className="block hover:bg-[#757585] px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1" onClick={e => setDropdown(!dropdown)}>Settings</Link>
                                                </div>
                                            </div>
                                        )}
                                        {/* <!-- Active: "bg-gray-100", Not Active: "" --> */}

                                        {user ? <Link onClick={signOut} className='block px-4 hover:bg-[#757585] pb-2 text-sm text-gray-700 py-2'>SignOut</Link> : <Link to='/signin' className='block hover:bg-[#757585] px-4 py-2 text-sm  text-gray-700' onClick={e => setDropdown(!dropdown)}>SignIn</Link>}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Mobile menu, show/hide based on menu state. --> */}
                {Open && (
                    <div className="md:hidden" id="mobile-menu">
                        <div className="space-y-1 px-2 pb-3 pt-2">
                            <Link to='/' className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white" aria-current="page" onClick={e => setOpen(false)}>Home</Link>
                            <Link to='/newsletter' className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white" onClick={e => setOpen(false)}>News Letter</Link>
                            <Link to='/support' className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white" onClick={e => setOpen(false)}>Support</Link>
                            <Link to='/forum' className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white" onClick={e => setOpen(false)}>Expert Reviews</Link>
                        </div>
                    </div>
                )}
            </nav>
        </div>
    );
}

export default ReactNavbar;
