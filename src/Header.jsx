import React, { useState } from "react";
import logo from "./svg/gmbnLogo.svg";
import ytLogo from "./svg/youtube.svg";
import logoBlack from "./svg/gmbnTextBlack.svg";

export const Header = () => {
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className="w-full bg-black shadow sticky top-0 z-50">
      <div className="justify-between px-2 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <a href="#">
              <img width={100} src={logo} alt="GMBN LOGO" />
            </a>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <li className="text-white hover:text-indigo-200">
                <a href="#">Home</a>
              </li>
              <li className="text-white hover:text-indigo-200">
                <a href="#">Blog</a>
              </li>
              <li className="text-white hover:text-indigo-200">
                <a href="#">About US</a>
              </li>
              <li className="text-white hover:text-indigo-200">
                <a href="#">Contact US</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex bg-slate-200">
        <ul className="flex pt-1 items-center ml-auto">
          <li className="p-1">
            <a className="inline-flex" href="https://shop.gmbn.com">
              <img src={logoBlack} width={80} />
              &nbsp;<span>Shop</span>
            </a>
          </li>
          <li className="p-1">
            <a
              className="inline-flex"
              href="https://www.youtube.com/subscription_center?add_user=globalmtb"
            >
              <img width={80} src={ytLogo} />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
