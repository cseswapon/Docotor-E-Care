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
    const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth();
    // google authntiaction 
    const googleSingin = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider)
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
        setIsLoading(true)
        return signInWithPopup(auth, gitProvider)
    }
    // email and password authentiaction
    const loginfromhandel = (name, email, pass) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, pass)
        .then((result) => {
            setUser(result.user)
            setUsername(name);
        })
        .catch((error) => {
            setError(error.message);
        }).finally(() => setIsLoading(false));
    }
    // setuser name
    const setUsername = (names) => {
        setIsLoading(true)
        updateProfile(auth.currentUser, {
            displayName:names
        }).then(()=>{}).finally(() => setIsLoading(false));
    }
    // login email password
    const singin = (email,password) => {
        setIsLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    // observer
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
        if (user) {
            setUser(user);
        } else {
            setError({});
        }
            setIsLoading(false);
        });
    }, [])
    // sing out 
    const logout = () => {
        setIsLoading(true)
        signOut(auth).then(() => {
            setUser({});
        }).catch((error) => {
            setError(error.message)
        }).finally(() => setIsLoading(false));
    }
    return {
        user,
        error,
        googleSingin,
        facebookSingin,
        gitSingin,
        loginfromhandel,
        logout,
        singin,
        isLoading,
        setIsLoading
    }
}
export default useFirebase;