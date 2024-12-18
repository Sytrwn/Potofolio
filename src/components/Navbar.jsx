import React from "react";

function Navbar() {
  return (
    <header className="header sticky top-0 bg-putihPastel  shadow-md flex items-center justify-between px-8 py-2">
      <h1 className="w-3/12">
        <a href="#" aria-label="Company Logo">
          <svg
            viewBox="0 0 248 31"
            className="h-6 w-auto hover:text-hijauPastel duration-200"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M25.517 ..." />
          </svg>
        </a>
      </h1>

      <nav className="nav font-semibold font-freckle text-lg hidden lg:flex">
        <ul className="flex items-center ">
          <li className="p-4  hover:border-opacity-100 hover:scale-110 text-hitamPastel hover:text-hijauPastel duration-200 cursor-pointer active">
            <a href="#">Home</a>
          </li>
          <li className="p-4  border-opacity-0 hover:border-opacity-100 hover:scale-110 text-hitamPastel hover:text-hijauPastel duration-200 cursor-pointer">
            <a href="#">About</a>
          </li>
          <li className="p-4  border-opacity-0 hover:border-opacity-100 hover:scale-110 text-hitamPastel hover:text-hijauPastel duration-200 cursor-pointer">
            <a href="#">Collections</a>
          </li>
          <li className="p-4  border-opacity-0 hover:border-opacity-100 hover:scale-110 text-hitamPastel hover:text-hijauPastel duration-200 cursor-pointer">
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>

      <div className="lg:hidden">
        <button aria-label="Open Menu">
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      <div className="w-3/12 flex justify-end">
        <a href="#" aria-label="Search">
          <svg
            className="h-8 p-1 hover:text-green-500 duration-200"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path fill="currentColor" d="M508.5 468.9L387.1 347.5 ..." />
          </svg>
        </a>
      </div>
    </header>
  );
}

export default Navbar;
