import React from 'react';
import ChatBody from '../components/Chat/ChatBody';
import Header from '../components/Header';

const ChatBoard = () => (
    <div className="h-screen overflow-auto">
        <Header />
        <ChatBody />
    </div>
);

export default ChatBoard;
