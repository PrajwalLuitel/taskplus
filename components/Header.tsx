"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { MagnifyingGlassIcon, UserCircleIcon } from "@heroicons/react/20/solid";
import Avatar from "react-avatar";
import useBoardStore from "@/store/BoardStore";
import fetchSuggestion from "@/utils/fetchSuggestion";

const Header = () => {
  const [board, searchString, setSearchString] = useBoardStore((state) => [
    state.board,
    state.searchString,
    state.setSearchString,
  ]);

  const [loading, setLoading] = useState<boolean>(false);
  const [suggestion, setSuggestion] = useState<string>("");

  useEffect(() => {
    if (board.columns.size === 0) return;

    setLoading(true);

    const fetchSuggestionFunc = async () => {
      const suggestion = await fetchSuggestion(board);
      setSuggestion(suggestion);
      setLoading(false);
    };
    fetchSuggestionFunc();
  }, [board]);

  return (
    <header>
      <div className="flex flex-col md:flex-row items-center p-5 rounded-b-2xl">
        <div
          className="absolute
                            top-0
                            left-0
                            w-full
                            h-96
                           
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
              value={searchString}
              onChange={(e) => setSearchString(e.target.value)}
              className="flex-1 outline-none p-2"
            />
            <button type="submit" hidden>
              Search
            </button>
          </form>

          <Avatar name="Prajwal Luitel" round size="50" color="#003893" />
        </div>
      </div>
      <div className="flex items-center justify-center px-5 py-2 md:py-5">
        <p className="flex items-center text-sm p-5 max-sm:mt-3 font-light pr-5 shadow-xl rounded-xl w-fit bg-white italic max-w-3xl text-[#dc143c]">
          <UserCircleIcon
            className={`inline-block h-10 w-10 text-blue-900 mr-1
          ${loading && "animate-spin"}
          `}
          />
          {suggestion && !loading
            ? suggestion
            : "AI is summarizing your tasks for the day . . ."}
        </p>
      </div>
    </header>
  );
};

export default Header;
