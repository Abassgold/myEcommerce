import React, { useEffect } from 'react';
import ShopWithExclusive from '../component/ShopwithExclusive/ShopWithExclusive';
import AddToCart from '../component/AddToCart/AddToCart';
import Search from '../component/Search/Search';
import { Helmet } from 'react-helmet';

const BuyNow = () => {
  return (
    <div>
      <Helmet>
        <title>Buy-Now</title>
      </Helmet>
      <title>My Site: Contact Us</title>
      <div className='bg-[#f5f5f5] py-[1rem]'></div>
      <div style={{ position: 'sticky', top: '4.5rem', zIndex: '10' }} className='bg-[#f5f5f5]'>
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
