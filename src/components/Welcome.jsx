import React from 'react';
import googleIcon from '../assets/images/google-icon.png';
import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth';
import { auth } from '../firebase';

const Welcome = () => {
    
    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithRedirect(auth, provider);
    }
    return (
        <main className="welcome">
            <h2>안녕하세요! 유니짱 채팅방입니다. </h2>
            <p>구글 아이디로 로그인 해주세요 ^_____^</p>
            <button type="button" className="sign-in" onClick={googleSignIn} >
                <img width={30} src={googleIcon} alt="sign in with google" /> google
            </button>
        </main>
    );
};

export default Welcome;