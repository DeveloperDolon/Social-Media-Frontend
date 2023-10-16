import { NavLink } from "react-router-dom";
import { BsSearchHeart } from 'react-icons/bs';
import { IoNotificationsOutline } from 'react-icons/io5';
import { FiMessageCircle } from 'react-icons/fi';
import { useState } from "react";

const NavBar = () => {

    const [showSearch, setShowSearch] = useState(false);


    const navBars = <>
        <li><NavLink to="/" className="active:bg-orange-400">Item 1</NavLink></li>
        <li>
            <a>Parent</a>
        </li>
        <li><a>Item 3</a></li>
    </>;

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navBars}
                    </ul>
                </div>
                <a className="btn btn-ghost title-text normal-case md:text-2xl text-lg mr-10">DesiBook</a>

                <ul className="menu menu-horizontal px-1 lg:flex hidden">
                    {navBars}
                </ul>
            </div>

            <div className="navbar-end gap-7">
                <div className="relative md:max-w-[55%] w-full">
                    <input type="text" placeholder="Search by name..." className={`input duration-500 ${showSearch ? "pr-12 w-full input-bordered" : "p-0 w-0"} float-right md:text-base text-sm`} />
                    <button onClick={() => setShowSearch(!showSearch)} className="py-2 px-3 md:text-3xl text-xl absolute top-0 right-0 rounded-l-none"><BsSearchHeart></BsSearchHeart></button>
                </div>

                <button className="md:text-3xl text-xl relative">
                    <IoNotificationsOutline></IoNotificationsOutline>
                    <span className="absolute bg-red-500 rounded-full -top-1 right-0 md:text-[12px] text-[9px] font-bold text-white px-[5px] h-fit leading-[1.5]">9+</span>
                </button>

                <button className="md:text-3xl text-xl relative">
                    <FiMessageCircle></FiMessageCircle>
                    <span className="absolute bg-red-500 rounded-full -top-1 right-0 md:text-[12px] text-[9px] font-bold text-white px-[5px] h-fit leading-[1.5]">9+</span>
                </button>

                <a className="md:btn btn btn-sm md:text-base text-xs">Login</a>
            </div>
        </div>
    );
};

export default NavBar;