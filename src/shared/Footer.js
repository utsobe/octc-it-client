import React from 'react';
import Logo from '../assets/logos/octcit-logo.png';
import SslImage from '../assets/footer-image/ssl-commerce.png';
import { FaMapMarkerAlt, FaRegEnvelope, FaPhoneAlt, FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='mt-32 bg-primary'>
            <div className='max-w-7xl mx-auto px-12 py-10 grid grid-cols-3 text-base-100'>
                <div>
                    <div class="flex items-center">
                        <img src={Logo} className='h-12' alt="" />
                        <h2 className='text-xl lg:text-2xl ml-1 mt-1 font-medium text-base-100'>OCTCIT</h2>
                    </div>
                    <div className=' mt-7'>
                        <a href="https://goo.gl/maps/bxStbHcFvkWCySqC9" target='_blank'>
                            <p className='flex items-start justify-between'><FaMapMarkerAlt className='text-2xl mr-5' /> <span className='hover:underline'>Supti Plaza, 1st floor (Pollibiddut Eid gha road), Savar Cant-1344, Ashulia, Savar, Dhaka, Bangladesh</span></p>
                        </a>
                        <a href="#">
                            <p className='flex items-center my-3'><FaRegEnvelope className='mr-3 w-5 text-lg' /> <span className='hover:underline'>octcit@gmail.com</span></p>
                        </a>
                        <a href="#">
                            <p className='flex items-center'><FaPhoneAlt className='mr-3 w-5 text-md' /> <span className='hover:underline'>+880 1790-322995</span></p>
                        </a>
                        <p className='mt-3'><small>(Available: Sat - Thu 10:00 AM to 10:00 PM)</small></p>
                    </div>
                </div>
                <div className='flex lg:justify-center'>
                    <div>
                        <ul>
                            <li className='mt-3 hover:underline'><Link to='/'>Courses</Link></li>
                            <li className='mt-3 hover:underline'><Link to='/'>About</Link></li>
                            <li className='mt-3 hover:underline'><Link to='/'>Blog</Link></li>
                            <li className='mt-3 hover:underline'><Link to='/'>Contact</Link></li>
                        </ul>
                        <div className='flex gap-3 mt-5'>
                            <a href="#" className='text-3xl'><FaFacebookSquare /></a>
                            <a href="#" className='text-3xl'><FaInstagramSquare /></a>
                            <a href="#" className='text-3xl'><FaLinkedin /></a>
                            <a href="#" className='text-3xl'><FaTwitterSquare /></a>
                        </div>
                    </div>
                </div>
                <div>
                    <p className='mb-2'>We Accept:</p>
                    <img src={SslImage} className='rounded-md' alt="" />
                </div>
            </div>
        </div>
    );
};

export default Footer;