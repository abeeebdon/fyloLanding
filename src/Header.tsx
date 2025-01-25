import { Dispatch, SetStateAction, useState } from 'react'
import { CiDark } from 'react-icons/ci'
import { FaBars, FaTimes } from 'react-icons/fa'

interface Props {
  darkMode: boolean

  setDarkMode: Dispatch<SetStateAction<boolean>>
}
const Header = ({ darkMode, setDarkMode }: Props) => {
  const [showMenu, setShowMenu] = useState<boolean>(false)
  return (
    <header className="base-flex p-4 container font-raleway">
      <Logo darkMode={darkMode} />

      {
        // Menu
        // Features
        // Team
        // The menu should be hidden on large screens
      }
      <div className="xs:basis-[70%] lg:basis-[30%] flex items-center gap-6 justify-end text-black dark:text-lightGray ">
        <ul
          className={
            showMenu
              ? ' max-w-[200px] flex flex-col fixed left-0 top-10 right-0 bg-white dark:bg-[#181f2a] dark:text-white '
              : 'max-w-[200px]  hidden xs:base-flex basis-[60%] '
          }
        >
          <li>Features</li>
          <li>Team</li>
          <li>Sign in</li>
        </ul>
        <div className="xs:hidden" onClick={() => setShowMenu(!showMenu)}>
          {showMenu ? <FaTimes /> : <FaBars />}
        </div>

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 bg-gray-200 dark:bg-gray-800 rounded-lg"
        >
          <CiDark
            className={darkMode ? 'text-white' : 'text-black'}
            size={20}
          />
        </button>
      </div>
    </header>
  )
}

export default Header

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
  )
}
