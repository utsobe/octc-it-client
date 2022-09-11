import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../assets/logos/octcit-logo.png';
import CustomLink from '../components/CustomLink';

const Navbar = ({ children }) => {
    const menuItems = <>
        <li><CustomLink className='mr-8 mx-auto text-sm font-medium' to='/'>Home</CustomLink></li>
        <li><CustomLink className='mr-8 text-sm font-medium' to='/courses'>Courses</CustomLink></li>
        <li><CustomLink className='mr-8 text-sm font-medium' to='/about'>About</CustomLink></li>
        <li><CustomLink className='mr-8 text-sm font-medium' to='/contact'>Contact</CustomLink></li>
        {/* image for modal */}
        <li>
            <div class="dropdown dropdown-end">
                <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                    {/* clickable image */}
                    <div class="w-9 rounded-full">
                        <img src="https://placeimg.com/80/80/people" alt='...' />
                    </div>
                </label>
                <div tabindex="2" class="dropdown-content mt-3 shadow-lg bg-base-100 rounded-box w-[280px]">
                    <div className='w-full p-2'>
                        {/* profile image */}
                        <div class="w-16 mx-auto">
                            <img className='rounded-full' src="https://placeimg.com/80/80/people" alt='...' />
                        </div>
                        <div className='mt-3 text-center'>
                            <p className='text-md font-semibold'>Anisul Islam Khan</p>
                            <p className='text-[11px]'>Student ID: OCTCG-0075</p>
                        </div>
                    </div>
                    <hr />
                    <div className='p-4 text-sm'>
                        <li>
                            <a class="justify-between">Profile</a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </div>
                </div>
            </div>
        </li>
    </>
    return (
        <div class="drawer drawer-end">
            <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content flex flex-col">
                <div className='bg-base-100 shadow-lg'>
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