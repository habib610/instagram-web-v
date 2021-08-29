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
                {photos.length !== 0 ? (
                    photos.map((item) => <Card key={item.photoDocId} photos={item} />)
                ) : (
                    <Skeleton height={400} count={6} className="mb-6" />
                )}
            </div>
            <div className="w-4/12">
                <SideBar user={user} />
            </div>
        </div>
    );
};

export default GroupBody;
