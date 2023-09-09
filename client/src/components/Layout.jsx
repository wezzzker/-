import React from "react";
import { Link, Outlet } from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";
import Header from "./Header";
import Footer from "./Footer/Footer";
const Leyout = () => {
  return (
    <>
      <Sidebar />
      {/* <div className="h-full w-full  flex flex-col pl-[260px]"> */}
      <Header />
      <main className="pl-[280px] pr-[20px] py-6 flex-1 bg-slate-100">
        <Outlet />
      </main>
      <Footer />
      {/* </div> */}
    </>
  );
};

export default Leyout;
{
  /* <Sidebar />
<div className="h-full w-full pl-[260px] flex flex-col">
  <Header />
  <main className="flex-1 px-[15px] py-[30px]">
    <Outlet />
  </main>
  <Footer />
</div> */
}
