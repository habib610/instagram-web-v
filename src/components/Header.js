import React from 'react';
import { Link } from 'react-router-dom';
import SvgIcons from './SvgIcons';

const Header = () => (
    <div className="border-b border-gray-border  bg-white fixed w-full">
        <div className="container mx-auto md:max-w-screen-md lg:max-w-screen-lg flex items-center justify-between py-3">
            <div>
                <img src="./images/logo.png" className="h-8" alt="instagram-logo" />
            </div>
            <div>
                <input
                    type="text"
                    placeholder="search"
                    className="py-3 px-2 h-4 text-sm w-48 text-gray-base rounded-sm border border-gray-border focus:outline-none bg-gray-bg focus:bg-white"
                />
            </div>
            <div className="w-48 flex items-center justify-between">
                <div>{SvgIcons.homeFill}</div>
                <div>{SvgIcons.messageOutline}</div>
                <div>{SvgIcons.compassOutline}</div>
                <div>{SvgIcons.heartOutline}</div>
                <div className="h-8 w-8 rounded-full bg-gray-base">
                    <Link to="/">
                        <img
                            src="./images/avatars/1.jpg"
                            alt="user"
                            className="h-8 w-8 rounded-full bg-gray-base"
                        />
                    </Link>
                </div>
            </div>
        </div>
    </div>
);

export default Header;
