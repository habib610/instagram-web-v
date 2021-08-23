import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => (
    <div className="container flex mx-auto items-center h-screen max-w-screen-md bg-gray-bg">
        <div className="w-3/5 hidden md:flex">
            <img src=".\images\iphone-with-profile.jpg" alt="iphone-with-profile" />
        </div>
        <div className="flex flex-col xs:w-full sm:w-full md:w-2/5">
            <div className="flex flex-col border border-gray-border rounded items-center mb-4 p-4 bg-white ">
                <h1 className="flex justify-center w-full">
                    <img src="./images/logo.png" alt="logo" className="mt-2 w-8/12 mb-4" />
                </h1>
                <form action="">
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full mb-2 px-4 py-4 border  border-gray-border rounded text-sm h-2 text-gray-text"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full mb-2 px-4 py-4 border  border-gray-border rounded text-sm h-2 text-gray-text"
                    />
                    <button className="w-full bg-blue text-white font-bold h-8" type="button">
                        Login
                    </button>
                </form>
            </div>
            <div className="flex justify-center items-center bg-white p-4 border border-gray-border rounded">
                <p className="text-sm mb-0 pb-0">
                    Don&apos;t have an account?{' '}
                    <Link to="/registration" className="font-bold text-blue text-lg">
                        Sign up
                    </Link>
                </p>
            </div>
        </div>
    </div>
);

export default Login;
