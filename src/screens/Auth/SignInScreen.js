import { View, Text, SafeAreaView, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../hooks/useAuth';
import firestore from '@react-native-firebase/firestore';

const SignInScreen = () => {

    const navigation = useNavigation();
    const { signin, googleSignin } = useAuth();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const onSubmit = async () => {
        if(email !== '' || password !== ''){
            setError(false)
            try {
                await signin(email, password);
            } catch (error) {
                setError(true)
                console.log(error)
                if(error.code === 'auth/invalid-email') {
                    setErrorMessage('The email address is badly formatted.')
                } else if (error.code === 'auth/user-not-found') {
                    setErrorMessage('There is no user with the email address introduced.')
                } else if (error.code === 'auth/wrond-password') {
                    setErrorMessage('The password is invalid or you have already signed up with google.')
                } else if (error.code === 'auth/email-already-in-use') {
                    setErrorMessage('There is an account using the email already.')
                }
            }
        } else {
            setError(true)
            setErrorMessage('No input should be left empty.')
        }
    }

    const prueba = async () => {
        try {
            await googleSignin();
        } catch (error) {
            console.log(error, error.code);
            if(error.code === '12501'){
                console.log('The user has cancelled signing in with Google.')
            }
        }
    }

    return (
        <SafeAreaView style = { styles.safeAreaContainer } >
            <View style = {{ padding: 15 }}>
                <Text style = { styles.title }>SIGN IN</Text>

                <View style = { styles.formContainer }>
                    <TextInput
                        placeholder = "email"
                        placeholderTextColor = 'white'
                        style = { styles.input }
                        autoCapitalize = 'none'
                        keyboardType = 'email-address'
                        textContentType = 'emailAddress'
                        onChangeText = { email => setEmail(email) }
                    />
                    <TextInput
                        placeholder = "password"
                        placeholderTextColor = 'white'
                        style = { styles.input }
                        autoCapitalize = 'none'
                        secureTextEntry = { true }
                        textContentType = 'password'
                        onChangeText = { password => setPassword(password )}
                    />

                    <TouchableOpacity
                        style = {{ marginTop: 10 }}
                        onPress = { () => navigation.navigate('RecoverPassword')}
                    >
                        <Text style = {{ color: 'red' }}>Forgot Password?</Text>
                    </TouchableOpacity>

                    { !!error &&
                        <Text style = {{ color: 'red', marginTop: 10 }} >{ errorMessage }</Text>
                    }

                    <TouchableOpacity
                        style = { styles.button }
                        onPress = { onSubmit }
                    >
                        <Text style = { styles.buttonText } >SIGN IN</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style = {{ marginTop: 10 }}
                        onPress = { () => navigation.navigate('SignUp') }
                    >
                        <Text style = {{ color: 'white' }}>New here? Sign Up</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style = { [styles.button, { flexDirection: 'row', alignItems: 'center' }] }
                        onPress = { prueba }
                    >
                        <Icon 
                            name = 'logo-google'
                            size = { 30 }
                            style = {{ marginRight: 30 }}
                            color = '#3cba54'
                        />
                        <Text style = { styles.buttonText } >SIGN IN WITH GOOGLE</Text>
                    </TouchableOpacity>
                </View>                
            </View>
        </SafeAreaView>
        
    );
};

const styles = StyleSheet.create({

    safeAreaContainer: {
        backgroundColor: '#012445',
        flex: 1,
        paddingHorizontal: 10
    },

    title: {
        color: 'white',
        fontFamily: 'Helvetica',
        fontSize: 40,
        fontWeight: 'bold',
        marginBottom: 50
    },

    formContainer: {
        backgroundColor: '#001222',
        borderRadius: 5,
        paddingHorizontal: 30,
        paddingBottom: 40,
    },

    input: {
        borderBottomColor: 'white',
        borderBottomWidth: 1,
        color: 'white',
        fontSize: 16,
        marginTop: 30
    },

    button: {
        backgroundColor: 'white',
        borderRadius: 4,
        justifyContent: 'center',
        height: 40,
        marginTop: 30,
    },

    buttonText: {
        color: '#6B6B6B',
        fontSize: 16,
        textAlign: 'center',
    },

})

export default SignInScreen;
