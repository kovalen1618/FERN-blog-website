import React from 'react'
import { auth, provider } from '../firebase-config';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

function Login({ setIsAuth }) {
    // For navigating between different routes
    let navigate = useNavigate();

    const signInWithGoogle = () => {
        signInWithPopup(auth, provider).then((result) => {
            localStorage.setItem("isAuth", true);
            // Set the state of setIsAuth to true
            setIsAuth(true);
            // After signing-in, user is redirected
            navigate('/');
        })
    };

    return (
        <div className='loginPage'>
            <p>Sign-In With Google to Continue</p>
            <button className='login-with-google-btn' onClick={signInWithGoogle}>
                Sign-in with Google
            </button>
        </div>
    )
}

export default Login