import React from 'react';
import Shop from '../component/Shop/Shop';
import Service from '../component/Service/Service';
import ShopExclusive from '../component/ShopExclusive/ShopExclusive';

const Homepage = () => {
  return (
    <>
      <Shop />
      <div className=' pt-[10rem] pb-[5rem]'>
        <Service/>
      </div>
      <div className='py-[15rem] text-[42px] font-[300] text-white bg-black text-center'>
        <h1>Stylish Design</h1>
      </div>
      <ShopExclusive/>
    </>
  );
}

export default Homepage;
