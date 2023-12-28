import React from "react";
import Header from "./Header";
import { netflixBackgroundImg } from "../utils/constants";
import { useLogin } from "../customHooks/useLogin";
import languageObj from "../utils/languageObject";
import languageState from "../utils/languageState";

const Login = () => {

  const {signIn,
    fullNameValue,
    emailValue,
    errorFullNameSentence,
    errorEmailSentence,
    passwordValue,
    errorPasswordSentence,
    languageValue,
    validateHandle,
    myForm}=useLogin();
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
            <form onSubmit={(e)=>{e.preventDefault()}} className="form bg-opacity-70 bg-black flex flex-col gap-2 justify-center mt-20" action="">


              <h1 className="  text-white s-heading text-start my-4">{signIn?languageObj[languageValue].signIn:languageObj[languageValue].signUp}</h1>

              {signIn?(<></>):(<div style={{display:'flex',flexDirection:'column',gap:'1rem'}}><div><input ref={fullNameValue} className="phone email-input w-80 px-5 py-3 text-sm text-white" placeholder={languageObj[languageValue].fullName} type="text" /><p className="error text-xs">{errorFullNameSentence}</p></div></div>)}

              <input ref={emailValue} className=" email-input w-80 px-5 py-3 text-sm text-white" placeholder={languageObj[languageValue].email} type="email" />
              <p className="error text-xs">{errorEmailSentence}</p>
              <input ref={passwordValue} className=" email-input w-80 px-5 py-3 text-sm border-none text-white " placeholder={languageObj[languageValue].password} type="password" />
              <p className="error text-xs">{errorPasswordSentence}</p>
              <button onClick={validateHandle} className="s-btn">{signIn?languageObj[languageValue].signIn:languageObj[languageValue].signUp} </button>

              <p className="new-signup ">{signIn? languageObj[languageValue].netflix_text:languageObj[languageValue].alreadyExists} <span onClick={myForm} className="text-white cursor-pointer">{signIn?languageObj[languageValue].signUpNow:languageObj[languageValue].SignInNow} </span></p>


            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
