import React from "react";

import { Link } from "react-router-dom";
const Logo = () => {
  return (
    <div className="border-b-[1px] border-slate-400/25 py-4 ">
      <Link>
        <img
          src="/src/img/logo.svg"
          alt=""
          className="h-[45px] mx-auto cursor-pointer"
        />
      </Link>
    </div>
  );
};

export default Logo;
