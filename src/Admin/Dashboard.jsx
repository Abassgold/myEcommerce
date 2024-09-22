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
import Size from "./Sizes/sizes";
import ProductOrders from "./Orders/ProductOrders";
import { useDispatch, useSelector } from "react-redux";
import { changeMenues } from "../Redux/AllProductSlice/productSlice";


const Dashboard = () => {

  const [isOpen, setIsOpen] = useState(true);
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
    '',
    <Users />,
    <Category />,
    <AddProducts />,
    <Size />,
    <ProductOrders />
  ]
  return (
    <>
      <section className="">
        <div className="flex ">
          <aside className={`h-screen bg-[#D8DBE0] duration-700  ${isOpen ? 'w-[18rem]' : 'w-16'} p-2 relative`}>
            <FaRegArrowAltCircleRight className={`absolute ${!isOpen && ' rotate-180 cursor-pointer duration-1000'} right-[-0.8rem] top-[2.5rem] bg-slate-50 rounded-full  text-[#16a34a] text-[1.5rem]`} onClick={e => setIsOpen(!isOpen)} />
            <div className="text-[3rem]  flex items-center gap-x-2 my-2 mb-[3rem]">
              <div>
                <FaSquareVirus className={`text-[#16a34a] scale-100`} />
              </div>
              <h1 className={`${!isOpen && 'scale-0'} duration-1000`}>Designer</h1>
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
          <div className="p-7 text-2xl font-semibold bg-[#ffff] flex-1 h-screen overflow-auto">
            <h1>Container</h1>
            <section>
              {components[arrMenue]}
            </section>
          </div>
        </div>
      </section>
    </>
  )
}

export default Dashboard