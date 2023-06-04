import { auth } from "@/firebase/firebase";
import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useContext, useEffect, useRef, useState } from "react";



const authContext = createContext();

export default function useAuth() {
    return useContext(authContext);
}

export function AuthProvider({ children, props }) {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)


    const register = async (firstName, lastName, email, password, confirmPassword) => {
        try {
            if (password != confirmPassword) {
                throw new Error("Password does not match")
            }
            const { user } = await createUserWithEmailAndPassword(auth, email, password)
            setUser(user)
        } catch (error) {
            setUser(null)
        }
    }

    const login = async (email, password) => {
        try {
            const { user } = await signInWithEmailAndPassword(auth, email, password)
            setUser(user)
        } catch (error) {
            setUser(null)
        }
    }

    const loginWithGoogle = async () => {
        try {
            const provider = new GoogleAuthProvider()
            const { user } = await signInWithPopup(auth, provider)
            setUser(user)
        } catch (error) {
            setUser(null)
        }
    }

    const logout = async () => {
        await signOut(auth);
        setUser(null);
    };

    const isMounted = useRef(true);
    useEffect(() => {
        if (isMounted) {
            auth.onAuthStateChanged(async (firebaseUser) => {
                if (firebaseUser) {
                    setUser(firebaseUser)
                } else {
                    setUser(null)
                }
                setLoading(false);
            });
        }

        return () => {
            isMounted.current = false;
        };
    }, []);


    const value = {
        user,
        loading,
        loginWithGoogle,
        logout,
        register,
        login,
    }

    return <authContext.Provider value={value} {...props}>
        {children}
    </authContext.Provider>

}


