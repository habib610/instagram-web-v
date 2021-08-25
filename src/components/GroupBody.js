import React from 'react';
import Card from './Card/Card';
import SideBar from './SideBar';

const GroupBody = () => (
    <div className="container mx-auto md:max-w-screen-md  lg:max-w-screen-lg flex my-12 mt-24 space-x-8">
        <div className="w-8/12">
            <Card />
            <Card />
            <Card />
        </div>
        <div className="w-4/12">
            <SideBar />
        </div>
    </div>
);

export default GroupBody;
