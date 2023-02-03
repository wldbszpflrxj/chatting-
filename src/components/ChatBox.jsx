import { collection, limit, onSnapshot, orderBy, query, QuerySnapshot } from 'firebase/firestore';
import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { db } from '../firebase';
import Message from './Message';
import SendMessage from './SendMessage';

const ChatBox = () => {
    const [message, setMessage] = useState([]);
    const scroll = useRef();

    useEffect(() => {
        const q = query(
            collection(db, "messages"),
            orderBy('createdAt'),
            limit(50)
        );
        const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
            let messages = [];
            QuerySnapshot.forEach((doc) => {
                messages.push({ ...doc.data(), id: doc.id })
            });
            setMessage(messages);
        });
        return () => unsubscribe;
    },[])
    return (
        <main className="chat-box">
            <div className="messages-wrapper">
                {message?.map(message => (
                    <Message key={message.id} message={message} />
                ))}
            </div>
            <span ref={scroll}></span>
            <SendMessage scroll={scroll} />
        </main>
    );
};

export default ChatBox;