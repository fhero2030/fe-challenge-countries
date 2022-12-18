import React from "react";

const NavBar = () => {
  return (
    <header className="mb-10 max-w-full shadow-md">
      <nav className="mx-auto flex max-w-[1440px] justify-between px-4 py-6 ">
        <h1 className="text-xl font-bold">Where in the world</h1>

        <p className="text-sm font-semibold">Dark mode</p>
      </nav>
    </header>
  );
};

export default NavBar;
