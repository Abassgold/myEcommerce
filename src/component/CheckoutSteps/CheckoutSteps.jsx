import React from 'react'
import style from './Checkout.module.css'
import { Link } from 'react-router-dom'
const CheckoutSteps = ({ checkout, confirmOrder, payment}) => {
  return (
    <div className='my-[3rem]'>
      <div className='flex justify-between gap-1 items-center'>
        <div className='flex-1'>
          <Link to={checkout ? '/checkout' : '#'} className='z-[-100]'>
            <div className={style.parent}>
              <div className={checkout ? style.firstChild : style.firstChild1}></div>
              <div className={checkout ? style.secondChild : style.secondChild1}>Shipping</div>
              <div className={checkout ? style.thirdChild : style.thirdChild1}></div>
            </div>
          </Link>
        </div>
        <div className='flex-1'>
          <Link to={confirmOrder? '/order/confirm' : '#'} className='z-[-100]'>
            <div className={style.parent}>
              <div className={confirmOrder? style.firstChild : style.firstChild1}></div>
              <div className={confirmOrder? style.secondChild: style.secondChild1}>Confirm Order</div>
              <div className={confirmOrder? style.thirdChild : style.thirdChild1}></div>
            </div>
          </Link>
        </div>
        <div className='flex-1'>
          <Link to={payment? '/payment' : '#'} className='z-[-100]'>
            <div className={ style.parent}>
              <div className={payment? style.firstChild:style.firstChild1}></div>
              <div className={payment? style.secondChild: style.secondChild1}>Payment</div>
              <div className={payment? style.thirdChild:style.thirdChild1}></div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CheckoutSteps