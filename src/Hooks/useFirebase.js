import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged,FacebookAuthProvider,GithubAuthProvider,createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile} from "firebase/auth";
import { useEffect, useState } from "react";
import authInitialize from "../Firebase/Firebase.init";
const useFirebase = () => {
    authInitialize();
    const googleProvider = new GoogleAuthProvider();
    const fbProvider = new FacebookAuthProvider();
    const gitProvider = new GithubAuthProvider();
    const [user, setUser] = useState({});
    const [error, setError] = useState({});
    const auth = getAuth();
    // google authntiaction 
    const googleSingin = () => {
        signInWithPopup(auth, googleProvider)
        .then((result) => {
            setUser(result.user);
        }).catch((error) => {
            setError(error.message);
        });
    }
    // facebook authentiaction
    const facebookSingin = () => {
        signInWithPopup(auth, fbProvider)
        .then((result) => {
            setUser(result.user)
        })
        .catch((error) => {
            setError(error.message)
        });
    }
    // git authentiaction
    const gitSingin = () => {
        signInWithPopup(auth, gitProvider)
        .then((result) => {
            setUser(result.user)
        }).catch((error) => {
            setError(error.message)
        });
    }
    // email and password authentiaction
    const loginfromhandel = (name,email, pass) => {
        createUserWithEmailAndPassword(auth, email, pass)
        .then((result) => {
            setUser(result.user)
            setUsername(name);
        })
        .catch((error) => {
            setError(error.message);
        })
    }
    // setuser name
    const setUsername = (names) => {
        updateProfile(auth.currentUser, {
            displayName:names
        }).then(()=>{})
    }
    // login email password
    const singin = (email,password) => {
        signInWithEmailAndPassword(auth, email, password)
        .then((result) => {
            setUser(result.user);
        })
        .catch((error) => {
            setError(error.message);
        });

        }
    // observer
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
        if (user) {
            setUser(user);
        } else {
            setError({});
        }
        });
    }, [])
    // sing out 
    const logout = () => {
        signOut(auth).then(() => {
            setUser({});
        }).catch((error) => {
            setError(error.message)
        });
    }
    return {
        user,
        error,
        googleSingin,
        facebookSingin,
        gitSingin,
        loginfromhandel,
        logout,
        singin
    }
}
export default useFirebase;