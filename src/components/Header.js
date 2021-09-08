import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import useUser from '../hooks/useUser';
import { fireAuth } from '../lib/config';
import SvgIcons from './SvgIcons';

const Header = () => {
    const {
        user: { photo },
    } = useUser();

    const history = useHistory();

    const logoutHandler = () => {
        fireAuth.signOut();
        history.push('/login');
    };
    return (
        <div className="border-b border-gray-border  bg-white fixed w-full">
            <div className="container mx-auto md:max-w-screen-md lg:max-w-screen-lg flex items-center justify-between py-3">
                <div>
                    <Link to="/">
                        <img src="./images/logo.png" className="h-8" alt="instagram-logo" />
                    </Link>
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="search"
                        className="py-3 px-2 h-4 text-sm w-48 text-gray-base rounded-sm border border-gray-border focus:outline-none bg-gray-bg focus:bg-white"
                    />
                </div>
                <div className="w-48 flex items-center justify-between">
                    <div>
                        <Link to="/">{SvgIcons.homeFill}</Link>
                    </div>
                    <div>
                        <Link to="/chat">{SvgIcons.messageOutline}</Link>{' '}
                    </div>
                    <div>{SvgIcons.compassOutline}</div>
                    <div>{SvgIcons.heartOutline}</div>

                    <div
                        className="h-8 w-8 rounded-full bg-gray-base"
                        onClick={logoutHandler}
                        role="button"
                        tabIndex="0"
                    >
                        <img
                            src={photo || ' ./images/avatars/placeholder.png'}
                            alt="user"
                            className="h-8 w-8 rounded-full bg-gray-base"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
