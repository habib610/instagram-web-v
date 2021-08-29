import React from 'react';

const Comments = ({ content }) => (
    <div>
        <div className="text-sm text-black my-2">
            <span className="font-bold">{content.username} </span> {content.comment}
        </div>
    </div>
);

export default Comments;
