import React from 'react';
import ProfileHeader from './ProfileHeader';
import UserPhotos from './UserPhotos';

const UserProfile = () => (
    <div className="container mx-auto md:max-w-screen-md  lg:max-w-screen-lg flex flex-col my-12 mt-24">
        <ProfileHeader />
        <UserPhotos />
    </div>
);

export default UserProfile;
