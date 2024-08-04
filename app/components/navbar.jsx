"use client"
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import image3 from '../images/logo.svg';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="bg-transparent border rounded-3xl border-gray-700 backdrop-blur-sm">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 px-8">
                <a href="https://www.afrolottery.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <Image
                        className="w-28"
                        src={image3}
                        alt="image"
                    />
                </a>
                <button
                    onClick={toggleMenu}
                    type="button"
                     className="inline-flex items-center p-2 w-10 h-10 justify-right text-sm bg-slate-500 text-gray-500 rounded-lg md:hidden hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                  
                     aria-controls="navbar-default"
                    aria-expanded={menuOpen}
                >
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#fff" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>

                </button>
                <div className={`${menuOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <Link href="/" passHref>
                                <p className="block py-2 px-3 text-white bg-gray-900 rounded md:bg-transparent md:text-blue-200 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="/" passHref>
                                <p className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-100 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="/form" passHref>
                                <p className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-100 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Work with Us</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="/" passHref>
                                <p className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-200 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">How to Play</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="/" passHref>
                                <p className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-200 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">FAQ</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="/" passHref>
                                <p className="block py-2 px-3 border-white rounded-lg p-8 text-white hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-200 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Download</p>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
