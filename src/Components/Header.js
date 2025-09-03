import React from 'react'
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from '../Utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { addUser, removeUser } from '../Utils/userSlice';
import { useEffect } from 'react';
import { AVATAR, LOGO } from '../Utils/constants';

const Header = () => {
    const dispatch =useDispatch();
    const navigate =useNavigate();
    const user = useSelector(store => store.user);
    
    const handleSignOut = () =>{
        
     signOut(auth).then(() => {
    
}).catch((error) => {
  navigate("/error");
});


    };

    useEffect(() =>{
     const unSubscribe = onAuthStateChanged(auth, (user) => {
  if (user) {
   
    const {uid,email,displayName ,photoURL} = user;
    dispatch(addUser({uid: uid , email: email ,displayName : displayName , photoURL: photoURL}));
    navigate("/browse");
  } else {
    dispatch(removeUser());
    navigate("/")
  }
});
return () => unSubscribe ();
},[]);
  return (
    <div className='absolute  w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
      <img className='w-36'
      src={LOGO}
      alt="logo"
      />
      {user && (<div>
        <img className='w-14'
        src={AVATAR}
        alt ="logo screen"
        />
        <button onClick={handleSignOut} className='font-bold  text-white'> sign out</button>
      </div>
)}
    </div>
  )
}

export default Header;
