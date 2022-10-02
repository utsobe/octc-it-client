import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../assets/logos/octcit-logo.png';
import CustomLink from '../components/CustomLink';
import { FaSignOutAlt, FaRegMoon } from "react-icons/fa";

const Navbar = ({ children }) => {
    const menuItems = <>
        <li><CustomLink className='mr-8 mx-auto text-sm font-medium' to='/'>Home</CustomLink></li>
        <li><CustomLink className='mr-8 text-sm font-medium' to='/courses'>Courses</CustomLink></li>
        <li><CustomLink className='mr-8 text-sm font-medium' to='/about'>About</CustomLink></li>
        <li><CustomLink className='mr-8 text-sm font-medium' to='/contact'>Contact</CustomLink></li>
        <li><Link className='mr-4 text-sm text-primary font-semibold border border-primary rounded-md px-5 py-3 hover:bg-primary hover:text-base-100 duration-200' to='/contact'>Login</Link></li>
        <li><Link className='mr-8 text-sm text-base-100 font-medium bg-primary py-3 px-5 border border-primary rounded-md hover:bg-secondary hover:border-secondary duration-200' to='/contact'>Register</Link></li>
        {/*==================== image for modal here from nav extra code ==============*/}

    </>
    return (
        <div class="drawer drawer-end">
            <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content flex flex-col">
                <div className='bg-base-100 shadow-lg sticky top-0 z-50'>
                    {/* <!-- Navbar --> */}
                    <div class=" w-full navbar lg:max-w-7xl mx-auto lg:px-12">
                        <Link to='/' class="flex-1 px-2 mx-2">
                            <img src={logo} className='h-12' alt="" />
                            <h2 className='text-xl lg:text-2xl ml-1 mt-1 font-medium'>OCTCIT</h2>
                        </Link>

                        <div class="flex-none lg:hidden">
                            <label for="my-drawer-3" class="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div>

                        <div class="flex-none hidden lg:block">
                            <ul class="flex items-center">
                                {/* <!-- Navbar menu content here --> */}
                                {menuItems}
                            </ul>
                        </div>
                    </div>
                </div>
                {/* <!-- Page content here --> */}
                {children}
            </div>
            <div class="drawer-side">
                <label for="my-drawer-3" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100">
                    {/* <!-- Sidebar content here --> */}
                    {menuItems}
                </ul>

            </div>
        </div>
    );
};

export default Navbar;