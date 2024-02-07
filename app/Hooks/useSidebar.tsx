"use client";
import React from "react";
import { useState } from "react";

const useSidebar = () => {
  const [sidebarToggle, setSidebarToggle] = useState(true);
  const handleSidebarToggle = () => {
    setSidebarToggle(!sidebarToggle);
    console.log(sidebarToggle);
  };
  return { sidebarToggle, handleSidebarToggle };
};

export default useSidebar;
