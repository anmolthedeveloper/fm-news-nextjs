"use client";
import HeaderContent from "@/components/HeaderContent";
import Navbar from "@/components/Navbar";
import NewContent from "@/components/NewContent";
import OtherContent from "@/components/OtherContent";
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
      <div className="p-3 px-4 sm:px-32 sm:py-14">
        <Navbar isActive={isActive} isActiveHandler={isActiveHandler} />
        <div className="sm:flex sm:my-7">
          <HeaderContent isActive={isActive} />
          <NewContent />
        </div>
        <OtherContent />
      </div>
    </div>
  );
}
