import React from 'react';
import googleIcon from '../assets/images/google-icon.png';
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

const NavBar = () => {
    const [user] = useAuthState(auth)
    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithRedirect(auth, provider);
    }
    const googleSignOut = () => {
        auth.signOut();
    }
    return (
        <nav className='nav-bar'>
            <h1>유니짱 채팅</h1>
            {
            !user
            ? 
                <button className="sign-in" onClick={googleSignIn} type="button">
                    <img width={30} src={googleIcon} alt="sign in with google" /> google
                </button>
            :
                <button className="sign-out" onClick={googleSignOut} type='button'>
                    <LogoutOutlinedIcon />
                </button>
            }
        </nav>
    );
};

export default NavBar;