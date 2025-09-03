import React from 'react';
import Header from './Header';
import { useState, useRef } from 'react';
import {checkValidateData} from "../Utils/validate.js"
import {createUserWithEmailAndPassword , signInWithEmailAndPassword , updateProfile} from "firebase/auth";
import { auth} from '../Utils/firebase.js';

import { useDispatch } from 'react-redux';
import { addUser } from '../Utils/userSlice';

const Login = () => {
  const[isSignInForm,setisSignInForm]=useState(true);
  const[errormessage,setErrorMessage] =useState(null);
  
  const dispatch =useDispatch();

  const  name =useRef(null);
  const email =useRef(null);
  const password  =useRef(null);

  const handleButtonClick =() =>{

  const message= checkValidateData(email.current.value ,password.current.value);
   
  setErrorMessage(message);
  if(message) return;

  if(!isSignInForm){
    createUserWithEmailAndPassword(auth, email.current.value ,password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    updateProfile(user, {
  displayName: "name.current.value", photoURL: "https://example.com/jane-q-user/profile.jpg"
    }).then(() => {
          const {uid,email,displayName ,photoURL} = auth.currentUser;
            dispatch(addUser({uid: uid , email: email ,displayName : displayName}));

 
}).catch((error) => {
   setErrorMessage(error.message);
});
    
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorMessage+"-"+errorCode)
   
  });

  }
  else{
    signInWithEmailAndPassword(auth, email.current.value ,password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });


  }
 
 
  };


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
      <form  onSubmit={(e) => e.preventDefault()}className=' w-3/12  p-12 absolute bg-black my-44 mx-auto right-0 left-0 rounded-lg bg-opacity-80' >
      <h1 className='text-white font-bold text-3xl py-4 mx-10'> {isSignInForm? "sign in" :"sign up"}</h1>
      {!isSignInForm && <input 
        type="text" 
        placeholder='Full name' 
        className='p-4 my-4 w-full bg-gray-600 '/>
      }
        <input 
        ref={email}
        type="text" 
        placeholder='Email address or phone number' 
        className='p-4 my-4 w-full bg-gray-600 '/>
        <input 
        ref={password}
        type="passWord" 
        placeholder='password'
         className='p-4 my-4 w-full bg-gray-600 '/>
         <p className='text-red-500'> {errormessage}</p>
        <button className='p-4 my-6 bg-red-700 w-full rounded-lg' onClick={handleButtonClick}>
            {isSignInForm? "sign in" :"sign up"}</button>
        <h1 className='text-white cursor-pointer ' onClick={toggleSignInform}>
            {isSignInForm 
            ? "New to netflix? sign up now" 
            :"Already registered sign in now"}</h1>
      </form>
    </div>
  )
};

export default Login;
