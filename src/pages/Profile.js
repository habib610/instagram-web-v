import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import UserProfile from '../components/Profile/UserProfile';

const Profile = () => {
    const { username } = useParams();
    console.log(username);
    const [user, setUser] = useState();
    console.log(user, setUser);

    return (
        <div className="h-screen overflow-auto">
            <Header />
            <UserProfile />
        </div>
    );
};

export default Profile;
