import { useDropdownStore } from "@/app/Stores/Store";
import Link from "next/link";
import React from "react";

const Dropdown = () => {
  const dropdown = useDropdownStore((state) => state.dropdown);
  return (
    <ul
      className={`mt-3 fixed top-10 right-2 p-3 bg-slate-50 shadow-md ${
        dropdown ? "block" : "hidden"
      } w-52 flex flex-col`}
    >
      <Link href="/" className="hover:font-medium ">
        Profile
      </Link>
      <Link href="/" className="hover:font-medium ">
        Settings
      </Link>
      <Link href="/" className="hover:font-medium ">
        Logout
      </Link>
    </ul>
  );
};

export default Dropdown;
