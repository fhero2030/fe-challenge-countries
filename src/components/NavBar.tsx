import React, { useEffect, useState } from "react";

const NavBar = () => {
  const [theme, setTheme] = useState<string | null>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const themeToggle = () => {
    console.log("clicked");
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  console.log(theme);

  return (
    <header className="mb-10 max-w-full shadow-md dark:bg-dark-element">
      <nav className="mx-auto flex max-w-[1440px] justify-between px-4 py-6 ">
        <h1 className="text-xl font-bold">Where in the world</h1>

        <button onClick={themeToggle}>Toggle</button>
        <p className="text-sm font-semibold">Dark mode</p>
      </nav>
    </header>
  );
};

export default NavBar;
