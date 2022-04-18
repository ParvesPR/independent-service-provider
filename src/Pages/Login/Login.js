import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './Login.css';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);


    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';

    const handleEmail = event => {
        setEmail(event.target.value);
    }

    const handlePassword = event => {
        setPassword(event.target.value);
    };
    if (user) {
        navigate(from, { replace: true });
    }
    const handleLogin = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);
    }


    return (
        <div className='form-container mt-5'>
            <div>
                <h2 className='form-title py-3'>Login</h2>
                <form onSubmit={handleLogin}>
                    <div className='input-group'>
                        <label htmlFor="email">Email</label>
                        <input className='w-100' onBlur={handleEmail} type="email" name="email" required />
                    </div>
                    <div className='input-group'>
                        <label htmlFor="password">Password</label>
                        <input className='w-100' onBlur={handlePassword} type="password" name="password" required />
                    </div>
                    <p>{error?.message}</p>
                    {loading && <p>Loading...</p>}
                    <input className='form-btn' type="submit" value="Login" />
                </form>
                <p className='mt-3'>New to Amerta? <Link className='create-ac-link' to='/signup'>Create an account</Link></p>
                <div className='or-div'>
                    <div className='div-1'><hr /></div>
                    <span> or </span>
                    <div className='div-2'><hr /></div>
                </div>
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Login;