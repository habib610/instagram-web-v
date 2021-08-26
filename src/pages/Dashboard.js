import React from 'react';
import GroupBody from '../components/GroupBody';
import Header from '../components/Header';
import useAuthListener from '../hooks/useAuthLisener';

const Dashboard = () => {
    const { loggedInUser } = useAuthListener();
    console.log(loggedInUser);
    return (
        <div className="h-screen overflow-auto">
            <Header />
            <GroupBody />
        </div>
    );
};

export default Dashboard;
