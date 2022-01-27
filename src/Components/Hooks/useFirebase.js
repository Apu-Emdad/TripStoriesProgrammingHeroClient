import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/Firebase.init";
// import initializeAuthentication from "../Firebase/firebase.init";
initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [authError, setAuthError] = useState("");

  const auth = getAuth();
  /*==== signing with google start ======*/
  const signInUsingGoogle = () => {
    setIsLoading(true);
    const googleProvider = new GoogleAuthProvider();

    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setUser(result.user);
        saveUser(user.email, user.displayName, "PUT");
      })
      .finally(() => setIsLoading(false));
  };
  /* =======signing with google end ======*/

  /*--register start--*/
  const registerUser = (email, password, name, history) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setAuthError("");
        //saving user
        saveUser(email, name, "POST");
        // updating the profile name
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {
            history.push("/");
            history.go();
          })
          .catch((error) => {});
      })
      .catch((error) => {
        setAuthError(error.message);
        console.log(error);
      })
      .finally(() => setIsLoading(false));
  };
  /*--register end--*/
  /* === save user start======= */
  const saveUser = (email, displayName, method) => {
    const user = { email, displayName }; //ফায়ারবেসে name, displayName হিসেবে থাকে এজন্য parameter displayName নেয়া হয়েছে

    fetch("https://serene-retreat-28688.herokuapp.com/users", {
      method: method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    });
  };
  /* === save user end======= */

  /* ===observing user log in start ====*/
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, [auth]);
  /* ===observing user log in end =====*/

  /* ==== Login with email and password start===== */
  const loginUser = (email, password, location, history) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const destination = location?.state?.from || "/home";
        history.push(destination);
        setAuthError("");
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };
  /* ==== Login with email and password end===== */

  /* ===== Log Out start ========== */
  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {})
      .finally(() => setIsLoading(false));
  };
  /* ===== Log Out end ========== */

  return {
    signInUsingGoogle,
    user,
    isLoading,
    registerUser,
    logOut,
    loginUser,
  };
};
export default useFirebase;
