"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { CgNotes } from "react-icons/cg";
import { FaRegTrashAlt } from "react-icons/fa";
import { MdOutlineArchive } from "react-icons/md";
import { MdModeEdit } from "react-icons/md";
import { MdAlarm } from "react-icons/md";
import { useToggleStore } from "@/app/store";

const Sidebar = () => {
  const sidebarToggle = useToggleStore((state) => state.sidebarToggle);

  return (
    <div className="">
      <div className=" w-auto h-screen">
        <ul className=" space-y-3">
          <li>
            <Link
              id=""
              className="px-5 h-8   flex items-center gap-3 target:bg-red-50 hover:bg-stone-200 rounded-r-full"
              href=""
            >
              <CgNotes className="md:text-lg" />
              {<p className={`${sidebarToggle ? "flex" : "hidden"}`}>Notes</p>}
            </Link>
          </li>
          <li>
            <Link
              id=""
              className="px-5 h-8   flex items-center gap-3 target:bg-red-50 hover:bg-stone-200 rounded-r-full"
              href="reminders"
            >
              <MdAlarm className="md:text-lg" />
              {sidebarToggle && <p>Reminders</p>}
            </Link>
          </li>
          <li>
            <Link
              id=""
              className="px-5 h-8   flex items-center gap-3 target:bg-red-50 hover:bg-stone-200 rounded-r-full"
              href=""
            >
              <MdModeEdit className="md:text-lg" />
              {sidebarToggle && <p>Edit labels</p>}
            </Link>
          </li>
          <li>
            <Link
              id=""
              className="px-5 h-8   flex items-center gap-3 target:bg-red-50 hover:bg-stone-200 rounded-r-full"
              href=""
            >
              <MdOutlineArchive className="md:text-lg" />
              {sidebarToggle && <p>Archive</p>}
            </Link>
          </li>
          <li>
            <Link
              id=""
              className="px-5 h-8   flex items-center gap-3 target:bg-red-50 hover:bg-stone-200 rounded-r-full"
              href=""
            >
              <FaRegTrashAlt className="md:text-lg" />
              {sidebarToggle && <p>Trash</p>}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
