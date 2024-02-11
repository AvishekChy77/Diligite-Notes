"use client";
import React, { useContext, useState } from "react";
import Link from "next/link";
import { IoPersonCircle } from "react-icons/io5";
import { IoGridOutline } from "react-icons/io5";
import { IoListOutline } from "react-icons/io5";
import { FaBars } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
import { useDropdownStore, useToggleStore } from "@/app/Stores/Store";
import Dropdown from "./Dropdown";

const Navbar = () => {
  const [toggle, setToggle] = useState(true);

  const handleSidebarToggle = useToggleStore((state) => state.setSidebarToggle);
  const handleDropdown = useDropdownStore((state) => state.setDropdown);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <div className="fixed top-0 w-full bg-white px-5 py-2 flex items-center gap-5 justify-between shadow">
        <div className="flex items-center gap-3 justify-between">
          <FaBars onClick={handleSidebarToggle} />
          <Link href="/" className=" text-xl font-serif font-semibold">
            Diligite Keep
          </Link>
        </div>

        <div className="flex-1 hidden sm:flex">
          <input
            type="text"
            placeholder={` Search`}
            className="input focus:bg-white rounded focus:border-0 h-[44px] w-full bg-slate-100"
          />
        </div>

        <div className="flex items-center gap-5">
          <IoSearchOutline className="flex sm:hidden" />
          <div className="cursor-pointer" onClick={handleToggle}>
            {toggle ? <IoGridOutline /> : <IoListOutline />}
          </div>
          <div role="button" className="">
            <div onClick={handleDropdown} className="w-10 rounded-full">
              <IoPersonCircle size={44} />
            </div>
          </div>
        </div>
      </div>
      <Dropdown />
    </>
  );
};

export default Navbar;
