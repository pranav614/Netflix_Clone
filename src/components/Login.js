import React from "react";
import Header from "./Header";
import { useState,useRef } from "react";
import { emailValidation } from "../utils/validation";
import { passwordValidation } from "../utils/validation";
import {createUserWithEmailAndPassword } from "firebase/auth";
import {signInWithEmailAndPassword,updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase"
import { fullNameValidation } from "../utils/validation";
import { useNavigate } from "react-router-dom";
import { useDispatch} from 'react-redux';
import { addUser } from '../utils/userSlice';
import { netflixBackgroundImg } from "../utils/constants";


// import add user after comming from college

const Login = () => {
  const[signIn,setSignUp]=useState(true);
  const emailValue=useRef(null);
  const passwordValue=useRef(null);
  const fullNameValue=useRef(null);
  const[errorEmailSentence,setErrorEmailSentence]=useState(null);
  const[errorPasswordSentence,setErrorPasswordSentence]=useState(null);
  const[errorFullNameSentence,setErrorFullNameSentence]=useState(null);
  const navigate=useNavigate();
  const dispatch=useDispatch();


  const myForm=()=>{
    setSignUp(!signIn)
    }

  const validateHandle=()=>{
    if(signIn){
      const emailError=emailValidation(emailValue.current.value)
      setErrorEmailSentence(emailError)
      const passwordError=passwordValidation(passwordValue.current.value);
      setErrorPasswordSentence(passwordError)
      if (errorPasswordSentence || errorEmailSentence) return;
    }
    if(!signIn){
      let emailError=emailValidation(emailValue.current.value)
      setErrorEmailSentence(emailError)
      let passwordError=passwordValidation(passwordValue.current.value);
      setErrorPasswordSentence(passwordError)
      let fullNameError=fullNameValidation(fullNameValue.current.value);
      setErrorFullNameSentence(fullNameError)
      if(errorEmailSentence ||errorPasswordSentence ||fullNameError) return;
    }

    
    if(!signIn){

      createUserWithEmailAndPassword(auth, emailValue.current.value, passwordValue.current.value)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          console.log(user)
          navigate('mainpage')

          updateProfile(user, {
            displayName: fullNameValue.current.value,
          
          }).then(() => {
            const {uid,email,displayName} =auth.currentUser;
            dispatch(addUser({uid:uid,email:email,displayName:displayName}))
          }).catch((error) => {
            // An error occurred
            // ...
          });

          // ...
        })
        .catch((error) => {
          // const errorCode = error.code;
          // const errorMessage = error.message;
          alert('User already created the account.')
          // ..
        });
    }
    else{
      signInWithEmailAndPassword(auth, emailValue.current.value, passwordValue.current.value)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.warn(user)
        navigate('/mainpage')

        // ...
      })
      .catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        alert("No Account Registered on this email address. Please try again");
      });
    }

  }
  return (
    <div className="">
      <div className="imageContainer">
        <img
          className="mainImg transform  scale-140  scale-y-150 transition-transform duration-300 "
          src={netflixBackgroundImg}
          alt=""
        />
      </div>
      <div className="login-container ">
        <div className="w-screen overflow-x-hidden">
          <Header />
          <div className="w-screen flex justify-center items-center ">
            <form onSubmit={(e)=>{e.preventDefault()}} className="form bg-opacity-70 bg-black flex flex-col gap-2 justify-center   " action="">


              <h1 className="  text-white s-heading text-start my-4">{signIn?"Sign In":"Sign Up"}</h1>

              {signIn?(<></>):(<div style={{display:'flex',flexDirection:'column',gap:'1rem'}}><div><input ref={fullNameValue} className="phone email-input w-80 px-5 py-3 text-sm text-white" placeholder="Full Name" type="text" /><p className="error text-xs">{errorFullNameSentence}</p></div></div>)}

              <input ref={emailValue} className=" email-input w-80 px-5 py-3 text-sm text-white" placeholder="Email" type="email" />
              <p className="error text-xs">{errorEmailSentence}</p>
              <input ref={passwordValue} className=" email-input w-80 px-5 py-3 text-sm border-none text-white " placeholder="Password" type="password" />
              <p className="error text-xs">{errorPasswordSentence}</p>
              <button onClick={validateHandle} className="s-btn">{signIn?"Sign In":"Sign Up"} </button>

              <p className="new-signup ">{signIn? "New to Netflix?":"Already Exists?"} <span onClick={myForm} className="text-white cursor-pointer">{signIn?"Sign up now":"Sign in now"} </span></p>


            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
