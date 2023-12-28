import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { emailValidation, fullNameValidation, passwordValidation } from "../utils/validation";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser } from "../utils/userSlice";

export const useLogin=()=>{
    const[signIn,setSignUp]=useState(true);
    const emailValue=useRef(null);
    const passwordValue=useRef(null);
    const fullNameValue=useRef(null);
    const[errorEmailSentence,setErrorEmailSentence]=useState(null);
    const[errorPasswordSentence,setErrorPasswordSentence]=useState(null);
    const[errorFullNameSentence,setErrorFullNameSentence]=useState(null);
    const navigate=useNavigate();
    const dispatch=useDispatch();
  const languageValue = useSelector((store) => store.languageChange.language);

  
    const myForm=()=>{
      setSignUp(!signIn)
      }
      const validateForm=()=>{
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
      }
      const handleSignUp=()=>{
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

      const handleSignIn=()=>{
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
    const validateHandle=()=>{
        validateForm();
      if(signIn){
        handleSignIn();    
      }
      else{
        handleSignUp();
      }
    }
    return{
        signIn,
        fullNameValue,
        emailValue,
        errorFullNameSentence,
        errorEmailSentence,
        passwordValue,
        errorPasswordSentence,
        languageValue,
        validateHandle,
        myForm,
      }
}