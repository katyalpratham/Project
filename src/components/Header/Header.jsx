import React from 'react'
import { Link} from 'react-router-dom'
import { NavLink} from 'react-router-dom'

export default function Header() {
    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-white border-gray-300 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                    <h1 className='text-black text-4xl font-bold sm:text-2xl'>
                        Zidio
                       
                    </h1>
                    <h3 className='text-black  text-4xl font-bold sm:text-2xl'>
                             &nbsp;Jobs
                        </h3>

                      
                    </Link>
                    <div className="flex items-center lg:order-2">
                        <Link
                            to="#"
                            className="hover:text-white hover:bg-gray-400  bg-gray-200 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Download
                        </Link>
                        <Link
                            to="#"
                            className=" hover:text-white hover:bg-gray-400  bg-gray-200 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Get started
                        </Link>
                    </div>
                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                to = "/"
                                    className={({isActive}) =>
                                        `
                                        ${isActive ? "text-orange-700" : "text-gray-700"}block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-300 lg:hover:bg-transparent lg:border-0 text-black hover:text-gray-500 lg:p-0`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>


                            <li>
                                <NavLink
                                to= "/about"
                                    className={({isActive}) =>
                                        `
                                        ${isActive ? "text-orange-700" : "text-gray-700"}block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-300 lg:hover:bg-transparent lg:border-0 text-black hover:text-gray-500 lg:p-0`
                                    }
                                >
                                    About us
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                to= "/contact"
                                    className={(isActive) =>
                                        `
                                        ${isActive ? "text-orange-700" : "text-gray-700"}block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 text-black hover:text-gray-500 lg:p-0`
                                    }
                                >
                                    Contact us
                                </NavLink>
                            </li>
                            
                            

                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}
