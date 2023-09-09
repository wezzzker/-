import React from "react";
import { sidebarData } from "./sidebarData";

import { NavLink } from "react-router-dom";
import Logo from "../Logo";

const img =
  "https://images.beastsofwar.com/2016/08/Dungeonscape-Dungeon-2-1024x682.jpg";
const Sidebar = () => {
  return (
    <aside
      style={{ backgroundImage: `url(${img})` }}
      className={`h-full w-[260px] bg-cover bg-no-repeat bg-center fixed z-20`}
    >
      <nav className="bg-black/70 h-full w-full">
        {/*  */}
        <Logo />
        <ul className="pt-[10px] h-full w-full ">
          {sidebarData.map((data, key) => {
            return (
              <li key={key} className="h-[50px] ">
                <NavLink
                  to={data.link}
                  className="flex group hover:scale-105 items-center  gap-4 mx-[15px] my-[5px] px-[15px] py-[10px] rounded-md h-full  text-lg font-normal text-slate-200  hover:cursor-pointer  hover:bg-slate-200/30 transition-all duration-[0.15s] ease-in"
                >
                  <div>{data.icon}</div>
                  <div className="group-hover:font-medium">{data.title}</div>
                </NavLink>
              </li>
            );
          })}
        </ul>
        {/*  */}
      </nav>
    </aside>
  );
};

export default Sidebar;
