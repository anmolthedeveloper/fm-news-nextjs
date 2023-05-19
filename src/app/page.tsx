"use client";
import Navbar from "@/components/Navbar";
import { useState } from "react";

export default function Home() {
  var [isActive, setIsActive] = useState(false);
  function isActiveHandler() {
    setIsActive(!isActive);
  }
  return (
    <div className="relative">
      <div
        className={`${isActive ? "w-[100vw] h-[100vh] bg-black/60 fixed" : ""}`}
      ></div>
      <div className="p-3 sm:px-20 sm:py-10">
        <Navbar isActive={isActive} isActiveHandler={isActiveHandler} />
      </div>
    </div>
  );
}
