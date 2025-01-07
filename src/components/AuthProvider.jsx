import { createContext, useEffect, useState } from "react";
export const AuthContext = createContext(null)
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, updateProfile } from "firebase/auth";
import auth from "../firebase"
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const singUpUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const singInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const signinWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }
    const signOutUser = () => {
        return signOut(auth)
    }
    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        })
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => unSubscribe()
    }, [])

    const authInfo = {
        singUpUser,
        singInUser,
        signinWithGoogle,
        signOutUser,
        updateUserProfile,
        setUser,
        loading,
        user,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;