import { useState } from 'react';

const useContextUser = () => {
    const [state, setState] = useState(null);
    const dispatchEvent = (action, payload) => {
        switch (action) {
            case 'ADD_USER':
                return setState([...setState, payload]);
            default:
                return null;
        }
    };
    return { state, dispatchEvent };
};

export default useContextUser;
