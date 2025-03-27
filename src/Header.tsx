import { Dispatch, SetStateAction, useState } from "react";
import { CiDark } from "react-icons/ci";
import { FaBars, FaTimes } from "react-icons/fa";

interface Props {
  darkMode: boolean;

  setDarkMode: Dispatch<SetStateAction<boolean>>;
}
const nav: string[] = ["Features", "Team", "Sign in"];
const Header = ({ darkMode, setDarkMode }: Props) => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  return (
    <header className="base-flex p-5 container font-raleway">
      <Logo darkMode={darkMode} />

      {
        // Menu
        // Features
        // Team
        // The menu should be hidden on large screens
      }
      <div className="xs:basis-[70%] lg:basis-[40%] flex items-center gap-6 justify-end text-black dark:text-lightGray ">
        <div
          className="
             max-w-60 [&_p]:font-semibold hidden sm:base-flex basis-[60%] "
        >
          {nav.map((n, i) => {
            return (
              <p
                className="dark:hover:text-white hover:text-slate-600 cursor-pointer"
                key={i}
              >
                {n}
              </p>
            );
          })}
        </div>
        <div
          className="sm:hidden cursor-pointer text-xl dark:hover:text-white hover:shadow hover:shadow-slate-700"
          onClick={() => setShowMenu(!showMenu)}
        >
          {!showMenu && <FaBars />}
        </div>

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 bg-gray-200 dark:bg-gray-800 hover:opacity-70 rounded-lg"
        >
          <CiDark
            className={darkMode ? "text-white" : "text-black"}
            size={20}
          />
        </button>
      </div>
      {showMenu && (
        <article className="sm:hidden  fixed p-4 top-0 right-0 bottom-0  w-[90%] bg-[#181f2a] dark:text-white">
          <div
            className="w-fit hover:text-white"
            onClick={() => setShowMenu(!showMenu)}
          >
            <FaTimes
              size={32}
              color="hover:text-white"
              className=" cursor-pointer "
            />
          </div>
          <article className="flex w-full justify-end mt-5">
            <div className="flex flex-col gap-4  ">
              {nav.map((n, i) => {
                return (
                  <span
                    className=" cursor-pointer hover:text-white text-lightGray text-lg"
                    key={i}
                  >
                    {n}
                  </span>
                );
              })}
            </div>
          </article>
        </article>
      )}
    </header>
  );
};

export default Header;

const Logo = ({ darkMode }: { darkMode: boolean }) => {
  return (
    <div className="logo">
      {darkMode ? (
        <img
          src="/images/dlogo.svg"
          alt=""
          width="100px"
          className="heading-logo"
        />
      ) : (
        <img
          src="/images/logo.svg"
          alt=""
          width="100px"
          className="heading-logo"
        />
      )}
    </div>
  );
};
