import { FieldValue, fireStore } from '../lib/config';

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

    return resultRef.docs.map((snapShoot) => {
        const docId = snapShoot.id;
        const data = snapShoot.data();
        return { ...data, docId };
    })[0];
    // return user[0];
};

export const getSuggestedUsers = async (userUid, following) => {
    const suggestionRef = await fireStore
        .collection('users')
        .where('uid', 'not-in', [...following, userUid])
        .limit(5)
        .get();
    const result = suggestionRef.docs.map((item) => ({ ...item.data(), docId: item.id }));

    return result;
};

export const updateLoggedInUserFollowing = (loggedInDocId, targetDocId, isFollowing) => {
    fireStore
        .collection('users')
        .doc(loggedInDocId)
        .update({
            following: isFollowing
                ? FieldValue.arrayRemove(targetDocId)
                : FieldValue.arrayUnion(targetDocId),
        });
};

export const updateFollowingUsersFollowers = (targetDocId, loggedInUId, isFollowers) => {
    fireStore
        .collection('users')
        .doc(targetDocId)
        .update({
            followers: isFollowers
                ? FieldValue.arrayRemove(loggedInUId)
                : FieldValue.arrayUnion(loggedInUId),
        });
};

export const getFollowingPost = async (following, userUId) => {
    const result = await fireStore.collection('photos').where('userUId', 'in', following).get();

    const photoResult = result.docs.map((photo) => ({
        ...photo.data(),
        photoDocId: photo.id,
    }));

    const photosWithDetails = await Promise.all(
        photoResult.map(async (photo) => {
            let userLiked = false;
            if (photo.likes.includes(userUId)) {
                userLiked = true;
            }
            const user = await getUserByUid(photo.userUId);
            const { username, photo: avatar } = user;
            return { ...photo, username, avatar, userLiked };
        })
    );

    return photosWithDetails;
};
