import { useState } from "react";
import {
    HiChartPie,
    HiClipboard,
    HiCollection,
    HiInformationCircle,
    HiLogin,
    HiPencil,
    HiSearch,
    HiShoppingBag,
    HiUsers,
  } from "react-icons/hi";
const Dashboard = () => {
    const [isOpen, setIsOpen] = useState(true);
  const handleClose = () => setIsOpen(false);
  return (
    <>
    <section className="flex">
        <aside className=" py-4">
            <ul>
                <li className="my-2 text-[1.5rem] hover:text-white hover:bg-[#374151] px-4 py-1 rounded-md">
                    <div className="flex items-center ">
                    <HiChartPie/>
                    <div className="mx-1">Dashoboard</div>
                    </div>
                </li>
            </ul>
        </aside>
        <div></div>
    </section>
    </>
  )
}

export default Dashboard