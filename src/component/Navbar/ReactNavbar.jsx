import { Navbar, Button } from 'flowbite-react';
import React from 'react';
import style from '../Navbar/Navbar.module.css'
import { Link } from 'react-router-dom';

const ReactNavbar = () => {
    let token = localStorage.token
    return (
        <div className={style.nav}>
            <div className=' text-center bg-[#657786] text-white text-xs py-2'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <a href="" className='text-white text-lg underline'>ShopNow</a></div>
            <div className=' border-black'>
                <div className=' sticky top-0'>
                <Navbar
                fluid
                rounded
                className=''
            >
                <Navbar.Brand href="https://flowbite-react.com">
                    <h1 className=' text-xl text-black'>Exclusive</h1>
                </Navbar.Brand>
                <div className="flex md:order-2">
                    <Button>
                        <Link>BUY NOW</Link>
                    </Button>
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse>
                    <Navbar.Link
                        active
                        href="#"
                    >
                        <p>
                            HOME
                        </p>
                    </Navbar.Link>
                    <Navbar.Link href="#">
                        <span>
                            NEWSLETTER
                        </span>
                    </Navbar.Link>
                    <Navbar.Link href="#">
                        <span>SUPPORT</span>
                    </Navbar.Link>
                    <Navbar.Link href="#">
                        <span>EXPERTS REVIEWS</span>
                    </Navbar.Link>
                    <Navbar.Link href="#">
                        <div className=' rounded-full h-[1.5rem] w-[1.5rem] bg-red-600'></div>
                    </Navbar.Link>
                    {token && (
                        <Navbar.Link href="#">
                        <span className='text-[17px] text-[#3fb39c] hover:text-[#44dbbd]'><Link to='/signin'>Log In</Link></span>
                    </Navbar.Link>
                    )}
                    
                </Navbar.Collapse>
            </Navbar>
                </div>
            </div>
        </div>
    );
}

export default ReactNavbar;
