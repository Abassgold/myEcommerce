import React from 'react'
import style from './Checkout.module.css'
import { Link } from 'react-router-dom'
const CheckoutSteps = ({ Checkout }) => {
  return (
    <div>
      <div className='flex justify-between gap-1 items-center'>
        <div className='flex-1'>
          <Link to={!Checkout ? '/' : '#3'} className='z-[-100]'>
            <div className={style.parent}>
              <div className={Checkout ? style.firstChild : style.firstChild1}></div>
              <div className={Checkout ? style.secondChild : style.secondChild1}>Shipping</div>
              <div className={Checkout ? style.thirdChild : style.thirdChild1}></div>
            </div>
          </Link>
        </div>
        <div className='flex-1'>
          <Link to='' className='z-[-100]'>
            <div className={style.parent}>
              <div className={style.firstChild}></div>
              <div className={style.secondChild}>Confirm Order</div>
              <div className={style.thirdChild}></div>
            </div>
          </Link>
        </div>
        <div className='flex-1'>
          <Link to='' className='z-[-100]'>
            <div className={style.parent}>
              <div className={style.firstChild}></div>
              <div className={style.secondChild}>Payment</div>
              <div className={style.thirdChild}></div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CheckoutSteps