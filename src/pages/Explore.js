import React, { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import ExploreProfiles from '../components/ExploreProfiles';
import Header from '../components/Header';
import useUser from '../hooks/useUser';
import { getSuggestedUsers } from '../services/services';

const Explore = () => {
    const { user } = useUser();
    const [userProfiles, setUserProfiles] = useState([]);
    useEffect(() => {
        const getSuggestedProfiles = async () => {
            const profiles = await getSuggestedUsers(user.uid, user.following, 20);
            setUserProfiles(profiles);
        };

        if (user.uid) {
            getSuggestedProfiles();
        }
    }, [user.following, user.uid]);
    return (
        <div className="h-screen overflow-auto pb-16">
            <Header />

            <div className="container mx-auto  max-w-screen-md  mt-24  flex justify-center">
                <div className="w-w/6  sm:w-4/6  bg-white ">
                    <div className="text-md font-bold mb-6 m-4">Suggested</div>
                    {userProfiles.length !== 0 ? (
                        userProfiles.map((item) => (
                            <ExploreProfiles
                                key={item.docId}
                                user={item}
                                authUserUid={user.uid}
                                authUserDocId={user.docId}
                            />
                        ))
                    ) : (
                        <Skeleton count={20} height={80} />
                    )}
                </div>
            </div>
        </div>
    );
};

export default Explore;
