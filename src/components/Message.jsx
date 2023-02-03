import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';

const Message = ({ message }) => {
    const [user] = useAuthState(auth);
    return (
        <div className={`chat-bubble ${message.uid === user.uid ? "right" : ""}`}>
            <div className="info">
                <img src={message.avatar} alt={`${message.name} 이미지`} className="chat-bubble-left" />
                <p className="user-name">{message.name}</p>
            </div>
            <p className="text">{message.text}</p>
        </div>
    );
};

export default Message;