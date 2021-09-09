import React from 'react';
import { FiLogOut } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
// import { UserContext } from '../context/context';
import useUser from '../hooks/useUser';
import { fireAuth } from '../lib/config';
import SvgIcons from './SvgIcons';

const Header = () => {
    const history = useHistory();
    // const { loggedInUser } = useContext(UserContext);

    // if (loggedInUser === null) {
    //     history.push('/login');
    //     return null;
    // }
    const {
        user: { photo, username },
    } = useUser();

    const { pathname } = history.location;
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
                    <form action="">
                        <input
                            type="text"
                            placeholder="search"
                            className="py-3 px-2 h-4 text-sm w-48 text-gray-base rounded-sm border border-gray-border focus:outline-none bg-gray-bg focus:bg-white"
                        />
                    </form>
                </div>
                <div className="w-48 flex items-center justify-between">
                    <div>
                        <Link to="/">
                            {pathname === '/' ? SvgIcons.homeFill : SvgIcons.homeOutline}
                        </Link>
                    </div>
                    <div>
                        <Link to="/chat">
                            {pathname === '/chat' ? SvgIcons.messageFill : SvgIcons.messageOutline}
                        </Link>
                    </div>
                    <div>{SvgIcons.heartOutline}</div>
                    <div>
                        <FiLogOut size={22} onClick={logoutHandler} />
                    </div>

                    <div className="h-8 w-8 rounded-full bg-gray-base">
                        <Link to={`/${username}`}>
                            <img
                                src={photo || ' ./images/avatars/placeholder.png'}
                                alt="user"
                                className="h-8 w-8 rounded-full bg-gray-base"
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
