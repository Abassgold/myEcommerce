import { useState } from 'react';
import { Button, Navbar, Avatar, Dropdown, Badge } from "flowbite-react";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import CartComponent from '../CartComponent/CartComponent';
import { logOut } from '../../Redux/signInSlice/signinSlce';
const ReactNavbar = () => {
    const [Open, setOpen] = useState(false);
    const [dropdown, setDropdown] = useState(false);
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { user } = useSelector(state => state.signinSlce)
    const { cartItems } = useSelector(state => state.cartReducer);
    const { isOpen } = useSelector(state => state.Slide)
    const signOut = () => {
        setTimeout(() => {
            dispatch(logOut())
            navigate('/')
        }, (1000));
    }

    return (
        <div>
            <nav class="bg-gray-800">
                <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div class="relative flex h-16 items-center justify-between">
                        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
                            {/* <!-- Mobile menu button--> */}
                            <button onClick={e => setOpen(!Open)} type="button" class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
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
                                {/* <!--
            Icon when menu is closed.

            Menu open: "hidden", Menu closed: "block"
          --> */}

                                {/* <!--
            Icon when menu is open.

            Menu open: "block", Menu closed: "hidden"
          --> */}

                            </button>
                        </div>
                        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                            <div className="flex flex-shrink-0 items-center">
                                <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" />
                            </div>
                            <div className="hidden sm:ml-6 sm:block">
                                <div className="flex space-x-4">
                                    <Link to='/' className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white" aria-current="page">Home</Link>
                                    <Link to='/newsletter' className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">News Letter</Link>
                                    <Link to='/support' className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Support</Link>
                                    <Link to='/forum' className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Expert Reviews</Link>
                                </div>
                            </div>
                        </div>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                            <button type="button" className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                <span className="absolute -inset-1.5"></span>
                                <span className="sr-only">View notifications</span>
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                                </svg>
                            </button>

                            {/* <!-- Profile dropdown --> */}
                            <div className="relative ml-3">
                                <div>
                                    <button onClick={e => setDropdown(!dropdown)} type="button" className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                                        <span className="absolute -inset-1.5"></span>
                                        <span className="sr-only">Open user menu</span>
                                        <img className="h-8 w-8 rounded-full" src={user ? user?.photo?.url : 'https://cdn-icons-png.flaticon.com/512/149/149071.png'} alt="" />
                                    </button>
                                </div>

                                {/* <!--
            Dropdown menu, show/hide based on menu state.

            Entering: "transition ease-out duration-100"
              From: "transform opacity-0 scale-95"
              To: "transform opacity-100 scale-100"
            Leaving: "transition ease-in duration-75"
              From: "transform opacity-100 scale-100"
              To: "transform opacity-0 scale-95"
          --> */}
                                {dropdown && (
                                    <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
                                        {user && (
                                            <div className='border-b pb-2'>
                                                <span className="block px-4 pt-2 text-sm text-gray-700 capitalize">{user?.firstName} {user?.lastName}</span>
                                                <span className="block px-4 text-sm text-gray-700 font-medium">{user?.email}</span>
                                            </div>

                                        )}
                                        {/* <!-- Active: "bg-gray-100", Not Active: "" --> */}
                                        <div className='border-b mb-2'>
                                        <Link to="/profile/me" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0">Profile </Link>
                                        {user?.role ==='admin' && (
                                            <Link className="block px-4 py-2 text-sm text-gray-700" to='/dashboard'>Dashboard</Link>
                                        )}
                                        
                                        <Link to='/orders/me' className="block px-4 py-2 text-sm text-gray-700">Orders</Link>
                                        <Link to='/settings' className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1">Settings</Link>
                                        </div>
                                        {user ? <Link onClick={signOut} className='block px-4 pb-2 text-sm text-gray-700'>SignOut</Link> : <Link to='/signin' className='block px-4 py-2 text-sm text-gray-700'>SignIn</Link>}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Mobile menu, show/hide based on menu state. --> */}
                {Open && (
                    <div className="sm:hidden" id="mobile-menu">
                        <div className="space-y-1 px-2 pb-3 pt-2">
                            {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                            <Link to='/' className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white" aria-current="page">Home</Link>
                            <Link to='/newsletter' className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">News Letter</Link>
                            <Link to='/support' className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Support</Link>
                            <Link to='/forum' className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Expert Reviews</Link>
                        </div>
                    </div>
                )}

            </nav>



            <div className=' bg-[#2f2e2e] p-1'>
                <Navbar fluid rounded className='bg-[#2f2e2e] container mx-auto'>
                    <Navbar.Brand>
                        <h1 className='text-white text-[1.5rem]'><Link to='/'>Exclusive</Link></h1>
                    </Navbar.Brand>
                    <div className="flex md:order-2 ">
                        <span className={` xs:block hidden mx-[0.63rem] text-white border-[2px] border-[#44dbbd] hover:bg-inherit hover:text-[#44dbbd] duration-[0.9s] p-2 bg-[#44dbbd]`}>
                            <Link to='/buy-now'>Buy Now</Link>
                        </span>
                        <Dropdown
                            arrowIcon={true}
                            inline
                            label={
                                <Avatar alt="User settings" title={user?.firstName} img={user ? user?.photo?.url : 'https://cdn-icons-png.flaticon.com/512/149/149071.png'} rounded />
                            }
                        >
                            {user && (
                                <div>
                                    <Dropdown.Header>
                                        <span className="block text-sm capitalize">{user?.firstName} {user?.lastName}</span>
                                        <span className="block truncate text-sm font-medium">{user?.email}</span>
                                    </Dropdown.Header>
                                    <Dropdown.Item><Link to="/profile/me">Profile</Link></Dropdown.Item>
                                    {user?.role === 'admin' && (
                                        <Dropdown.Item> <Link to='/dashboard'>Dashboard</Link></Dropdown.Item>
                                    )}
                                    <Dropdown.Item><Link to='/orders/me'>Orders</Link></Dropdown.Item>
                                    <Dropdown.Item><Link to="/settings">Settings</Link></Dropdown.Item>
                                    <Dropdown.Item>Earnings</Dropdown.Item>
                                    <Dropdown.Divider />
                                </div>
                            )}
                            <Dropdown.Item>{user ? <Link onClick={signOut}>SignOut</Link> : <Link to='/signin'>SignIn</Link>}</Dropdown.Item>
                        </Dropdown>
                        <h1 className='text-[1.5rem] font-[600] cursor-pointer ms-3 text-[#44dbbd]' title='View Carts' onClick={e => navigate('/cart')}>Cart</h1>
                        <Badge color="info" size="sm">
                            {cartItems.length}
                        </Badge>
                        <Navbar.Toggle />
                    </div>
                    <Navbar.Collapse>
                        <Navbar.Link active className='hover:text-[rgb(250,204,204)] text-white text-[1.1rem]'>
                            <Link to='/'>Home</Link>
                        </Navbar.Link>
                        <Navbar.Link className='hover:text-[rgb(250,204,204)] text-white text-[1.1rem]'><Link to='/newsletter'>News Letter</Link></Navbar.Link>
                        <Navbar.Link className='hover:text-[rgb(250,204,204)] text-white text-[1.1rem]'><Link to='/support'>Support</Link></Navbar.Link>
                        <Navbar.Link className='hover:text-[rgb(250,204,204)] text-white text-[1.1rem]'><Link to='/forum'>Expert Reviews</Link></Navbar.Link>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </div>
    );
}

export default ReactNavbar;
