import React, { useEffect } from 'react';
import ShopWithExclusive from '../component/ShopwithExclusive/ShopWithExclusive';
import AddToCart from '../component/AddToCart/AddToCart';
import Search from '../component/Search/Search';

const BuyNow = () => {
  return (
    <div>
      <div className='bg-[#f5f5f5] py-[1rem]'></div>
      <div style={{ position: 'sticky',top: '4.5rem', zIndex: '10' }} className='bg-[#f5f5f5]'>
        <Search />
      </div>
      <ShopWithExclusive />
      <div>
        <AddToCart />
      </div>
    </div>
  );
}

export default BuyNow;
