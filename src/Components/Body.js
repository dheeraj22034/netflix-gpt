import React, { useEffect } from 'react';
import Login from './Login';
import Browser from './Browser';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import { onAuthStateChanged } from "firebase/auth";
import { auth} from '../Utils/firebase.js';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../Utils/userSlice';



const Body = () => {
    const dispatch =useDispatch();


 const appRouter =createBrowserRouter([
    {
        path: "/",
        element: <Login/>,
    },
    {
        path: "/browse",
        element: <Browser/>,
    },
 ]);


useEffect(() =>{
    onAuthStateChanged(auth, (user) => {
  if (user) {
   
    const {uid,email,displayName ,photoURL} = user;
    dispatch(addUser({uid: uid , email: email ,displayName : displayName}));
    // ...
  } else {
    dispatch(removeUser());
  }
});


},[]);

  return (
    <div>
      <RouterProvider router ={appRouter}/>
    </div>
  );
}

export default Body;
