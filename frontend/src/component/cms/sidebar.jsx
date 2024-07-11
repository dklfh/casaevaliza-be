import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from './../../assets/images/navbar/casa-evaliza.jpg';

function Sidebar() {
  const location = useLocation();

  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isDropdown2Open, setDropdown2Open] = useState(false);
  const [isDropdown3Open, setDropdown3Open] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (location.pathname.includes('/cms-suite') || location.pathname.includes('/cms-bedroom') || location.pathname.includes('/cms-living') || location.pathname.includes('/cms-media')) {
      setDropdownOpen(true);
    } else {
      setDropdownOpen(false);
    }

    if (location.pathname.includes('/cms-kitchen') || location.pathname.includes('/cms-swimming') || location.pathname.includes('/cms-gym')) {
      setDropdown2Open(true);
    } else {
      setDropdown2Open(false);
    }

    if (location.pathname.includes('/cms-food') || location.pathname.includes('/cms-spa')) {
      setDropdown3Open(true);
    } else {
      setDropdown3Open(false);
    }

    setSidebarOpen(false);
  }, [location.pathname]);

  const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);
  const toggleDropdown2 = () => setDropdown2Open(!isDropdown2Open);
  const toggleDropdown3 = () => setDropdown3Open(!isDropdown3Open);

  const isActive = (path) => location.pathname === path;

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  return (
    <div>
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div>
            <div className="max-sm:flex max-sm:justify-between items-center">
              <button
                data-drawer-target="sidebar-multi-level-sidebar"
                data-drawer-toggle="sidebar-multi-level-sidebar"
                aria-controls="sidebar-multi-level-sidebar"
                type="button"
                className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                onClick={toggleSidebar}
              >
                <span className="sr-only">Open sidebar</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                </svg>
              </button>
              <div className='flex justify-end'>
                <img src={logo} className="w-28" alt="Casa Evaliza Logo" />
              </div>
            </div>
          </div>
        </div>
      </nav>

      <aside id="sidebar-multi-level-sidebar" className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} sm:translate-x-0`} aria-label="Sidebar">
        <div className="h-full px-3 pb-4 pt-20 overflow-y-auto bg-white dark:bg-gray-800 text-sm">
          <ul className="space-y-2 font-medium">
            <li className={`${isActive('/admin') ? 'bg-gray-200 rounded-lg' : ''}`}>
              <Link to="/admin" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <span className="ms-3">Home</span>
              </Link>
            </li>
            <li className={`${isActive('/cms-france') ? 'bg-gray-200 rounded-lg' : ''}`}>
              <Link to="/cms-france" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <span className="ms-3">France</span>
              </Link>
            </li>
            <li className={`${isActive('/cms-about') ? 'bg-gray-200 rounded-lg' : ''}`}>
              <Link to="/cms-about" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <span className="ms-3">About Casa Evaliza</span>
              </Link>
            </li>
            <li>
              <div className='flex justify-between hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 transition duration-75 rounded-lg group'>
                <Link to="/cms-acco" className={`flex items-center w-full h-full p-2 ${isActive('/cms-acco') ? 'bg-gray-200 rounded-lg' : ''}`}>
                  <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">Accommodation</span>
                </Link>
                <button type="button" className="flex items-center px-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-200 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example" onClick={toggleDropdown}>
                  <svg className={`w-3 h-3 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                  </svg>
                </button>
              </div>
              <ul id="dropdown-example" className={`transition-[max-height] ease-in-out overflow-hidden ${isDropdownOpen ? 'max-h-96 duration-500' : 'max-h-0 duration-100'}`}>
                <li className={`${isActive('/cms-suite') ? 'bg-gray-200 rounded-lg' : ''}`}>
                  <Link to="/cms-suite" className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Master Suite</Link>
                </li>
                <li className={`${isActive('/cms-bedroom') ? 'bg-gray-200 rounded-lg' : ''}`}>
                  <Link to="/cms-bedroom" className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Guest Bedroom</Link>
                </li>
                <li className={`${isActive('/cms-living') ? 'bg-gray-200 rounded-lg' : ''}`}>
                  <Link to="/cms-living" className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Living & Dining Pavilion</Link>
                </li>
                <li className={`${isActive('/cms-media') ? 'bg-gray-200 rounded-lg' : ''}`}>
                  <Link to="/cms-media" className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Media Room</Link>
                </li>
              </ul>
            </li>
            <li>
              <div className='flex justify-between hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 transition duration-75 rounded-lg group'>
                <Link to="/cms-facilities" className={`flex items-center w-full h-full p-2 ${isActive('/cms-facilities') ? 'bg-gray-200 rounded-lg' : ''}`}>
                  <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">Facilities</span>
                </Link>
                <button type="button" className="flex items-center px-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-200 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example2" data-collapse-toggle="dropdown-example2" onClick={toggleDropdown2}>
                  <svg className={`w-3 h-3 transition-transform ${isDropdown2Open ? 'rotate-180' : ''}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                  </svg>
                </button>
              </div>
              <ul id="dropdown-example2" className={`transition-[max-height] ease-in-out overflow-hidden ${isDropdown2Open ? 'max-h-96 duration-500' : 'max-h-0 duration-100'}`}>
                <li className={`${isActive('/cms-kitchen') ? 'bg-gray-200 rounded-lg' : ''}`}>
                  <Link to="/cms-kitchen" className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Kitchen</Link>
                </li>
                <li className={`${isActive('/cms-swimming') ? 'bg-gray-200 rounded-lg' : ''}`}>
                  <Link to="/cms-swimming" className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Swimming Pool & Garden</Link>
                </li>
                <li className={`${isActive('/cms-gym') ? 'bg-gray-200 rounded-lg' : ''}`}>
                  <Link to="/cms-gym" className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Private Gym</Link>
                </li>
              </ul>
            </li>
            <li>
              <div className='flex justify-between hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 transition duration-75 rounded-lg group'>
                <Link to="/cms-services" className={`flex items-center w-full h-full p-2 ${isActive('/cms-services') ? 'bg-gray-200 rounded-lg' : ''}`}>
                  <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">Services</span>
                </Link>
                <button type="button" className="flex items-center px-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-200 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example3" data-collapse-toggle="dropdown-example3" onClick={toggleDropdown3}>
                  <svg className={`w-3 h-3 transition-transform ${isDropdown3Open ? 'rotate-180' : ''}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                  </svg>
                </button>
              </div>
              <ul id="dropdown-example3" className={`transition-[max-height] ease-in-out overflow-hidden ${isDropdown3Open ? 'max-h-96 duration-500' : 'max-h-0 duration-100'}`}>
                <li className={`${isActive('/cms-food') ? 'bg-gray-200 rounded-lg' : ''}`}>
                  <Link to="/cms-food" className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Food & Beverages</Link>
                </li>
                <li className={`${isActive('/cms-spa') ? 'bg-gray-200 rounded-lg' : ''}`}>
                  <Link to="/cms-spa" className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Spa Services</Link>
                </li>
              </ul>
            </li>
            <li className={`${isActive('/cms-gallery') ? 'bg-gray-200 rounded-lg' : ''}`}>
              <Link to="/cms-gallery" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <span className="flex-1 ms-3 whitespace-nowrap">Gallery</span>
              </Link>
            </li>
            <li className={`${isActive('/cms-contact') ? 'bg-gray-200 rounded-lg' : ''}`}>
              <Link to="/cms-contact" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <span className="flex-1 ms-3 whitespace-nowrap">Contact Us</span>
              </Link>
            </li>
            <li className={`${isActive('/cms-link') ? 'bg-gray-200 rounded-lg' : ''}`}>
              <Link to="/cms-link" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <span className="flex-1 ms-3 whitespace-nowrap">Link</span>
              </Link>
            </li>
            <li className={`${isActive('/cms-press') ? 'bg-gray-200 rounded-lg' : ''}`}>
              <Link to="/cms-press" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <span className="flex-1 ms-3 whitespace-nowrap">Press</span>
              </Link>
            </li>
            <li className={`${isActive('/cms-sitemap') ? 'bg-gray-200 rounded-lg' : ''}`}>
              <Link to="/cms-sitemap" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <span className="flex-1 ms-3 whitespace-nowrap">Sitemap</span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
}

export default Sidebar;
