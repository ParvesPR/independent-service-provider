import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import './SignUp.css';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    if (user) {
        navigate('/home');
    }

    const handleEmail = event => {
        setEmail(event.target.value);
    }

    const handlePassword = event => {
        setPassword(event.target.value);
    }
    const handleConfirm = event => {
        setConfirm(event.target.value);
    }

    const handleCreateUser = event => {
        event.preventDefault();
        if (password !== confirm) {
            setError("Password didn't match")
            return;
        };

        if (password.length < 6) {
            setError('Password must be more than 6 characters');
            return;
        }
        createUserWithEmailAndPassword(email, password);
    }

    return (
        <div className='form-container mt-5'>
            <div>
                <h2 className='form-title py-3'>Sign Up</h2>
                <form onSubmit={handleCreateUser}>
                    <div className='input-group'>
                        <label htmlFor="email">Email</label>
                        <input className='w-100' onBlur={handleEmail} type="email" name="email" required />
                    </div>
                    <div className='input-group'>
                        <label htmlFor="password">Password</label>
                        <input className='w-100' onBlur={handlePassword} type="password" name="password" required />
                    </div>
                    <div className='input-group'>
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <input className='w-100' onBlur={handleConfirm} type="password" name="confirm-password" required />
                    </div>
                    <p className='show-error-msg text-danger'>{error}</p>
                    <input className='form-btn' type="submit" value="Sign Up" />
                </form>
                <p className='mt-2'>Already have an account? <Link className='create-ac-link' to='/login'>Login</Link></p>
                <div className='or-div'>
                    <div className='div-1'><hr /></div>
                    <span> or </span>
                    <div className='div-2'><hr /></div>
                </div>
                <div className='continue-google'>
                    Continue with Google
                </div>
            </div>
        </div>
    );
};

export default SignUp;