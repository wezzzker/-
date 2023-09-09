import React from "react";
import { MdDataUsage, MdHome } from "react-icons/md";

export const sidebarData = [
  {
    title: "Home",
    icon: <MdHome size={28} />,
    link: "/",
  },

  {
    title: "Data",
    icon: <MdDataUsage size={28} />,
    link: "/data",
  },
];
