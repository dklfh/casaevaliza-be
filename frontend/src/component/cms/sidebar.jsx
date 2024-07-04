import React from 'react'
import logo from './../../assets/images/navbar/casa-evaliza.jpg'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <div>
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div>
            <div className="max-sm:flex max-sm:justify-between items-center">
              <button data-drawer-target="sidebar-multi-level-sidebar" data-drawer-toggle="sidebar-multi-level-sidebar" aria-controls="sidebar-multi-level-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                <span className="sr-only">Open sidebar</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                </svg>
              </button>
              <Link to="" className="flex justify-end">
                <img src={logo} className="w-28" alt="Casa Evaliza Logo" />
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <aside id="sidebar-multi-level-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
        <div className="h-full px-3 pb-4 pt-20 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            <li>
              <Link to="" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <span className="ms-3">About Casa Evaliza</span>
              </Link>
            </li>
            <li>
              <div className='flex justify-between p-2 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 transition duration-75 rounded-lg group'>
                <Link to="" className='flex items-center '>
                  <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">Accommodation</span>
                </Link>
                <button type="button" className="flex items-center px-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-200 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                  <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                  </svg>
                </button>
              </div>
              <ul id="dropdown-example" className="hidden py-2 space-y-2">
                <li>
                  <Link to="" className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Master Suite</Link>
                </li>
                <li>
                  <Link to="" className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Guest Bedroom</Link>
                </li>
                <li>
                  <Link to="" className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Living & Dining Pavilion</Link>
                </li>
                <li>
                  <Link to="" className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Media Room</Link>
                </li>
              </ul>
            </li>
            <li>
              <div className='flex justify-between p-2 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 transition duration-75 rounded-lg group'>
                <Link to="" className='flex items-center '>
                  <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">Facilities</span>
                </Link>
                <button type="button" className="flex items-center px-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-200 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                  <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                  </svg>
                </button>
              </div>
              <ul id="dropdown-example" className="hidden py-2 space-y-2">
                <li>
                  <Link to="" className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Kitchen</Link>
                </li>
                <li>
                  <Link to="" className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Swimming Pool & Garden</Link>
                </li>
                <li>
                  <Link to="" className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Private Gym</Link>
                </li>
              </ul>
            </li>
            <li>
              <div className='flex justify-between p-2 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 transition duration-75 rounded-lg group'>
                <Link to="" className='flex items-center '>
                  <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">Services</span>
                </Link>
                <button type="button" className="flex items-center px-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-200 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                  <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                  </svg>
                </button>
              </div>
              <ul id="dropdown-example" className="hidden py-2 space-y-2">
                <li>
                  <Link to="" className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Food & Beverages</Link>
                </li>
                <li>
                  <Link to="" className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Spa Services</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <span className="flex-1 ms-3 whitespace-nowrap">Gallery</span>
              </Link>
            </li>
            <li>
              <Link to="" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <span className="flex-1 ms-3 whitespace-nowrap">Contact Us</span>
              </Link>
            </li>
            <li>
              <Link to="" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <span className="flex-1 ms-3 whitespace-nowrap">Link</span>
              </Link>
            </li>
            <li>
              <Link to="" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <span className="flex-1 ms-3 whitespace-nowrap">Press</span>
              </Link>
            </li>
            <li>
              <Link to="" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <span className="flex-1 ms-3 whitespace-nowrap">Sitemap</span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  )
}

export default Sidebar
