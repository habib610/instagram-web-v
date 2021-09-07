import { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import { fireStorage } from '../lib/config';

const useUploadFile = (file) => {
    const [progress, setProgress] = useState(0);
    const [url, setUrl] = useState(null);
    console.log('url form url', url);

    useEffect(() => {
        const photoNameRef = fireStorage.ref(file.name);

        photoNameRef.put(file).on(
            'state_changed',
            (snap) => {
                // let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
                setProgress((snap.bytesTransferred / snap.totalBytes) * 100);
            },
            (err) => {
                console.log(err);
            },
            async () => {
                const getServerUrl = await photoNameRef.getDownloadURL();
                setUrl(getServerUrl);
            }
        );
    }, [file, file.name]);
    return { progress, url };
};

export default useUploadFile;
