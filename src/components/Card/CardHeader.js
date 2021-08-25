import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const CardHeader = () => (
    <div className="bg-white py-4 flex justify-between items-center px-4 h-16 ">
        <div className="flex space-x-4 items-center">
            <div>
                <img
                    src="./images/avatars/2.jpg"
                    className="h-12 w-12 bg-gray-base border-4 border-gray-border rounded-full border-xl"
                    alt="profile"
                />
            </div>
            <div className="text-base font-semibold hover:font-underline hover:underline cursor-pointer">
                username
            </div>
        </div>
        <button type="button">
            <FontAwesomeIcon icon={faEllipsisH} />
        </button>
    </div>
);

export default CardHeader;
