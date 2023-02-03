import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import React from 'react';
import { useState } from 'react';
import { auth, db } from '../firebase';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';

const SendMessage = ({scroll}) => {
    const [message, setMessage] = useState('');

    const handleSendMessage = async (e) => {
        e.preventDefault();
        if (message.trim() === '') {
            alert('메세지를 입력해주세요');
            return;
        }
        const { uid, displayName, photoURL } = auth.currentUser;
        await addDoc(collection(db, "messages"), {
            text: message,
            name: displayName,
            avatar: photoURL,
            createdAt: serverTimestamp(),
            uid
        });
        setMessage('');
        scroll.current.scrollIntoView({behavior: "smooth"})
    }

    return (
        <form action="" className="send-message" onSubmit={(e) => handleSendMessage(e)}>
            <div className="send-box">
                <label htmlFor="messageInput" hidden>메세지 입력</label>
                <input type="text" id='messageInput' name='messageInput' className="form-input" placeholder='메세지를 입력해주세요.' value={message} onChange={(e)=>setMessage(e.target.value)} />
                <button type='submit'><ArrowUpwardOutlinedIcon /></button>
            </div>
        </form>
    );
};

export default SendMessage;