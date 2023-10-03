import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="navbar bg-primary">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <Link href="/"> Category</Link>
              <ul className="p-2 z-10">
                <li>
                  <Link href="/motherboard/motherboard">MotherBoard</Link>
                </li>
                <li>
                  <Link href="/ram/ram">ram</Link>
                </li>
                <li>
                  <Link href="/cpu/cpu">Cpu</Link>
                </li>
                <li>
                  <Link href="/monitor/monitor">Monitor</Link>
                </li>
                <li>
                  <Link href="/powerSupplyUnit/powerSupplyUnit">
                    Power Supply Unit
                  </Link>
                </li>
                <li>
                  <Link href="/storage/storage">Storage</Link>
                </li>
                <li>
                  <Link href="/others/others">Storage</Link>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <Link href="/">PC BUILDER</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Item 1</a>
          </li>
          <li tabIndex={0}>
            <details>
              <summary>Category</summary>
              <ul className="p-2 z-10">
                <li>
                  <Link href="/motherboard/motherboard">MotherBoard</Link>
                </li>
                <li>
                  <Link href="/ram/ram">Ram</Link>
                </li>
                <li>
                  <Link href="/cpu/cpu">Cpu</Link>
                </li>
                <li>
                  <Link href="/monitor/monitor">Monitor</Link>
                </li>
                <li>
                  <Link href="/powerSupplyUnit/powerSupplyUnit">
                    Power Supply Unit
                  </Link>
                </li>
                <li>
                  <Link href="/storage/storage">Storage</Link>
                </li>
                <li>
                  <Link href="/others/others">Others</Link>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>Item 3</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link href="/pc-builder/pc-builder" className="btn">
          Button
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
