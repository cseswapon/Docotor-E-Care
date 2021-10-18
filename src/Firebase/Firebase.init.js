import firebaseConfig from "./Firebase.confing"
import { initializeApp } from "firebase/app";
const authInitialize = () => {
    initializeApp(firebaseConfig)
}
export default authInitialize;