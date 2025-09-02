import React from 'react';
import Header from './Header';
import { useState } from 'react';

const Login = () => {
  const[isSignInForm,setisSignInForm]=useState(true);

  const toggleSignInform =() =>{
    setisSignInForm(!isSignInForm);
    

  };

  return (
    <div>
      <Header/>
      <div className='absolute'>
        <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/cb72daa5-bd8d-408b-b949-1eaef000c377/web/IN-en-20250825-TRIFECTA-perspective_a3209894-0b01-4ddb-b57e-f32165e20a3f_medium.jpg"
        alt="bg-logo"
        />
      </div>
      <form className=' w-3/12  p-12 absolute bg-black my-44 mx-auto right-0 left-0 rounded-lg bg-opacity-80' >
      <h1 className='text-white font-bold text-3xl py-4 mx-10'> {isSignInForm? "sign in" :"sign up"}</h1>
      {!isSignInForm && <input 
        type="text" 
        placeholder='Full name' 
        className='p-4 my-4 w-full bg-gray-600 '/>
      }
        <input 
        type="text" 
        placeholder='Email address or phone number' 
        className='p-4 my-4 w-full bg-gray-600 '/>
        <input 
        type="passWord" 
        placeholder='password'
         className='p-4 my-4 w-full bg-gray-600 '/>
        <button className='p-4 my-6 bg-red-700 w-full rounded-lg'>{isSignInForm? "sign in" :"sign up"}</button>
        <h1 className='text-white cursor-pointer ' onClick={toggleSignInform}>{isSignInForm? "New to netflix? sign up now" :"Already registered sign in now"}</h1>
      </form>
    </div>
  )
};

export default Login;
