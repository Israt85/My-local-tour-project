import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from "../../firebase.init";

export const AuthContext = createContext();

const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user,setUser] = useState()
    const [loading, setLoading] = useState(false)

    
    const userSignup = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email,password)
    }
    const userSignIn = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
          console.log(currentUser);
          setUser(currentUser)
          setLoading(false)
        })
        return ()=> unsubscribe()
      },[])
   

    const userLogOut = ()=>{
        setLoading(true)
        return signOut(auth)
    }
    const userProfile = (name, photo) =>{
        setLoading(true)
        return updateProfile(auth.currentUser,{
            displayName: name,
            photoURL: photo
        })
    }
    
    const authInfo ={
       user,
       userSignup,
       userSignIn,
       loading,
       userLogOut,
       userProfile
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;