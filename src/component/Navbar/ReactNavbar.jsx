import { useState } from 'react';
import { Button, Navbar, Avatar, Dropdown, Badge } from "flowbite-react";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import CartComponent from '../CartComponent/CartComponent';
import { logOut } from '../../Redux/signInSlice/signinSlce';
const ReactNavbar = () => {
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
                        <h1 className='text-[1.5rem] font-[600] ms-3 text-[#44dbbd]'>Cart</h1>
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
