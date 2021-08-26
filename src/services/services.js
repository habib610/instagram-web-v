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
