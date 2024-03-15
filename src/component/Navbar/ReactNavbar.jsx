import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const ReactNavbar = () => {
    let token = localStorage.token
    const [open, setOpen] = useState(false)
   const {cartItems} = useSelector(state=>state.cartReducer)
   console.log(cartItems.length);

    return (
        <div>
            <div className='bg-[#2f2e2e]'>
                <nav className={`md:w-[90%] w-[95%] mx-auto relative`}>
                    <div className='md:flex justify-between items-center md:py-1 py-4  px-2'>
                        <h1 className='text-white'><Link to='#'>Exclusive</Link></h1>
                        <span className="text-[30px] text-white material-symbols-outlined md:hidden absolute right-0 top-[15px]" onClick={e => setOpen(!open)}>{open ? 'close' : 'menu'}
                        </span>
                        <div className='md:flex md:items-center md:gap-8'>
                            <ul className={`text-[#2f2e2e] md:bg-inherit bg-white md:text-[#cccccc] md:text[15px] text-[17px]   md:z-auto z-[1]  ease-in ${open ? 'top-[3.6rem]' : '-top-20'} md:static absolute md:px-0 md:py-0  p-5 md:visible md:flex md:justify-between md:gap-10 ${open ? 'visible' : 'hidden'} ${open && 'text-blue-800'}`}>
                                <li className='hover:text-[rgb(210,204,204)] py-4 md:my-0 order-1 md:text-[rgb(300,204,204)] text-[#44dbbd]'><Link to='/'>Home</Link></li>
                                <li className='hover:text-[rgb(250,204,204)] py-4 md:my-0 order-2'><Link to='/newsletter'>News Letter</Link></li>
                                <li className='hover:text-[rgb(250,204,204)] py-4 md:my-0 order-3'><Link to='/support'>Support</Link></li>
                                <li className='hover:text-[rgb(250,204,204)] py-4 md:my-0 order-4'><Link to='/forum'>Expert Reviews</Link></li>
                                <li className='py-4 md:my-0 flex gap-2 text-[#44dbbd] md:order-5 -order-1'><Link>{token? <img className={`h-[1.7rem] w-[1.7rem] rounded-full`} src='https://staticimg.titan.co.in/Titan/Catalog/1805QM04_1.jpg?impolicy=pqmed&imwidth=640' alt="" />: <span className="material-symbols-outlined text-[#44dbbd]">account_circle</span>}</Link> {token ? <Link>azeez</Link> : <Link to='/signin'>Log In</Link>}</li>
                            </ul>
                            <span className={`md:static  absolute left-[40%] top-4`}>
                                <span className={`me-5 text-white border-[2px] border-[#44dbbd] hover:bg-inherit hover:text-[#44dbbd] duration-[0.9s] p-2 bg-[#44dbbd]`}>
                                    <Link>Buy Now</Link>
                                </span>
                                <button className='text-[13px] text-[#44dbbd]'>Cart <span className='bg-white text-[#44dbbd] p-[1px] rounded-full'>{cartItems.length}</span></button>
                            </span>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default ReactNavbar;
