import React, { Fragment, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginImage from "../assets/LoginImage.jpg";
import { defaultColor1 } from '../config/colors';
import api from '../services/api';

const Register = () => {

    const navigate = useNavigate();
    
    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfimrPassowrd] = useState('');
    const [error, setError] = useState('');

    const handleRegister = async () => {
        if (password !== confirmpassword) {
          setError('Passwords do not match');
          return;
        }

        try {
            await api.post('/register', {
              name: username,
              email: email,
              password: password,
              password_confirmation: confirmpassword,
            });
            console.log('Registered successfully');
            navigate('/');
          } catch (error) {
            setError('Registration failed. Please check your details and try again.');
          }
        };
        const navigateToLogin = () => {
            navigate('/');
          };
          
    return (
        <Fragment>
        <div className='w-screen min-h-screen md:flex'>
            <div className='md:w-8/12 '>
                <img src={LoginImage} alt="image" className="w-full h-full " />
            </div>
            <div className='flex items-center justify-center w-8/12 mx-auto mt-2 md:w-4/12 md:-mt-10'>
                <div className="w-full mx-5 space-y-8">
                    <div>
                        <h2 className="text-2xl font-bold text-center poppins-font" style={{ color: defaultColor1 }}>Register</h2>
                        <h2 className="mt-5 text-sm text-center">Create your account to start your journey with us. Access exclusive features and personalized experience.</h2>
                    </div>
                    <form className="md:space-y-10" action="#" method="POST">
                        <input type="text" value={username} onChange={(e) => setUserName(e.target.value)} placeholder="User Name" className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none" />
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm " />
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="block w-full px-3 py-2 mt-4 border border-gray-300 rounded-md shadow-sm focus:outline-none" />
                        <input type="password" value={confirmpassword} onChange={(e) => setConfimrPassowrd(e.target.value)} placeholder="Confirm Password" className="block w-full px-3 py-2 mt-4 border border-gray-300 rounded-md shadow-sm focus:outline-none" />
                        <button type="button" onClick={handleRegister} className="w-full px-4 py-2 mt-4 text-white border border-transparent rounded-md shadow-sm" style={{ backgroundColor: defaultColor1 }}>Register</button>
                        <div className='text-sm text-center'>
                            <h1>or</h1>
                            <p>Already have an Account? <span><a href="#" className='font-bold underline' style={{ color: defaultColor1 }} onClick={navigateToLogin}>Sign In</a></span></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </Fragment>
    );
};

export default Register;
