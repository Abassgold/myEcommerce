import { useState } from "react";
import { FaSquareVirus } from "react-icons/fa6";
import { IoHomeSharp } from "react-icons/io5";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { FaArrowsDownToPeople } from "react-icons/fa6";
import { BiSolidCategory } from "react-icons/bi";
import { MdProductionQuantityLimits } from "react-icons/md";
import { BsBorderStyle } from "react-icons/bs"
import { SiZerodha } from "react-icons/si";
import AddProducts from "./AddProducts";
import Users from "./Users/Users";
import Category from "./Category/Category";
import ProductOrders from "./Orders/ProductOrders";
import { useDispatch, useSelector } from "react-redux";
import { changeMenues } from "../Redux/AllProductSlice/productSlice";
import ProductSize from "./productSize/ProductSize";


const Dashboard = () => {

  const [isOpen, setIsOpen] = useState(false);
  const handleClick = function (index) {
    dispatch(changeMenues(index)); 
    setIsOpen(!isOpen);
  }
  const dispatch = useDispatch()
  const { arrMenue } = useSelector(state => state.productSlice)
  const handleClose = () => setIsOpen(false);
  const menu = [
    { name: 'Dashboard', icon: <IoHomeSharp /> },
    { name: 'Customers', icon: <FaArrowsDownToPeople /> },
    { name: 'Category', icon: <BiSolidCategory /> },
    { name: 'Products', icon: <MdProductionQuantityLimits /> },
    { name: 'Sizes', icon: <SiZerodha /> },
    { name: 'Orders', icon: <BsBorderStyle /> }
  ];
  const components = [
    {name: 'dashboard',  comp: ''},
    {name: 'Users',  comp: <Users />},
    {name: 'categories',  comp: <Category />},
    {name: 'products',  comp:<AddProducts />},
    {name: 'product sizes',  comp:<ProductSize />},
    {name: 'orders',  comp: <ProductOrders />}
  ]
  return (
    <>
      <section className="">
        <div className="relative md:hidden mx-auto  text-left px-4">
          <div className="my-6">
            <button type="button" className="inline-flex justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" onClick={e => setIsOpen(!isOpen)}>
              Options
              <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
              </svg>
            </button>
          </div>
          <div className={`absolute ${isOpen ? 'block' : 'hidden'} w-[95%]  duration-1000  z-10 left-0 right-0  origin-top-right divide-y divide-gray-100 bg-gray-100 rounded-md  shadow-lg  focus:outline-none mx-auto top-12`}>
            <ul className="w-full">
              {
                menu.map((item, index) => {
                  const bg = index === arrMenue && 'bg-[#ACA9AC]'
                  return (
                    <li className={`my-2 p-2 cursor-pointer text-[poppins] hover:bg-[#16A34A]  hover:text-[#ffff] rounded-md ${bg}`}>
                      <div className={``} onClick={()=>handleClick(index)}>
                        {item.name}
                      </div>
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </div>
        <div className="md:flex ">
          <aside className={`md:block hidden h-screen bg-[#D8DBE0] duration-700  ${isOpen ? 'w-[18rem]' : 'w-16'} p-2 relative`}>
            <FaRegArrowAltCircleRight className={`absolute ${!isOpen && ' rotate-180 cursor-pointer duration-1000'} right-[-0.8rem] top-[2.5rem] bg-slate-50 rounded-full  text-[#16a34a] text-[1.5rem]`} onClick={e => setIsOpen(!isOpen)} />
            <div className="text-[3rem]  flex items-center gap-x-2 my-2 mb-[3rem]">
              <div>
                <FaSquareVirus className={`text-[#16a34a] scale-100`} />
              </div>
              <h1 className={`${!isOpen && 'scale-0'} duration-1000`}>Admin</h1>
            </div>
            <div>
              <ul className=" font-semibold text-[##2f2e2e]">
                {
                  menu.map((item, index) => {
                    const bg = index === arrMenue && 'bg-[#ACA9AC]'
                    return (
                      <li className={`flex gap-x-4 items-center text-[1.3rem] my-3 p-2 cursor-pointer text-[poppins] hover:bg-[#16A34A]  hover:text-[#ffff] rounded-md ${bg}`} onClick={e => dispatch(changeMenues(index))}>
                        <div className="text-[2rem] mb-2">
                          {item.icon}
                        </div>
                        <div className={`${!isOpen && 'hidden origin-left duration-200'}`}>
                          {item.name}
                        </div>
                      </li>
                    )
                  })
                }
              </ul>
            </div>
          </aside>
          <div className="p-2 text-2xl font-semibold bg-[#ffff] flex-1 h-screen overflow-auto">
            <h1 className=" capitalize">{components[arrMenue].name}</h1>
            <section className=" mt-[2rem]">
              {components[arrMenue].comp}
            </section>
          </div>
        </div>
      </section>
    </>
  )
}

export default Dashboard