import { Navbar, Button } from 'flowbite-react';
import React from 'react';
import style from '../Navbar/Navbar.module.css'

const ReactNavbar = () => {
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
                        Get started
                    </Button>
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse>
                    <Navbar.Link
                        active
                        href="#"
                    >
                        <p>
                            Home
                        </p>
                    </Navbar.Link>
                    <Navbar.Link href="#">
                        Contact
                    </Navbar.Link>
                    <Navbar.Link href="#">
                        About
                    </Navbar.Link>
                    <Navbar.Link href="#">
                        Signup
                    </Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
                </div>
            </div>
        </div>
    );
}

export default ReactNavbar;
