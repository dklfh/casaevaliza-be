import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import flag from './../../../assets/images/navbar/french.jpg';
import logo from './../../../assets/images/navbar/casa-evaliza.jpg';

function Navbar() {
    const location = useLocation();
    const [showDropdown, setShowDropdown] = useState(null);

    const handleMouseEnter = (menu) => setShowDropdown(menu);
    const handleMouseLeave = () => setShowDropdown(null);

    const isActive = (path) => location.pathname === path ? 'text-red-700' : 'text-regular';

    return (
        <div>
            <nav className="shadow-lg ">
                <div className="mx-28 px-4 hidden xl:block">
                    <div className="flex flex-col">
                        <div className="pt-8 flex gap-20 items-center">
                            <hr className="w-full h-px bg-regular border-0 rounded grow" />
                            <Link to="/france" className="border rounded-sm border-regular p-0.5">
                                <img src={flag} className="w-7" alt="French Flag" />
                            </Link>
                        </div>
                        <div className="flex items-center justify-between mb-1.5">
                            <Link to="/">
                                <img src={logo} className="w-52" alt="Casa Evaliza Logo" />
                            </Link>
                            <div>
                                <ul className="flex">
                                    <li className={`border-r px-4 font-gothic hover:text-bold transition-colors duration-300 ease-in-out font-bold tracking-wider border-regular ${isActive('/about')}`}>
                                        <Link to="/about">About Casa Evaliza</Link>
                                    </li>
                                    <li 
                                        className={`border-r px-4 font-gothic hover:text-bold transition-colors duration-300 ease-in-out font-bold tracking-wider border-regular relative ${isActive('/acco')}`}
                                        onMouseEnter={() => handleMouseEnter('acco')}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        <Link to="/acco">Accommodation</Link>
                                        {showDropdown === 'acco' && (
                                            <div className="z-40 absolute font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                                                <ul className="py-2 text-sm text-gray-700 dark:text-gray-400">
                                                    <li>
                                                        <Link to="/suite" className={`block font-gothic text-regular tracking-wider font-bold px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white ${isActive('/suite')}`}>Master Suite</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/bedroom" className={`block font-gothic text-regular tracking-wider font-bold px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white ${isActive('/bedroom')}`}>Guest Bedroom</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/living" className={`block font-gothic text-regular tracking-wider font-bold px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white ${isActive('/living')}`}>Living & Dining Pavilion</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/media" className={`block font-gothic text-regular tracking-wider font-bold px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white ${isActive('/media')}`}>Media Room</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        )}
                                    </li>
                                    <li 
                                        className={`border-r px-4 font-gothic hover:text-bold transition-colors duration-300 ease-in-out font-bold tracking-wider border-regular relative ${isActive('/facilities')}`}
                                        onMouseEnter={() => handleMouseEnter('facilities')}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        <Link to="/facilities">Facilities</Link>
                                        {showDropdown === 'facilities' && (
                                            <div className="z-40 absolute font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                                                <ul className="py-2 text-sm text-gray-700 dark:text-gray-400">
                                                    <li>
                                                        <Link to="/kitchen" className={`block font-gothic text-regular tracking-wider font-bold px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white ${isActive('/kitchen')}`}>Kitchen</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/swimming" className={`block font-gothic text-regular tracking-wider font-bold px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white ${isActive('/swimming')}`}>Swimming Pool & Garden</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/gym" className={`block font-gothic text-regular tracking-wider font-bold px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white ${isActive('/gym')}`}>Private Gym</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        )}
                                    </li>
                                    <li 
                                        className={`border-r px-4 font-gothic hover:text-bold transition-colors duration-300 ease-in-out font-bold tracking-wider border-regular relative ${isActive('/services')}`}
                                        onMouseEnter={() => handleMouseEnter('services')}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        <Link to="/services">Services</Link>
                                        {showDropdown === 'services' && (
                                            <div className="z-40 absolute font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                                                <ul className="py-2 text-sm text-gray-700 dark:text-gray-400">
                                                    <li>
                                                        <Link to="/food" className={`block font-gothic text-regular tracking-wider font-bold px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white ${isActive('/food')}`}>Food & Beverages</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/spa" className={`block font-gothic text-regular tracking-wider font-bold px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white ${isActive('/spa')}`}>Spa Services</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        )}
                                    </li>
                                    <li className={`border-r px-4 font-gothic hover:text-bold transition-colors duration-300 ease-in-out font-bold tracking-wider border-regular ${isActive('/location')}`}>
                                        <Link to="/location">Location</Link>
                                    </li>
                                    <li className={`border-r px-4 font-gothic hover:text-bold transition-colors duration-300 ease-in-out font-bold tracking-wider border-regular ${isActive('/gallery')}`}>
                                        <Link to="/gallery">Gallery</Link>
                                    </li>
                                    <li className={`pl-4 font-gothic hover:text-bold transition-colors duration-300 ease-in-out font-bold tracking-wider ${isActive('/contact')}`}>
                                        <Link to="/contact">Contact Us</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
