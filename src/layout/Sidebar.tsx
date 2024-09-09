import React from 'react'

const Sidebar = () => {
    return (
        <>
            <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-md sm:hidden hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400  dark:focus:ring-gray-600">
                <span className="sr-only">Open sidebar</span>
                Toggle
            </button>

            <aside id="logo-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
                <div className="h-full px-3 py-4 overflow-y-auto bg-slate-950">
                    <a href="/" className="flex items-center ps-2.5 mb-5">
                        <span className="self-center text-xl font-semibold whitespace-nowrap text-violet-500">Simplify</span>
                    </a>
                    <ul className="space-y-2">
                        <li>
                            <a href="#" className="flex items-center p-2 text-gray-400 rounded-md hover:text-violet-500  hover:bg-gray-800  group">
                                <span className="ms-3">Dashboard</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center p-2 text-gray-400 rounded-md hover:text-violet-500  hover:bg-gray-800  group">
                                <span className="flex-1 ms-3 whitespace-nowrap">My Tasks</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center p-2 text-gray-400 rounded-md hover:text-violet-500 hover:bg-slate-800  group">

                                <span className="flex-1 ms-3 whitespace-nowrap">Team Tasks</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center p-2 text-gray-400 rounded-md hover:text-violet-500 hover:bg-gray-800  group">

                                <span className="flex-1 ms-3 whitespace-nowrap">Products</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center p-2 text-gray-400 rounded-md hover:text-violet-500 hover:bg-gray-800 group">

                                <span className="flex-1 ms-3 whitespace-nowrap">Sign In</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center p-2 text-gray-400 rounded-md hover:text-violet-500 hover:bg-gray-800  group">

                                <span className="flex-1 
                                ms-3 whitespace-nowrap">Sign Up</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </aside>
        </>
    )
}

export default Sidebar