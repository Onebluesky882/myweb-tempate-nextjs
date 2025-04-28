"use client";

import { ModeToggle } from "./ModeToggle";

const Header = () => {
  return (
    <div className="grid grid-cols-5">
      <div className="col-span-1">logo</div>
      <div className="col-span-3">search </div>
      <div className="col-span-1">button singin up </div>
      <ModeToggle />
    </div>
  );
};
export default Header;
