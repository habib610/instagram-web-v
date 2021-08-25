import React from 'react';
import SuggestedUser from './SuggestedUser';

const Suggestions = () => (
    <div className="flex flex-col">
        <div className="flex justify-between items-center mb-4 h-8">
            <p className="text-gray-text font-bold ">Suggestion for you</p>
            <button type="button" className="text-sm text-black ">
                See all
            </button>
        </div>
        <div>
            <SuggestedUser />
            <SuggestedUser />
            <SuggestedUser />
        </div>
    </div>
);

export default Suggestions;
