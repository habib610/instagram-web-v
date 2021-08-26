import React from 'react';
import Loader from 'react-loader-spinner';

const Spinner = () => (
    <Loader
        type="Oval"
        color="#ffffff"
        height={20}
        width={20}
        // timeout={3000} // 3 secs
    />
);

export default Spinner;
