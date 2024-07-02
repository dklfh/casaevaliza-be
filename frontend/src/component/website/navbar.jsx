import React from 'react'
import flag from './../../assets/images/navbar/french.jpg'
import logo from './../../assets/images/navbar/casa-evaliza.jpg';

function navbar() {
    return (
        <div>
            <nav className="shadow-lg">
                <div className="mx-28 px-4 hidden xl:block">
                    <div className="flex flex-col">
                        <div className="pt-8 flex gap-20 items-center">
                            <hr className="w-full h-px bg-regular border-0 rounded grow" />
                            <a href="langfrance.html" className="border rounded-sm border-regular p-0.5">
                                <img src="image/IMG-20240618-WA0004.jpg" className="w-7" alt="" />
                            </a>
                        </div>
                        <div className="flex items-center justify-between mb-1.5">
                            <a href="index.html">
                                <img src="image/IMG-20240618-WA0005.jpg" className="w-52" alt="" />
                            </a>
                            <div>
                                <ul className="flex">
                                    <li className="border-r px-4 font-gothic text-regular hover:text-bold transition-colors duration-300 ease-in-out font-bold tracking-wider border-regular">
                                        <a href="about.html">About Casa Evaliza</a>
                                    </li>
                                    <li className="border-r px-4 font-gothic text-regular hover:text-bold transition-colors duration-300 ease-in-out font-bold tracking-wider border-regular relative">
                                        <a href="acco.html">Accommodation</a>
                                        <div className="z-40 absolute hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                                            <ul className="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                                                <li>
                                                    <a href="master-suite.html" className="block font-gothic text-regular tracking-wider font-bold px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Master Suite</a>
                                                </li>
                                                <li>
                                                    <a href="guest-badroom.html" className="block font-gothic text-regular tracking-wider font-bold px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Guest Badroom</a>
                                                </li>
                                                <li>
                                                    <a href="living-dining-pavilon.html" className="block font-gothic text-regular tracking-wider font-bold px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Living & Dining Pavilion</a>
                                                </li>
                                                <li>
                                                    <a href="media-room.html" className="block font-gothic text-regular tracking-wider font-bold px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Media Room</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="border-r px-4 font-gothic text-regular hover:text-bold transition-colors duration-300 ease-in-out font-bold tracking-wider border-regular relative">
                                        <a href="facilities.html">Facilities</a>
                                        <div className="z-40 absolute hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                                            <ul className="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                                                <li>
                                                    <a href="kithen.html" className="block font-gothic text-regular tracking-wider font-bold px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Kitchen</a>
                                                </li>
                                                <li>
                                                    <a href="swimming-pool.html" className="block font-gothic text-regular tracking-wider font-bold px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Swimming Pool & Garden</a>
                                                </li>
                                                <li>
                                                    <a href="private-gym.html" className="block font-gothic text-regular tracking-wider font-bold px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Private Gym</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="border-r px-4 font-gothic text-regular hover:text-bold transition-colors duration-300 ease-in-out font-bold tracking-wider border-regular relative">
                                        <a href="services.html">Services</a>
                                        <div className="z-40 absolute hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                                            <ul className="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                                                <li>
                                                    <a href="food-beverages.html" className="block font-gothic text-regular tracking-wider font-bold px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Food & Beverages</a>
                                                </li>
                                                <li>
                                                    <a href="spa-services.html" className="block font-gothic text-regular tracking-wider font-bold px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Spa Services</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="border-r px-4 font-gothic text-regular hover:text-bold transition-colors duration-300 ease-in-out font-bold tracking-wider border-regular">
                                        <a href="location.html">Location</a>
                                    </li>
                                    <li className="border-r px-4 font-gothic text-regular hover:text-bold transition-colors duration-300 ease-in-out font-bold tracking-wider border-regular">
                                        <a href="galery.html">Gallery</a>
                                    </li>
                                    <li className="pl-4 font-gothic text-regular hover:text-bold transition-colors duration-300 ease-in-out font-bold tracking-wider">
                                        <a href="contact.html">Contact Us</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default navbar
