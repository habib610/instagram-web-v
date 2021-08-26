import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/context';
import useUser from '../hooks/useUser';
import Suggestions from './Suggestions/Suggestions';

const SideBar = () => {
    const { loggedInUser } = useContext(UserContext);
    const { activeUser } = useUser(loggedInUser?.uid);
    const { data } = activeUser;
    return (
        <div className="mt-8">
            <div className="flex justify-between items-center mb-6">
                <div className="flex space-x-8 items-center">
                    <div>
                        <Link to="/profile" className="pointer">
                            <img
                                src={data.photo ? data.photo : './images/avatars/1.jpg'}
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
                                {data?.username}
                            </Link>
                        </div>
                        <div className="text-gray-base">{data?.displayName}</div>
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
};

export default SideBar;
