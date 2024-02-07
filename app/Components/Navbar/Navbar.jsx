'use client'
import React, { useState } from 'react'
import Link from "next/link";
import { IoPersonCircle } from "react-icons/io5";
import { IoGridOutline } from "react-icons/io5";
import { IoListOutline } from "react-icons/io5";
import { FaBars } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";

const Navbar = () => {
    const [toggle, setToggle] = useState(true)
    const handleToggle = ()=>{
        setToggle(!toggle)
    }
  return (
    <div className="flex items-center gap-5 justify-between">
          <div className=" flex items-center gap-2 justify-between">
            <FaBars />
            <Link href="/" className=" text-xl font-serif font-semibold">
              Diligite Keep
            </Link>
          </div>

          <div className="flex-1 hidden sm:flex ">
            <input
              type="text"
              placeholder={` Search`}
              className="input focus:bg-white focus:border-0 h-[44px] w-full  bg-slate-100"
            />
          </div>

          <div className='flex items-center gap-5'>
          <IoSearchOutline className='flex sm:hidden' />
          <div className=' cursor-pointer' onClick={handleToggle}>
          {toggle? <IoGridOutline />:
          <IoListOutline />}
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <IoPersonCircle size={44} />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
          </div>
        </div>
  )
}

export default Navbar