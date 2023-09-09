import React from "react";

const Header = () => {
  return (
    <header className=" h-[78px] w-full pl-[280px] pr-[20px] text-slate-800/90   flex justify-between items-center border-b-[1px]  00/25">
      <div className="flex gap-8 items-center">
        <div className="font-semibold text-lg">Dashboard</div>
        <div>Search</div>
      </div>

      <ul className="flex gap-6">
        <li className="bg-lime-600 h-full p-1 rounded-sm cursor-pointer hover:rounded-lg transition-all duration-[0.3s]">
          Buy now
        </li>
        <li className="p-1 cursor-pointer">Account</li>
      </ul>
    </header>
  );
};

export default Header;
