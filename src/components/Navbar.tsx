"use client";
import Image from "next/image";
export interface props {
  isActive: boolean;
  isActiveHandler: VoidFunction;
}
export default function Navbar(props: props) {
  return (
    <nav className="py-3 flex justify-between relative items-center">
      <Image
        src="./assets/images/logo.svg"
        alt="logo image"
        width={100}
        height={100}
        className="sm:w-20 w-10"
      />
      <NavElements {...props} />
    </nav>
  );
}

function NavElements({ isActive, isActiveHandler }: props) {
  return (
    <div>
      <Image
        src={
          isActive
            ? "./assets/images/icon-menu-close.svg"
            : "./assets/images/icon-menu.svg"
        }
        width={100}
        height={100}
        alt="menu icon"
        className={`sm:w-20 w-7 h-6 sm:hidden z-10 ${
          isActive ? "fixed right-3 top-6" : ""
        }`}
        onClick={isActiveHandler}
      />
      <div
        className={`${
          isActive
            ? "flex flex-col fixed top-0 right-0 w-2/3 h-[100vh] bg-white"
            : ""
        }`}
      >
        <ul className={`sm:flex ${isActive ? "flex-col pt-28 p-5" : "hidden"}`}>
          <li
            className={`sm:px-5 hover:text-softRed ${
              isActive ? "mb-5 text-lg" : ""
            }`}
          >
            Home
          </li>
          <li
            className={`sm:px-5 hover:text-softRed ${
              isActive ? "mb-5 text-lg" : ""
            }`}
          >
            News
          </li>
          <li
            className={`sm:px-5 hover:text-softRed ${
              isActive ? "mb-5 text-lg" : ""
            }`}
          >
            Popular
          </li>
          <li
            className={`sm:px-5 hover:text-softRed ${
              isActive ? "mb-5 text-lg" : ""
            }`}
          >
            Treding
          </li>
          <li
            className={`sm:px-5 hover:text-softRed ${
              isActive ? "mb-5 text-lg" : ""
            }`}
          >
            Categories
          </li>
        </ul>
      </div>
    </div>
  );
}
