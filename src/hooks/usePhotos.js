import { useEffect, useState } from 'react';
import { getFollowingPost } from '../services/services';

const usePhotos = (userUId, following) => {
    const [photos, setPhotos] = useState([]);
    useEffect(() => {
        const getUsersPost = async () => {
            const result = await getFollowingPost(following, userUId);
            result.sort((a, b) => b.dateCreated - a.dateCreated);
            setPhotos(result);
        };
        if (following !== undefined && following.length > 0) {
            getUsersPost();
        }
    }, [following, userUId]);
    return photos;
};

export default usePhotos;
