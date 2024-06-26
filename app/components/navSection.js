import React from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";

const NavBar = ({ darkMode, setDarkMode }) => {
  return (
    <nav className="p-10 mb-12 flex justify-between dark:text-white">
      <h1 className="font-burtons text-xl">DEVELOPED BY UTSAV</h1>
      <ul className="flex items-center">
        <li>
          <BsFillMoonStarsFill
            onClick={() => setDarkMode(!darkMode)}
            className="cursor-pointer text-2xl"
          />
        </li>
        <li>
          <a
            className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
            href="/Sooraj_Resume_2024.pdf"
            target="_blank"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
