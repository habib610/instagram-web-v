import { fireStore } from '../lib/config';

// eslint-disable-next-line import/prefer-default-export
export const checkExistingUserName = async (username) => {
    // eslint-disable-next-line no-unused-vars
    const result = await fireStore.collection('users').where('username', '==', username).get();
    if (result.empty) {
        return true;
    }
    return false;
};

export const getUserByUid = async (uid) => {
    const resultRef = await fireStore.collection('users').where('uid', '==', uid).get();

    const user = resultRef.docs.map((snapShoot) => {
        const docId = snapShoot.id;
        const data = snapShoot.data();
        return { docId, data };
    });
    return user[0];
};
