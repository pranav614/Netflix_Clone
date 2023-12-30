import React from "react";
import { netflixLogo, profile } from "../utils/constants";
import { Link } from "react-router-dom";
import { LANGUAGE_ARRAY } from "../utils/constants";
import languageObj from "../utils/languageObject";
import { useHeader } from "../customHooks/useHeader";
import AddedList from "./AddedMovieList/AddedList";

const Header = () => {
  const {storeName,
    searchBoolean,
    languageValue,
    popularMovieList,
    handleChange,
    handleToggle,
    handleSignOut,}=useHeader();
  return (
    <nav className=" w-full z-10 bg-gradient-to-b from-black to-transparent">
      <div className=" flex items-center justify-between w-full px-9 header ">
        <div>
          <Link to="">
            <img className="h-20 w-50 " src={netflixLogo} alt="" />
          </Link>
        </div>

        {storeName && (
          <div className="flex justify-between w-full  ">
            <div className="text-white ml-8 cursor-pointer relative list">
              <p>{languageObj[languageValue].list}</p>
              <div className="absolute top-8 listContainer h-[600px] w-[400px] z-20  overflow-y-scroll ">
                      <AddedList  array={popularMovieList} />  
              </div>
            </div>

            <div className="flex  justify-center items-center gap-3">
              
              <button className="bg-white px-1 rounded" onClick={handleToggle}>
                {!searchBoolean ? (
                  <>
                    <span>{languageObj[languageValue].search}</span>
                  </>
                ) : (
                  <div>
                    <span>{languageObj[languageValue].home}</span>
                  </div>
                )}
              </button>
             { <select
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
              </select>}
              <div className="profileImg relative">
                <div className="flex items-baseline gap-1  ">
                  <img className="" src={profile} alt="" />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="up-arrow "
                    height="10"
                    viewBox="0 0 24 24"
                    width="10"
                    fill="white"
                  >
                    <path d="M12 2L0 14h24L12 2z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="down-arrow"
                    height="10"
                    viewBox="0 0 24 24"
                    width="10"
                    fill="white"
                  >
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M12 22L24 10 0 10z" />
                  </svg>
                </div>
                <p className="text-white  userName">{storeName}</p>
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
        {!storeName&& <select
                name="language"
                id="languageSelect"
                onChange={handleChange}
                className="cursor-pointer bg-transparent border-[1px] px-4 py-1.5 mr-1 rounded-sm text-white"
              >
                {LANGUAGE_ARRAY.map((language) => (
                  <option key={language.identifier} value={language.identifier}>
                    {language.value}
                  </option>
                ))}
              </select>}
      </div>
    </nav>
  );
};

export default Header;
