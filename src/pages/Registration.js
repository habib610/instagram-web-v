import React from 'react';
import { Link } from 'react-router-dom';

const Registration = () => (
    <div className="container  flex justify-center mx-auto items-center h-screen  max-w-screen-md ">
        <div className="w-3/5 hidden md:block  flex-shrink-0">
            <h1 className="">
                <img src=".\images\iphone-with-profile.jpg" alt="iphone-with-profile.jpg" />
            </h1>
        </div>
        <div className="flex flex-col w-6/6 md:w-2/5 ">
            <div className="flex flex-col items-center bg-white mb-4 p-4 border border-gray-border shadow">
                <h1 className="flex w-full justify-center mb-4">
                    <img
                        src="./images/logo.png"
                        alt="instagram-logo"
                        className="w-8/12 mt-2 mb-4"
                    />
                </h1>
                <form action="">
                    <input
                        type="text"
                        placeholder="Name"
                        className="w-full bg-white border border-gray-border rounded text-sm text-gray-base mb-2 py-4 px-4 h-6 focus:outline-none focus:ring-2 focus:ring-blue"
                    />
                    <input
                        type="text"
                        placeholder="Username"
                        className="w-full bg-white border border-gray-border rounded text-sm text-gray-base mb-2 py-4 px-4 h-6 focus:outline-none focus:ring-2 focus:ring-blue"
                    />
                    <input
                        type="text"
                        placeholder="Email"
                        className="w-full bg-white border border-gray-border rounded text-sm text-gray-base mb-2 py-4 px-4 h-6 focus:outline-none focus:ring-2 focus:ring-blue"
                    />
                    <input
                        type="text"
                        placeholder="Password"
                        className="w-full bg-white border border-gray-border rounded text-sm text-gray-base mb-2 py-4 px-4 h-6 focus:outline-none focus:ring-2 focus:ring-blue"
                    />
                    <button
                        type="button"
                        disabled
                        className="w-full bg-blue h-8 font-bold text-white  rounded disabled:opacity-50"
                    >
                        Registration
                    </button>
                </form>
            </div>
            <div className="flex justify-center bg-white items-center h-16 border rounded border-gray-border shadow mt-4">
                <p className="text-black text-sm">
                    Already have account?{' '}
                    <Link to="/" className="font-bold text-blue">
                        Signin
                    </Link>
                </p>
            </div>
        </div>
    </div>
);

export default Registration;
