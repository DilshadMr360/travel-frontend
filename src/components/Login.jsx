import React, { Fragment, useState } from 'react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        alert(`Logged in with email: ${email}`);
    };

    return (
        <Fragment>
            <div className='border border-red-500 md:flex'>

            <div className='w-6/12'>
            <img src="" alt="image" />
            </div>

            <div className='w-6/12'>
            <h1>login form</h1>
            </div>
            </div>
      
        </Fragment>
    );
};

export default Login;
