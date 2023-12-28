import { useDispatch, useSelector } from "react-redux";
import { changeInLanguage } from "../utils/languageState";
import { useNavigate } from "react-router-dom";
import { mySearchCompChange } from "../utils/searchToggle";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";

export const useHeader=()=>{
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const storeName = useSelector((state) => state.user?.displayName || "");
    const searchBoolean = useSelector((store) => store.mySearch.mySearchComp);
    const languageValue = useSelector((store) => store.languageChange.language);
  
    const handleChange = (e) => {
      dispatch(changeInLanguage(e.target.value));
    };
  
    const handleToggle = () => {
      dispatch(mySearchCompChange());
    };
    const handleSignOut = () => {
      signOut(auth)
        .then(() => {
          console.log("signOut successfull");
          // Sign-out successful.
        })
        .catch((error) => {
          // An error happened.
        });
    };
  
    useEffect(() => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          const { uid, email, displayName } = user;
          dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
          navigate("/mainpage");
  
          // ...
        } else {
          // User is signed out
          dispatch(removeUser());
          navigate("/");
          // ...
        }
      });
    }, [dispatch, navigate]);
    return {storeName,
        searchBoolean,
        languageValue,
        handleChange,
        handleToggle,
        handleSignOut,
           }
}