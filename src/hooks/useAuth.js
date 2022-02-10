import React, { createContext, useContext, useEffect, useState } from "react";
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from "@react-native-google-signin/google-signin";

GoogleSignin.configure({
    webClientId: '919236309197-dri6o72lv79g4v590ucftvp9jm8ppgk1.apps.googleusercontent.com',
})

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
    
    const googleSignin = async () => {

        const { idToken } = await GoogleSignin.signIn();

        const googleCredential = auth.GoogleAuthProvider.credential(idToken);

        return auth().signInWithCredential(googleCredential).then(response => {
            console.log('User signed in in google successfully!')
            setUser(response.user)
            return response.user
        })
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
        googleSignin,
        signout
    }
    
    return (
        <AuthContext.Provider value = { values }>
            {children}
        </AuthContext.Provider>
    )


}