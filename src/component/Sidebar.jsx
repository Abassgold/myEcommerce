import React from 'react';
import arrow from '../images/arrow.png'
import cross from '../images/cross.png'
import { useState } from 'react';

const Sidebar = () => {
    const [open, setOpen] = useState(true)
    const openClose = () =>{
        setOpen(!open)
        console.log(open)
    }
    const Menus = [
        {title: 'Dashboard', src : 'Chart_fill'},
        {title: 'inbox', src : 'Chart'},
        {title: 'Account', src : 'User', gap: true},
        {title: 'Schedule', src : 'Calendar'},
        {title: 'Search', src : 'Search'},
        {title: 'Analytic', src : 'Chart'},
        {title: 'Files', src : 'Folder', gap: true},
        {title: 'Setting', src : 'Setting'}
    ]
  return (
    <div className='flex bg-red-50'>
      <div className={` ${open ? 'w-72' : 'w-20'} duration-300 p-5 pt-8 h-screen bg-purple-500 relative`}>
        <img src={arrow} alt="" className={`bg-white absolute cursor-pointer -right-3 top-9 w-7 border-black rounded-full ${!open && 'rotate-180'}`} onClick={openClose}/>
      </div>
      <div className='bg-green-400 flex gap-x-4 items-center'>
        <img src={cross} alt="" className={`cursor-pointer duration-500`}/>
        <h1 className={`text-white origin-left font-medium text-xl duration-300 ${!open && 'scale-0'}`}>Designer</h1>
      </div>
      <ul>
        tiugyihuy
        {Menus.map((menu, index)=>{
            <li key={index}>
                rgytgtyyuyuyugyu
                {menu.title}
            </li>
        })}
      </ul>
      <div className='p-7 text-2xl font-semibold flex-1 h-screen'>
      <h1>Home page</h1>
      </div>
    </div>
  );
}

export default Sidebar; 
