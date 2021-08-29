import React from 'react';
import CardFooter from './CardFooter';
import CardHeader from './CardHeader';
import CardImage from './CardImage';

const Card = ({ photos }) => {
    const { username, avatar, imageSrc, likes, comments, dateCreated, caption } = photos;
    return (
        <div className="border border-gray-border mb-6 rounded">
            <CardHeader username={username} avatar={avatar} />
            <CardImage imageSrc={imageSrc} />
            <CardFooter
                username={username}
                likes={likes}
                comments={comments}
                dateCreated={dateCreated}
                caption={caption}
            />
        </div>
    );
};

export default Card;
