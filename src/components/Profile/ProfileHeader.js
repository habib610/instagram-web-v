/* eslint-disable no-nested-ternary */
/* eslint-disable prettier/prettier */
import React, { useContext, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/context';
import useUser from '../../hooks/useUser';
import {
	// eslint-disable-next-line no-unused-vars
	updateFollowingUsersFollowers,
	// eslint-disable-next-line no-unused-vars
	updateLoggedInUserFollowing
} from '../../services/services';

const ProfileHeader = ({ user, totalPost }) => {
    const { username, email, photo, followers, following, displayName } = user;
    const { loggedInUser } = useContext(UserContext);
    const isMyProfile = user.uid === loggedInUser.uid;
    const { user: authUser } = useUser();
    const [isFollowingUser, setIsFollowingUser] = useState(followers.includes(loggedInUser.uid));
    const [totalFollowers, setTotalFollowers] = useState(followers.length);

    const handleFollowUser = async () => {
        await updateLoggedInUserFollowing(authUser.docId, user.uid, isFollowingUser);
        await updateFollowingUsersFollowers(user.userDocId, authUser.uid, isFollowingUser);
        await setTotalFollowers(() => (isFollowingUser ? totalFollowers - 1 : totalFollowers + 1));
        await setIsFollowingUser(() => !isFollowingUser);
    };
    return (
        <div>
            <div className="flex md:items-center space-x-2 sm:space-x-12 pr-4 ">
                <div className="w-4/12 lg:w-3/12 flex flex-col justify-center items-center sm:flex-none">
                    <img
                        className="h-32 w-32 sm:h-36  sm:w-36 md:h-48 md:w-48 rounded-full
						  ml-0 sm:ml-12 md:ml-12 lg:ml-16"
                        src={photo || './images/avatars/placeholder.png'}
                        alt="profile"
                    />
                    <div className="mt-4 md:hidden text-center">
                        <h1 className="font-bold">{displayName}</h1>
                        <h1>{email}</h1>
                    </div>
                </div>
                <div className="w-8/12 lg:w-9/12">
                    <div className="md:flex md:items-center space-y-4 md:space-y-0 md:space-x-4">
                        <h1 className="text-4xl font-normal">{username}</h1>



                        {!authUser.following && !isMyProfile ? (
                            <Skeleton count={1} height={30} width={100} />
                        ) : authUser.following && !isMyProfile ? (
                            <button
                                type="button"
                                className={`py-1 px-8  rounded text-sm font-medium  shadow w-full md:w-max ${
                                    isFollowingUser
                                        ? 'bg-gray-border text-gray-base'
                                        : 'bg-blue text-white'
                                }`}
                                onClick={handleFollowUser}
                            >
                                {isFollowingUser ? 'Unfollow' : 'Follow'}
                            </button>
                        ) : null}

						{isMyProfile ? (
                         <Link to="/edit"><button
						 type="button"
						 className="py-1 border text-sm rounded font-medium px-4 w-full md:w-max"
					 >
						 Edit Profile
					 </button></Link>  
						   
                        ) : null}
                    </div>
                    <div className="hidden w-6/12 md:flex justify-between my-3">
                        <h1>
                            <span className="font-bold">{totalPost}</span> Post
                        </h1>
                        <h1>
                            <span className="font-bold">{totalFollowers}</span> Followers
                        </h1>
                        <h1>
                            <span className="font-bold">{following.length}</span> Following
                        </h1>
                    </div>
                    <div className="hidden md:block">
                        <h1 className="font-bold">{displayName}</h1>
                        <h1>{email}</h1>
                    </div>
                </div>
            </div>
            <div className="flex justify-between px-12 mt-12 border border-gray-border py-2 text-center text-sm text-gray-base md:hidden">
                <div className="text-center">
                    <p className="font-bold">{totalPost}</p>
                    <p>post</p>
                </div>
                <div>
                    <p className="font-bold">{totalFollowers}</p>
                    <p>Followers</p>
                </div>
                <div>
                    <p className="font-bold">{following.length}</p>
                    <p>Followers</p>
                </div>
            </div>
        </div>
    );
};

export default ProfileHeader;
