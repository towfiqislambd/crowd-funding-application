import { FaBars } from "react-icons/fa6";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Tooltip } from 'react-tooltip';
import logo from "../assets/business.png";
import ThemeController from "../ThemeController";
import StickyNavbar from "react-sticky-navbar";
import 'react-tooltip/dist/react-tooltip.css';

const Navbar = () => {
    const { user, signOutUser } = useContext(AuthContext)
    const location = useLocation();
    return (
        <StickyNavbar showOnScrollDown={true} showOnScrollUp={true} stickyBackground={'#9333EA'}>
            <div className={`w-full sticky top-0 z-50 text-white ${location.pathname !== '/' && 'bg-[#9333EA]'}`}>
                <div className="navbar ps-2 pe-4 container mx-auto py-2">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <FaBars className="text-3xl" />
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-gray-700 rounded-lg z-[1] mt-3 w-52 px-3 py-5 shadow gap-3 font-medium">
                                <li><NavLink to='/'>Home</NavLink></li>
                                <li><NavLink to='/all-campaign'>All Campaigns</NavLink></li>
                                {
                                    user ? <li><NavLink to='/add-new-campaign'>Add New Campaign</NavLink></li> :
                                        <li><NavLink to='/about-us'>About Us</NavLink></li>
                                }
                                {
                                    user ? <li><NavLink to='/my-campaign'>My Campaign</NavLink></li> :
                                        <li><NavLink to='/contact'>Contact</NavLink></li>
                                }
                                {
                                    user ? <li><NavLink to='/my-donations'>My Donations</NavLink></li> :
                                        <li><NavLink to='/support'>Support</NavLink></li>
                                }
                            </ul>
                        </div>
                        <Link to="/"><img src={logo} className="md:w-14 w-10" /></Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 gap-7 text-[0.92rem] font-medium text-white">
                            <li><NavLink to='/'>Home</NavLink></li>
                            <li><NavLink to='/all-campaign'>All Campaigns</NavLink></li>
                            {
                                user ? <li><NavLink to='/add-new-campaign'>Add New Campaign</NavLink></li> :
                                    <li><NavLink to='/about-us'>About Us</NavLink></li>
                            }
                            {
                                user ? <li><NavLink to='/my-campaign'>My Campaign</NavLink></li> :
                                    <li><NavLink to='/contact'>Contact</NavLink></li>
                            }
                            {
                                user ? <li><NavLink to='/my-donations'>My Donations</NavLink></li> :
                                    <li><NavLink to='/support'>Support</NavLink></li>
                            }
                        </ul>
                    </div>
                    <div className="navbar-end">
                        {
                            user ?
                                <div className="flex gap-3 items-center">
                                    <Tooltip anchorSelect=".my-anchor-element" place="top">
                                        {user?.displayName}
                                    </Tooltip>
                                    <img src={user?.photoURL} className="w-10 my-anchor-element h-10 rounded-full" />
                                    <Link onClick={signOutUser} className={`px-3 sm:px-4 sm:py-2 py-[6px] rounded font-medium bg-[#721ac5] text-white`}>Log Out</Link>
                                    {
                                        location.pathname === '/' && <ThemeController />
                                    }
                                </div>
                                :
                                <div className="flex gap-3 items-center">
                                    <Link to='/login' className={`px-3 sm:px-4 sm:py-2 py-[6px] rounded font-medium bg-[#721ac5] text-white`}>Login</Link>
                                    <Link to='/signup' className={`px-3 sm:px-4 sm:py-2 py-[6px] rounded font-medium bg-[#721ac5] text-white`}>Register</Link>
                                    {
                                        location.pathname === '/' && <ThemeController />
                                    }
                                </div>
                        }
                    </div>
                </div>
            </div>
        </StickyNavbar>
    )
}

export default Navbar;