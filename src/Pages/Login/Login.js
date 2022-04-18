import React, { useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './Login.css';
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../Loading/Loading';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);


    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';

    if (loading || sending) {
        return <Loading></Loading>
    }

    if (user) {
        navigate(from, { replace: true });
    }
    const handleLogin = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);
    };

    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else {
            toast('please enter your email address');
        }
    }


    return (
        <div className='form-container mt-5'>
            <div>
                <h2 className='form-title py-3'>Login</h2>
                <form onSubmit={handleLogin}>
                    <div className='input-group'>
                        <label htmlFor="email">Email</label>
                        <input className='w-100' ref={emailRef} type="email" name="email" required />
                    </div>
                    <div className='input-group'>
                        <label htmlFor="password">Password</label>
                        <input className='w-100' ref={passwordRef} type="password" name="password" required />
                    </div>
                    <p>{error?.message}</p>
                    {loading && <p>Loading...</p>}
                    <input className='form-btn' type="submit" value="Login" />
                </form>
                <p className='mt-3'>New to Amerta? <Link className='create-ac-link' to='/signup'>Create an account</Link></p>
                <p>Forget Password? <button className='btn btn-link text-primary pe-auto text-decoration-none' onClick={resetPassword}>Reset Password</button> </p>
                <div className='or-div'>
                    <div className='div-1'><hr /></div>
                    <span> or </span>
                    <div className='div-2'><hr /></div>
                </div>
                <SocialLogin></SocialLogin>
                <ToastContainer></ToastContainer>
            </div>
        </div>
    );
};

export default Login;