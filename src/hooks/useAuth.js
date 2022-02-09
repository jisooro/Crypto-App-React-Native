import React, { createContext, useContext, useEffect, useState } from "react";
import auth from '@react-native-firebase/auth';

const AuthContext = createContext();

export const useAuth = () => {

    return useContext(AuthContext);

}

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(undefined);

    const signin = (email, password) => {

        return auth().signInWithEmailAndPassword(email, password).then(response => {
            setUser(response.user)
            console.log('Logged in successfully!')
            return response.user
        });

    }

    const signup = (email, password) => {

        return auth().createUserWithEmailAndPassword(email, password).then(response => {
            setUser(response.user)
            console.log('Signed Up successfully!')
            return response.user
        });

    }
    
    const signout = () => {

        return auth().signOut().then(() => {
            setUser(undefined)
        });
        
    }

    useEffect(() => {

        const unsubscribe = auth().onAuthStateChanged(user => {

            if(user) {
                setUser(user)
            } else {
                setUser(undefined)
            }

        })

        return () => unsubscribe();

    }, []);

    const values = {
        user,
        signin,
        signup,
        signout
    }
    
    return (
        <AuthContext.Provider value = { values }>
            {children}
        </AuthContext.Provider>
    )


}