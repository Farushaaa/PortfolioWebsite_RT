"use client";
import React from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useTheme } from "next-themes";

const Navbar = () => {
  const { resolvedTheme, setTheme } = useTheme();
  return (
    <section>
      <nav className="py-10 mb-12 flex justify-between">
        <h1 className="text-l font-burtons">rahmuni</h1>
        <ul className="flex items-center">
          <li>
            <BsFillMoonStarsFill
              className="cursor-pointer text-2xl"
              onClick={() =>
                setTheme(resolvedTheme === "dark" ? "light" : "dark")
              }
            />
          </li>
          <li>
            <a
              className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-3 py-1 rounded-md ml-8"
              href="#"
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Navbar;
