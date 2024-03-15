import React, { useEffect } from 'react';
import ShopWithExclusive from '../component/ShopwithExclusive/ShopWithExclusive';
import AddToCart from '../component/AddToCart/AddToCart';

const BuyNow = () => {
  return (
    <div>
      <ShopWithExclusive />
      <div>
        <AddToCart />
      </div>
    </div>
  );
}

export default BuyNow;
