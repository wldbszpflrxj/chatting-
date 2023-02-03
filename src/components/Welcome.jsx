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
            <h2>Welcome to React Chat.</h2>
            <p>Sign in with Google to chat with your fellow React Developers.</p>
            <button className="sign-in">
                <img width={30} src={googleIcon} onClick={googleSignIn} alt="sign in with google" type="button"/> google
            </button>
        </main>
    );
};

export default Welcome;