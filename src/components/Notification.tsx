import React from 'react'
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoEyeOutline } from "react-icons/io5";


//flowbite

const Notification = () => {
    return (
        <>
            <button
                id="dropdownNotificationButton"
                data-dropdown-toggle="dropdownNotification"
                className="relative inline-flex items-center text-sm font-medium text-center text-gray-400 hover:text-gray-200 focus:outline-none"
                type="button"
            >
                <IoMdNotificationsOutline className='w-6 h-6' />
                <div className="absolute block w-3 h-3 border-2 border-slate-950 bg-red-600 rounded-full -top-0.5 start-2.5"></div>
            </button>

            <div
                id="dropdownNotification"
                className="z-20 hidden w-full max-w-sm bg-gray-800 divide-y divide-gray-700 rounded-lg shadow"
                aria-labelledby="dropdownNotificationButton"
            >
                <div className="block px-4 py-2 font-medium text-center text-gray-400 rounded-t-lg bg-gray-800">
                    Notifications
                </div>
                <div className="divide-y divide-gray-700">
                    <a
                        href="#"
                        className="flex px-4 py-3 hover:bg-gray-700"
                    >
                        <div className="flex-shrink-0">
                            <img
                                className="rounded-full w-11 h-11"
                                src="/docs/images/people/profile-picture-1.jpg"
                                alt="Jese image"
                            />
                            <div className="absolute flex items-center justify-center w-5 h-5 ms-6 -mt-5 bg-blue-600 border border-white rounded-full border-gray-800">
                                <svg
                                    className="w-2 h-2 text-gray-400"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 18 18"
                                >
                                    <path d="M1 18h16a1 1 0 0 0 1-1v-6h-4.439a.99.99 0 0 0-.908.6 3.978 3.978 0 0 1-7.306 0 .99.99 0 0 0-.908-.6H0v6a1 1 0 0 0 1 1Z" />
                                    <path d="M4.439 9a2.99 2.99 0 0 1 2.742 1.8 1.977 1.977 0 0 0 3.638 0A2.99 2.99 0 0 1 13.561 9H17.8L15.977.783A1 1 0 0 0 15 0H3a1 1 0 0 0-.977.783L.2 9h4.239Z" />
                                </svg>
                            </div>
                        </div>
                        <div className="w-full ps-3">
                            <div className="text-gray-400 text-sm mb-1.5">
                                <span className="font-semibold text-gray-200">
                                    You: {' '}
                                </span>
                                Marked all the tasks as completed.
                            </div>
                            <div className="text-xs text-violet-500">
                                a few moments ago
                            </div>
                        </div>
                    </a>
                    <a
                        href="#"
                        className="flex px-4 py-3 hover:bg-gray-700"
                    >
                        <div className="flex-shrink-0">
                            <img
                                className="rounded-full w-11 h-11"
                                src="/docs/images/people/profile-picture-2.jpg"
                                alt="Joseph image"
                            />
                            <div className="absolute flex items-center justify-center w-5 h-5 ms-6 -mt-5 bg-gray-900 border border-white rounded-full border-gray-800">
                                <svg
                                    className="w-2 h-2 text-gray-400"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 20 18"
                                >
                                    <path d="M6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Zm11-3h-2V5a1 1 0 0 0-2 0v2h-2a1 1 0 1 0 0 2h2v2a1 1 0 0 0 2 0V9h2a1 1 0 1 0 0-2Z" />
                                </svg>
                            </div>
                        </div>
                        <div className="w-full ps-3">
                            <div className="text-gray-400 text-sm mb-1.5">
                                <span className="font-semibold text-gray-200">
                                New Task Added: {' '}
                                </span> 
                                 Optimize Website Performance
                            </div>
                            <div className="text-xs text-violet-500">
                               15 min ago
                            </div>
                        </div>
                    </a>
                    <a
                        href="#"
                        className="flex px-4 py-3 hover:bg-gray-700"
                    >
                        <div className="flex-shrink-0">
                            <img
                                className="rounded-full w-11 h-11"
                                src="/docs/images/people/profile-picture-3.jpg"
                                alt="Bonnie image"
                            />
                            <div className="absolute flex items-center justify-center w-5 h-5 ms-6 -mt-5 bg-red-600 border border-white rounded-full border-gray-800">
                                <svg
                                    className="w-2 h-2 text-gray-400"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 20 18"
                                >
                                    <path d="M17.947 2.053a5.209 5.209 0 0 0-3.793-1.53A6.414 6.414 0 0 0 10 2.311 6.482 6.482 0 0 0 5.824.5a5.2 5.2 0 0 0-3.8 1.521c-1.915 1.916-2.315 5.392.625 8.333l7 7a.5.5 0 0 0 .708 0l7-7a6.6 6.6 0 0 0 2.123-4.508 5.179 5.179 0 0 0-1.533-3.793Z" />
                                </svg>
                            </div>
                        </div>
                        <div className="w-full ps-3">
                            <div className="text-gray-400 text-sm mb-1.5">
                                <span className="font-semibold text-gray-200">
                                    Lisa: {' '}
                                </span>
                                Updated the Priority of task to Urgent.
                            </div>
                            <div className="text-xs text-violet-500">
                                3 hours ago
                            </div>
                        </div>
                    </a>
                </div>
                <a
                    href="#"
                    className="block py-2 text-sm font-medium text-center text-gray-400 rounded-b-lg bg-gray-800 hover:bg-gray-700"
                >
                    <div className="inline-flex items-center gap-2">
                        <IoEyeOutline className='w-5 h-5' />
                        View all
                    </div>
                </a>
            </div>
        </>
    )
}

export default Notification