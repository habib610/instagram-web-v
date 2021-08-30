/* eslint-disable no-nested-ternary */
/* eslint-disable eqeqeq */
import React from 'react';
import Skeleton from 'react-loading-skeleton';
import usePhotos from '../hooks/usePhotos';
import useUser from '../hooks/useUser';
import Card from './Card/Card';
import SideBar from './SideBar';

const GroupBody = () => {
    const { user } = useUser();
    const photos = usePhotos(user.uid, user?.following);

    return (
        <div className="container mx-auto md:max-w-screen-md  lg:max-w-screen-lg flex my-12 mt-24 space-x-8">
            <div className="w-8/12">
                {!user.following ? (
                    <Skeleton height={400} count={6} className="mb-6" />
                ) : user.following.length === 0 ? (
                    <div className="flex flex-col justify-center items-center">
                        <p className="font-2xl font-bold">Follow user to see photos</p>
                        <button
                            type="button"
                            className="py-1 px-5 rounded my-2 text-white font-bold bg-blue"
                        >
                            Explore
                        </button>
                    </div>
                ) : photos.length === 0 ? (
                    <div className="flex flex-col justify-center items-center">
                        <p className="font-2xl font-bold">
                            Currently no post available which people you are following
                        </p>
                        <button
                            type="button"
                            className="py-2 px-3 rounded my-2 text-white font-bold bg-blue"
                        >
                            Explore
                        </button>
                    </div>
                ) : (
                    photos.map((item) => (
                        <Card key={item.photoDocId} userUId={user.uid} photos={item} />
                    ))
                )}
            </div>
            <div className="w-4/12">
                <SideBar user={user} />
            </div>
        </div>
    );
};

export default GroupBody;
