import { useDispatch, useSelector } from "react-redux";
import { changeInLanguage } from "../utils/languageState";
import { useNavigate } from "react-router-dom";
import { mySearchCompChange } from "../utils/searchToggle";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";

export const useHeader = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { displayName } = useSelector((state) => state.user || {});
  const searchBoolean = useSelector((store) => store.mySearch.mySearchComp);
  const languageValue = useSelector((store) => store.languageChange.language);
  const popularMovieList=useSelector((store)=>store.list.myList)


  const handleChange = (e) => {
    dispatch(changeInLanguage(e.target.value));
  };

  const handleToggle = () => {
    dispatch(mySearchCompChange());
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Sign-out successful");
      })
      .catch((error) => {
        console.error("Sign-out error:", error);
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
        navigate("/mainpage");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
  }, [dispatch, navigate]);
    return {storeName: displayName,
        searchBoolean,
        languageValue,
        popularMovieList,
        handleChange,
        handleToggle,
        handleSignOut,
           }
}