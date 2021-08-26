import { useEffect, useState } from 'react';
import { getUserByUid } from '../services/services';

const useUser = (userUid) => {
    const [activeUser, setActiveUser] = useState();
    useEffect(() => {
        const getUserInfo = async () => {
            const user = await getUserByUid(userUid);
            setActiveUser(user);
        };

        if (userUid) {
            getUserInfo();
        }
    }, [userUid]);
    return { activeUser };
};

export default useUser;
