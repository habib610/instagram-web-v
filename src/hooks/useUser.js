import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../context/context';
import { getUserByUid } from '../services/services';

const useUser = () => {
    const [activeUser, setActiveUser] = useState({});
    const {
        loggedInUser: { uid },
    } = useContext(UserContext);

    useEffect(() => {
        const getUserInfo = async () => {
            const user = await getUserByUid(uid);
            setActiveUser(user);
        };

        if (uid) {
            getUserInfo();
        }
    }, [uid]);
    return { user: activeUser };
};

export default useUser;
