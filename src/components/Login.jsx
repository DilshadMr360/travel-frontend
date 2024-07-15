import React, { Fragment, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginImage from "../assets/LoginImage.jpg";
import { defaultColor1 } from '../config/colors';
import api from '../services/api';
import { useUser } from '../context/UserContext'; 

const Login = () => {

    const navigate = useNavigate();
    const { setUser } = useUser(); 
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
  
  
        const handleLogin = async () => {
            try {
              const response = await api.post('/login', {
                email: email,
                password: password,
              });
              localStorage.setItem('token', response.data.token);
              setUser(response.data.user);
              console.log('Logged in successfully', response.data.user.name );
              navigate('/home');
            } catch (error) {
              setError('Login failed. Please check your credentials and try again.');
            }
          };

    const navigateToRegister = () => {
        navigate('/register');
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
                            <h2 className="text-2xl font-bold text-center poppins-font" style={{ color: defaultColor1 }}>Login</h2>
                            <h2 className="mt-5 text-sm text-center ">Login to continue your journey. Access exclusive features and personlized experiance</h2>
                        </div>
                        <form className=" md:space-y-10" action="#" method="POST">
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm " />
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="block w-full px-3 py-2 mt-4 border border-gray-300 rounded-md shadow-sm focus:outline-none" />
                            <button type="button" onClick={handleLogin} className="w-full px-4 py-2 mt-4 text-white border border-transparent rounded-md shadow-sm " style={{ backgroundColor: defaultColor1 }} >Login</button>
                            <div className='text-sm text-center'>
                            <h1>or </h1>
                            <p>Don't have an Account <span> <a href="#" className='font-bold underline'  style={{ color: defaultColor1 }} onClick={navigateToRegister}>Create an Account</a></span></p>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </Fragment>
    );
};

export default Login;
