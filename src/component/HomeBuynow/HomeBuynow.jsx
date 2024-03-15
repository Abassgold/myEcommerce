import React from 'react'

const HomeBuynow = () => {
  return (
    <div>
      <div className='flex justify-between text-[1rem] my-4'>
        <div>
          <span className=' tracking-widest'>Home/Buy/{ }</span>
        </div>
        <div className='flex items-center gap-2'>
          <span class="material-symbols-outlined">
            arrow_back_ios_new
          </span>
          Prev
          <span>|</span>
          Next
          <span class="material-symbols-outlined">
            arrow_forward_ios
          </span>
        </div>
      </div>
      <div>
        <div className='flex'>
          <div>
            <div>
              <img src="" alt="" />
            </div>
          </div>
          <div>
            <div>
              <h1>EZ 20000</h1>
              <small>SKU 001</small><br />
              <small>QUantity</small>
              <div>1</div>
              <button>Add to Cart</button>
              <button>Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeBuynow;