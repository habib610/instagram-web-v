import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useEffect } from 'react/cjs/react.development';
import Header from '../components/Header';
import UserProfile from '../components/Profile/UserProfile';
import { getUserByUserName } from '../services/services';

const Profile = () => {
    const { username } = useParams();
    const history = useHistory();
    const [user, setUser] = useState({});

    useEffect(() => {
        const getUserProfileDetails = async () => {
            const result = await getUserByUserName(username);
            setUser(result);
            if (result.userDocId) {
                setUser(result);
            } else {
                history.push('/notfound');
            }
        };
        getUserProfileDetails();
    }, [history, username]);

    return (
        <div className="h-screen overflow-auto">
            <Header />
            {user.username && <UserProfile user={user} />}
        </div>
    );
};

export default Profile;
