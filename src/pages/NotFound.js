import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

const NotFound = () => (
    <div className="h-screen overflow-auto">
        <Header />
        <div className="container mx-auto max-w-screen-lg bg-white mt-24 flex justify-center text-center">
            <div className="w-w/6  sm:w-4/6 ">
                <h1 className="text-xl font-medium mb-2">Sorry, this page is not available.</h1>
                <p>
                    The link you followed may be broken, or the page may have been removed.{' '}
                    <Link className="pointer text-blue" to="/">
                        Go Back to home
                    </Link>
                </p>
            </div>
        </div>
    </div>
);

export default NotFound;

// {
//     /* <div className="container mx-auto mt-24 ">
//             <div className="w-w/6  sm:w-4/6  bg-white ">
//                 <h1 className="text-xl">Sorry, this page is not available.</h1>
//                 <p>
//                     The link you followed may be broken, or the page may have been removed.{' '}
//                     <Link className="pointer" to="/">
//                         Go back to Instagram.
//                     </Link>
//                 </p>
//             </div>
//         </div> */
// }
