import React from 'react';
import { Link } from 'react-router-dom';

const SuggestedUser = () => (
    <div className="flex justify-between items-center mb-2">
        <div className="flex space-x-4 items-center">
            <div>
                <Link to="/profile" className="pointer">
                    <img
                        src="./images/avatars/3.jpg"
                        alt="users"
                        className="h-10 w-10 rounded-full"
                    />
                </Link>
            </div>
            <div>
                <div>
                    <Link
                        to="/profile"
                        className="font-medium text-black hover:underline pointer text-sm "
                    >
                        Username
                    </Link>
                </div>
                <div className="text-gray-base text-sm">New to instagram</div>
            </div>
        </div>
        <button type="button" className="text-blue text-sm font-medium">
            Follow
        </button>
    </div>
);

export default SuggestedUser;
