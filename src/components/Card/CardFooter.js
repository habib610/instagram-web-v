import React from 'react';
import SvgIcons from '../SvgIcons';
import Comments from './Comments';

const CardFooter = () => (
    <div>
        <div className="bg-white flex flex-col p-4">
            <div className="flex justify-between">
                <div className="flex justify-between space-x-4 mb-2">
                    <button type="button">{SvgIcons.reactFill}</button>
                    <button type="button">{SvgIcons.comment}</button>
                    <button type="button">{SvgIcons.share}</button>
                </div>
                <button type="button">{SvgIcons.save}</button>
            </div>
            <div className="text-gray-black mb-2 text-md font-bold">11110 likes</div>
            <div className="text-black">
                <span className="font-bold">username</span> Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Amet odit fugit aperiam atque! Quo incidunt, quas ut esse placeat
                eius!
            </div>
            <div>
                <Comments />
            </div>
            <div className="text-gray-text text-xs my-2">12 minutes ago </div>
        </div>
        <div className="flex justify-between items-center border border-gray-border p-4 space-x-4 bg-white border-l-0 border-r-0">
            <button type="button">{SvgIcons.emoji}</button>
            <input
                type="comments"
                className=" flex-1 py-2 h-6 focus:outline-none text-sm"
                placeholder="Add a comment.."
            />
            <button type="button" className="font-bold text-blue">
                Post
            </button>
        </div>
    </div>
);

export default CardFooter;
