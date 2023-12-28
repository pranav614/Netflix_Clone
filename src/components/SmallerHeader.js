import React from "react";
import { netflixLogo } from "../utils/constants";
import { Link } from "react-router-dom";
import { LANGUAGE_ARRAY } from "../utils/constants";
import languageObj from "../utils/languageObject";
import { useSmallHeader } from "../customHooks/useSmallHeader";

const SmallerHeader = () => {
 
 const{storeName,
    searchBoolean,
    languageValue,
    isActive,
    handleClick,
    handleChange,
    handleToggle,
    handleSignOut,}=useSmallHeader();

  return (
    <nav className="absolute w-full z-10 bg-gradient-to-b from-black to-transparent">
      <div className=" flex items-center justify-between px-2 ">
        <div>
          <Link to="">
            <img className="h-20 w-40 netflix-logo" src={netflixLogo} alt="" />
          </Link>
        </div>

   <div className="flex justify-center items-center gap-1.5">   
        <div className="flex gap-3 justify-center items-center ">
            <div>
        <div className="text-white cursor-pointer relative list">
              <p>{languageObj[languageValue].list}</p>
              <div className="absolute top-8 listContainer h-[600px] w-[400px] bg-white "></div>
            </div>
        </div>
            
       {storeName &&(
        
         <button className="bg-white px-1 py-0.25  rounded" onClick={handleToggle}>
        {  !searchBoolean ? (
                  <>
                    <span className="">{languageObj[languageValue].search}</span>
                  </>
                ) : (
                  <div>
                    <span>{languageObj[languageValue].home}</span>
                  </div>
                )}{" "}
              </button>)}
              <select
                name="language"
                id="languageSelect"
                onChange={handleChange}
                className="cursor-pointer bg-transparent border-[1px] px-1 py-1 rounded-sm text-white"
              >
                {LANGUAGE_ARRAY.map((language) => (
                  <option key={language.identifier} value={language.identifier}>
                    {language.value}
                  </option>
                ))}
              </select>
        </div>

        <div className="flex relative  ">

        {storeName && isActive && (
          <div className="flex justify-center items-start absolute top-12 right-[-10px] w-[120px] bg-black  h-screen" id="navSlider">
            <div className="flex flex-col justify-center items-center gap-3">
              
              <div className="profileImg relative">
                <div className="flex items-baseline gap-1">
                 
                  
                </div>

                <p className="text-white m-0 mt-1  ">{storeName}</p>
              </div>
              <p
                className=" cursor-pointer text-white bg-red px-2 py-1 rounded-sm hover:opacity-80"
                onClick={handleSignOut}
              >
                {languageObj[languageValue].signOut}
              </p>
              
            </div>
          </div>
        )}
        <button
                className={`hamburger hamburger--collapse ${
                  isActive ? "is-active" : ""
                }`}
                type="button"
                onClick={handleClick}
              >
                <span className="hamburger-box">
                  <span className="hamburger-inner"></span>
                </span>
              </button>
              
        </div>
        </div> 
      </div>
    </nav>
  );
};

export default SmallerHeader;
