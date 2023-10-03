"use client";

import Image from "next/image";
import { MagnifyingGlassIcon, UserCircleIcon } from "@heroicons/react/20/solid";
import Avatar from "react-avatar";

const Header = () => {
  return (
    <header>
      <div className="flex flex-col md:flex-row items-center p-5 bg-green-300/10 rounded-b-2xl">

              <div
                  className="absolute
                            top-0
                            left-0
                            w-full
                            h-96
                            bg-gradient-to-br
                            from-blue-400
                            to-green-600
                            rounded-md
                            filter
                            blur-3xl
                            opacity-40
                            -z-50
                            "
              />

        <Image
          src="/logo.svg"
          alt="taskplus logo"
          width={400}
          height={180}
          className="w-44 md:w-56 pb-10 md:pb-0"
        />
        <div className="flex items-center space-x-5 flex-1 justify-end w-full">
          <form className="flex items-center space-x-5 bg-white rounded-md p-2 shadow-md flex-1 md:flex-initial">
            <MagnifyingGlassIcon className="h-6 w-6 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="flex-1 outline-none p-2"
            />
            <button type="submit" hidden>
              Search
            </button>
          </form>

          <Avatar name="Prajwal Luitel" round size="50" color="#029c56" />
        </div>
      </div>
      <div className="flex items-center justify-center px-5 py-2 md:py-5">
        <p className="flex items-center text-sm p-5 max-sm:mt-3 font-light pr-5 shadow-xl rounded-xl w-fit bg-white italic max-w-3xl text-[#029c56]">
          <UserCircleIcon className="inline-block h-10 w-10 text-[#029c56] mr-1" />
          GPT is summarizing your tasks for the day . . .
        </p>
      </div>
    </header>
  );
};

export default Header;
