import React from 'react';
import { Link } from 'react-router-dom';

const Registration = () => (
    <div className="container flex justify-center mx-auto items-center h-screen max-w-screen-md ">
        <div className="w-3/5 hidden md:block">
            <img src=".\images\iphone-with-profile.jpg" alt="iphone-with-profile" />
        </div>
        <div className="flex flex-col w-5/6  md:w-2/5">
            <div className="flex flex-col border border-gray-border rounded items-center mb-4 p-4 bg-white sm:mx-4">
                <h1 className="flex justify-center w-full">
                    <img src="./images/logo.png" alt="logo" className="mt-2 w-8/12 mb-4" />
                </h1>
                <form action="">
                    <input
                        type="text"
                        placeholder="Full Name"
                        className="w-full mb-2 px-4 py-4 border  border-gray-border rounded text-sm h-2 text-gray-text focus:outline-none focus:ring-2 focus:ring-blue bg-gray-bg focus:bg-white"
                    />
                    <input
                        type="text"
                        placeholder="Username"
                        className="w-full mb-2 px-4 py-4 border  border-gray-border rounded text-sm h-2 text-gray-text focus:outline-none focus:ring-2 focus:ring-blue bg-gray-bg focus:bg-white"
                    />

                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full mb-2 px-4 py-4 border  border-gray-border rounded text-sm h-2 text-gray-text focus:outline-none focus:ring-2 focus:ring-blue bg-gray-bg focus:bg-white"
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full mb-2 px-4 py-4 border  border-gray-border rounded text-sm h-2 text-gray-text focus:outline-none focus:ring-2 focus:ring-blue bg-gray-bg focus:bg-white"
                    />
                    <button
                        className="w-full bg-blue text-white font-bold h-8 rounded"
                        type="button"
                        disabled
                    >
                        Signup
                    </button>
                </form>
            </div>
            <div className="flex flex-col border border-gray-border rounded items-center mb-4 p-4 bg-white sm:mx-4">
                <p className="text-sm">
                    Already have an account?{' '}
                    <Link to="/" className="font-bold text-blue">
                        Signin
                    </Link>
                </p>
            </div>
        </div>
    </div>
);

export default Registration;
