"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { CgNotes } from "react-icons/cg";
import { FaRegTrashAlt } from "react-icons/fa";
import { MdOutlineArchive } from "react-icons/md";
import { MdModeEdit } from "react-icons/md";
import { MdAlarm } from "react-icons/md";
import useSidebar from "@/app/Hooks/useSidebar";

const Sidebar = () => {
  const { sidebarToggle, handleSidebarToggle } = useSidebar();
  const [isTrue, setIsTrue] = useState(true);
  useEffect(() => {
    setIsTrue(sidebarToggle);
  }, [handleSidebarToggle]);
  console.log(isTrue);
  return (
    <div>
      {isTrue ? (
        <div className=" w-72 h-screen">
          <ul>
            <li>
              <Link
                className="px-5 py-2  flex items-center gap-3 active:bg-red-50 hover:bg-stone-200 rounded-r-full"
                href=""
              >
                <CgNotes className="md:text-lg" />
                Notes
              </Link>
            </li>
            <li>
              <Link
                className="px-5 py-2  flex items-center gap-3 focus:bg-red-50 hover:bg-stone-200 rounded-r-full"
                href=""
              >
                <MdAlarm className="md:text-lg" />
                Reminders
              </Link>
            </li>
            <li>
              <Link
                className="px-5 py-2  flex items-center gap-3 focus:bg-red-50 hover:bg-stone-200 rounded-r-full"
                href=""
              >
                <MdModeEdit className="md:text-lg" />
                Edit labels
              </Link>
            </li>
            <li>
              <Link
                className="px-5 py-2  flex items-center gap-3 focus:bg-red-50 hover:bg-stone-200 rounded-r-full"
                href=""
              >
                <MdOutlineArchive className="md:text-lg" />
                Archive
              </Link>
            </li>
            <li>
              <Link
                className="px-5 py-2  flex items-center gap-3 focus:bg-red-50 hover:bg-stone-200 rounded-r-full"
                href=""
              >
                <FaRegTrashAlt className="md:text-lg" />
                Trash
              </Link>
            </li>
          </ul>
        </div>
      ) : (
        <div className=" w-auto h-screen">
          <ul>
            <li>
              <Link
                className="px-5 py-2  flex items-center gap-3 active:bg-red-50 hover:bg-stone-200 rounded-r-full"
                href=""
              >
                <CgNotes className="md:text-lg" />
              </Link>
            </li>
            <li>
              <Link
                className="px-5 py-2  flex items-center gap-3 focus:bg-red-50 hover:bg-stone-200 rounded-r-full"
                href=""
              >
                <MdAlarm className="md:text-lg" />
              </Link>
            </li>
            <li>
              <Link
                className="px-5 py-2  flex items-center gap-3 focus:bg-red-50 hover:bg-stone-200 rounded-r-full"
                href=""
              >
                <MdModeEdit className="md:text-lg" />
              </Link>
            </li>
            <li>
              <Link
                className="px-5 py-2  flex items-center gap-3 focus:bg-red-50 hover:bg-stone-200 rounded-r-full"
                href=""
              >
                <MdOutlineArchive className="md:text-lg" />
              </Link>
            </li>
            <li>
              <Link
                className="px-5 py-2  flex items-center gap-3 focus:bg-red-50 hover:bg-stone-200 rounded-r-full"
                href=""
              >
                <FaRegTrashAlt className="md:text-lg" />
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
