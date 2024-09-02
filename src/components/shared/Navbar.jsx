"use client"

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CgShoppingCart } from "react-icons/cg";
import { BsSearch } from "react-icons/bs";

const Navbar = () => {
    const navItems = [
        { title: "Home", path: "/" },
        { title: "About", path: "/about" },
        { title: "Services", path: "/services" },
        { title: "Blog", path: "/blog" },
        { title: "Contact", path: "/contact" },
    ];

    return (
        <div className="container mx-auto py-4">
            <div className="flex items-center justify-between">
                
                <Link href={'/'}>
                    <Image alt="logo" src="/assets/logo.png" height={70} width={75} />
                </Link>

                
                <div className="hidden lg:flex justify-center flex-1">
                    <div className='flex items-center space-x-9'>
                        {navItems.map((item) => (
                            <Link className='font-semibold hover:text-primary duration-300' href={item.path} key={item.path}>
                                {item.title}
                            </Link>
                        ))}
                    </div>
                </div>

                
                <div className="flex items-center space-x-3">
                    <CgShoppingCart className='text-xl' />
                    <BsSearch className='text-xl' />
                    <a className="btn btn-outline btn-primary px-2 text-base">Appointment</a>
                    <Link href="/login" className="btn btn-primary px-5 text-white">Login</Link>
                </div>
            </div>

            
            <div className="navbar-start lg:hidden">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {navItems.map((item) => (
                            <Link className='font-semibold hover:text-primary duration-300' href={item.path} key={item.path}>
                                {item.title}
                            </Link>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
