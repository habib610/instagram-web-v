import React from 'react';
import Skeleton from 'react-loading-skeleton';
import useUser from '../hooks/useUser';

const Account = () => {
    const { user } = useUser();
    return (
        <div className="container mx-auto md:max-w-screen-md  lg:max-w-screen-lg  my-12 mt-24 bg-white border border-gray-border p-4 h-max rounded">
            <h1 className="text-center font-2xl font-bold text-black-icon mb-6 text-center">
                Edit Profile
            </h1>

            {user.email ? (
                <form action="">
                    <div className="flex flex-col space-y-4">
                        <div className="flex space-x-4 items-center">
                            <div className="w-3/12 flex justify-end">
                                <img
                                    className="rounded-full w-24 h-24 mr-8"
                                    src={user.photo || './images/avatars/placeholder.png'}
                                    alt="profile"
                                />
                            </div>
                            <div>
                                <h1 className="text-bold text-2xl">{user.username}</h1>

                                <label
                                    htmlFor="profilePhoto"
                                    name="profile"
                                    className="font-medium  text-blue"
                                >
                                    Change Profile Picture
                                    <input
                                        className="hidden"
                                        type="file"
                                        id="profilePhoto"
                                        name="profile"
                                    />
                                </label>
                            </div>
                        </div>
                        <div className="flex space-x-4 items-center md:mr-12">
                            <p className="w-3/12 font-bold text-right">Email</p>
                            <input
                                value={user.email}
                                type="email"
                                placeholder="email"
                                className="w-full mb-2 px-4 py-4 border  border-gray-border rounded text-sm h-2 text-gray-base focus:outline-none focus:ring-2 focus:ring-blue bg-gray-bg focus:bg-white"
                            />
                        </div>
                        <div className="flex space-x-4 items-center md:mr-12">
                            <p className="w-3/12 font-bold text-right">username</p>
                            <input
                                value={user.username}
                                type="text"
                                placeholder="Full Name"
                                className="w-full mb-2 px-4 py-4 border  border-gray-border rounded text-sm h-2 text-gray-base focus:outline-none focus:ring-2 focus:ring-blue bg-gray-bg focus:bg-white"
                            />
                        </div>
                        <div className="flex space-x-4 items-center md:mr-12">
                            <p className="w-3/12 font-bold text-right">Full Name</p>
                            <input
                                value={user.displayName}
                                type="text"
                                placeholder="Full Name"
                                className="w-full mb-2 px-4 py-4 border  border-gray-border rounded text-sm h-2 text-gray-base focus:outline-none focus:ring-2 focus:ring-blue bg-gray-bg focus:bg-white"
                            />
                        </div>
                        <div className="flex space-x-4 items-center justify-center ">
                            <button
                                type="submit"
                                className="w-5/12 bg-blue text-white font-bold h-8 rounded disabled:opacity-50 flex justify-center items-center"
                            >
                                Update Profile
                            </button>
                        </div>
                    </div>
                </form>
            ) : (
                <Skeleton count={7} height={50} className="mb-2" />
            )}
        </div>
    );
};

export default Account;
