import { useEffect, useState } from 'react';
import { getFollowingPost } from '../services/services';

const usePhotos = (following, userUId) => {
    const [photos, setPhotos] = useState([]);
    useEffect(() => {
        const getUsersPost = async () => {
            console.log('getuser post called');
            const result = await getFollowingPost(following, userUId);
            result.sort((a, b) => b.dateCreated - a.dateCreated);
            setPhotos(result);
        };
        if (following !== undefined) {
            getUsersPost();
        }
    }, [following, userUId]);
    return photos;
};

export default usePhotos;
