import React from 'react';
import CardFooter from './CardFooter';
import CardHeader from './CardHeader';
import CardImage from './CardImage';

const Card = () => (
    <div className="border border-gray-border mb-6 rounded">
        <CardHeader />
        <CardImage />
        <CardFooter />
    </div>
);

export default Card;
