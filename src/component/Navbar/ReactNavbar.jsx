import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import CartComponent from '../CartComponent/CartComponent';
import { setSlide } from '../../Redux/SlideSlice/Slide';
import { logOut } from '../../Redux/signInSlice/signinSlce';
const ReactNavbar = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { user } = useSelector(state => state.signinSlce)
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const { cartItems } = useSelector(state => state.cartReducer);
    const { isOpen } = useSelector(state => state.Slide)
    const signOut = () => {
        setTimeout(() => {
            dispatch(logOut())
            navigate('/')
        }, (1000));
    }
    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };
    return (
        <div>
            <div className='bg-[#2f2e2e]'>
                <nav className={`md:w-[90%] w-[95%] mx-auto relative`}>
                    <div className='md:flex justify-between items-center md:py-1 py-4  px-2'>
                        <h1 className='text-white'><Link to='#'>Exclusive</Link></h1>
                        <span className="text-[30px] text-white material-symbols-outlined md:hidden absolute right-0 top-[15px]" onClick={toggleDropdown}>{dropdownOpen ? 'close' : 'menu'}</span>
                        <div className='md:flex md:items-center md:gap-8'>
                            <ul className={`text-[#2f2e2e] md:bg-inherit bg-white md:text-[#cccccc] md:text[15px] text-[17px]   md:z-auto z-[1]  ease-in ${dropdownOpen ? 'top-[3.6rem]' : '-top-20'} md:static absolute md:px-0 md:py-0  p-5 md:visible md:flex md:justify-between md:gap-10 ${dropdownOpen ? 'visible' : 'hidden'} ${dropdownOpen && 'text-blue-800'}`}>
                                <li className='hover:text-[rgb(210,204,204)] py-4 md:my-0 order-1 md:text-[rgb(300,204,204)] text-[#44dbbd]'><Link to='/'>Home</Link></li>
                                <li className='hover:text-[rgb(250,204,204)] py-4 md:my-0 order-2'><Link to='/newsletter'>News Letter</Link></li>
                                <li className='hover:text-[rgb(250,204,204)] py-4 md:my-0 order-3'><Link to='/support'>Support</Link></li>
                                <li className='hover:text-[rgb(250,204,204)] py-4 md :my-0 order-4'><Link to='/forum'>Expert Reviews</Link></li>
                                <li className='py-4 md:my-0 flex gap-2 text-[#44dbbd] md:order-5 -order-1'>
                                    <span>
                                        <div>
                                            {user ?
                                                <img title={user?.firstName} className={`h-[1.7rem] w-[1.7rem] rounded-full`} src={user?.photo?.url} alt="" onClick={toggleDropdown} />
                                                : <span className="material-symbols-outlined text-[#44dbbd]">account_circle</span>
                                            }
                                            {
                                               user && dropdownOpen && (
                                                    <div className={`absolute mt-[0.5rem] bg-[#2f2e2e] border-[white] border-[0.5px] p-2 text-[1.2rem]`}>
                                                        <ul>
                                                            <li className='my-[0.25rem]'><Link to="/profile/me">Profile</Link></li>
                                                            {user?.role !== 'admin' ? (<li className='my-[0.25rem]'><Link to='/orders/me'>Orders</Link></li>) : (<li className='my-[0.25rem]'><Link to='/dashboard'>Dashboard</Link></li>)}
                                                            <li className='my-[0.25rem]'><Link to="/settings">Settings</Link></li>
                                                        </ul>
                                                    </div>
                                                )
                                            }
                                        </div>
                                    </span>
                                    {user ? <Link onClick={signOut}>SignOut</Link> : <Link to='/signin'>SignIn</Link>}
                                </li>
                            </ul>
                            <span className={`md:static  absolute left-[40%] top-4`}>
                                <span className={`me-5 text-white border-[2px] border-[#44dbbd] hover:bg-inherit hover:text-[#44dbbd] duration-[0.9s] p-2 bg-[#44dbbd]`}>
                                    <Link>Buy Now</Link>
                                </span>
                                <button className='text-[13px] text-[#44dbbd]' onClick={() => {
                                    setTimeout(() => {
                                        dispatch(setSlide())
                                    }, 1000);
                                }}> <span className='flex items-center text-[1rem]'>
                                        Cart<div className='bg-white text-[#44dbbd] text-center font-[700] text-[0.5rem] pt-[0.1rem] h-[1rem] w-[1rem] rounded-full'>{cartItems.length}</div>
                                    </span>
                                </button>
                            </span>
                        </div>
                    </div>
                </nav>
            </div>
            <div className={`${isOpen ? 'translate-x-[0]' : 'translate-x-[30rem]'} absolute  hidden top-0 md:right-0 z-[50] text-white transition duration-1000 ease-in-out`}>
                <CartComponent />
            </div>
        </div>
    );
}

export default ReactNavbar;
