import React from 'react';
import { Link } from 'react-router-dom';
import Suggestions from './Suggestions/Suggestions';

const SideBar = () => (
    <div className="mt-8">
        <div className="flex justify-between items-center mb-6">
            <div className="flex space-x-8 items-center">
                <div>
                    <Link to="/profile" className="pointer">
                        <img
                            src="./images/avatars/5.jpg"
                            alt="users"
                            className="h-14 w-14 rounded-full"
                        />
                    </Link>
                </div>
                <div>
                    <div>
                        <Link
                            to="/profile"
                            className="font-medium text-black hover:underline pointer"
                        >
                            Username
                        </Link>
                    </div>
                    <div className="text-gray-base">Full Name</div>
                </div>
            </div>
            <button type="button" className="text-blue text-sm font-medium">
                Switch
            </button>
        </div>
        <div>
            <Suggestions />
        </div>
    </div>
);

export default SideBar;
