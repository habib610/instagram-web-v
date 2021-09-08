/* eslint-disable no-nested-ternary */
import { Picker } from 'emoji-mart';
import React, { useContext, useState } from 'react';
import { IoMdSend } from 'react-icons/io';
import { VscSmiley } from 'react-icons/vsc';
import Skeleton from 'react-loading-skeleton';
import { UserContext } from '../../context/context';
import useMessages from '../../hooks/useMessages';
import { fireStore } from '../../lib/config';

const ChatBox = ({ activeUser }) => {
    const [message, setMessage] = useState('');
    const [isPicker, setIsPicker] = useState(false);
    const {
        loggedInUser: { uid: authUid },
    } = useContext(UserContext);

    const { allMessages } = useMessages(activeUser.uid, authUid);
    const addEmojiHandler = (e) => {
        setMessage(message + e.native);
        setIsPicker(false);
    };
    const scrollingElement = document.scrollingElement || document.body;
    const handleSubmit = async (e) => {
        e.preventDefault();
        await fireStore.collection('messages').add({
            sender: authUid,
            receiver: activeUser.uid,
            date: Date.now(),
            text: message,
        });

        scrollingElement.scrollTop = scrollingElement.scrollHeight;
        setMessage('');
        setIsPicker(false);
    };
    return (
        <div style={{ height: '85vh' }}>
            <div className="flex flex-col h-full">
                <div className="flex items-center space-x-3 border-b border-gray-border pb-3 p-3">
                    <div className="h-12 w-12 ">
                        <img
                            className="rounded-full"
                            src={activeUser.photo || './images/avatars/placeholder.png'}
                            alt="authUser"
                        />
                    </div>
                    <div>
                        <div className="text-lg font-bold text-black-icon">
                            {activeUser.displayName}
                        </div>
                        <div className="text-sm  text-gray-base">{activeUser.username}</div>
                    </div>
                </div>
                <div className="flex-1  overflow-auto h-full">
                    <div className="flex flex-col-reverse pb-auto">
                        {allMessages === null ? (
                            <Skeleton count={25} height={70} className="mx-24 mb-2" />
                        ) : allMessages.length > 0 ? (
                            allMessages.map((item) => (
                                <div
                                    style={{ maxWidth: '60%' }}
                                    className={`text-black-icon py-2 px-3 m-2 rounded-xl mb-2 ${
                                        item.sender === authUid
                                            ? 'ml-auto bg-gray-active'
                                            : 'mr-auto bg-white border border-gray-border'
                                    }`}
                                >
                                    <p className="text-md mb-1">{item.text}</p>
                                    <p className="font-sm text-xs text-left">
                                        {new Date(item.date).toLocaleTimeString()}
                                    </p>
                                </div>
                            ))
                        ) : null}
                    </div>
                </div>
                <form action="">
                    <div className=" p-1 rounded-full flex px-3 items-center space-x-2 mx-2 border border-gray-border relative mb-2">
                        <div className="flex items-center">
                            {isPicker && (
                                <Picker
                                    style={{ position: 'absolute', bottom: '50px', left: 0 }}
                                    onSelect={addEmojiHandler}
                                    perLine={8}
                                    showSkinTones={false}
                                    showPreview={false}
                                    emoji="point_up"
                                />
                            )}
                            <button
                                type="button"
                                className="group"
                                onClick={() => setIsPicker(!isPicker)}
                            >
                                <VscSmiley className="group-hover:text-red-rose" size={27} />
                            </button>
                        </div>
                        <div className="flex-1">
                            <input
                                type="text"
                                placeholder="Message..."
                                className="w-full font-medium px-4 py-2 rounded text-gray-base outline-none"
                                onFocus={() => setIsPicker(false)}
                                onChange={(e) => setMessage(e.target.value)}
                                value={message}
                            />
                        </div>
                        <button type="submit" onClick={handleSubmit} className="group">
                            <IoMdSend size={25} className="group-hover:text-blue" />
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ChatBox;
