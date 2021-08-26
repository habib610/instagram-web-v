import React from 'react';
import GroupBody from '../components/GroupBody';
import Header from '../components/Header';

const Dashboard = () => (
    <div className="h-screen overflow-auto">
        <Header />
        <GroupBody />
    </div>
);

export default Dashboard;
