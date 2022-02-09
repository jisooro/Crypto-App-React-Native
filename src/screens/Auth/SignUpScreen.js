import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, TextInput } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../hooks/useAuth';

const SignUpScreen = () => {

    const navigation = useNavigation();
    const { signup } = useAuth();

    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ confirmPassword, setConfirmPassword ] = useState('')

    const [ error, setError ] = useState(false)
    const [ errorMessage, setErrorMessage ] = useState('')
    
    const onSubmit = async () => {
        if(email !== '' || password !== '' || confirmPassword !== '') {
            setError(false)
            if(password === confirmPassword){
                try {
                    await signup(email, password);
                } catch (error) {
                    setError(true)
                    console.log(error)
                    if(error.code === 'auth/invalid-email'){
                        setErrorMessage('The email address is invalid.')
                    } else if (error.code === 'auth/weak-password'){
                        setErrorMessage('The password is too weak, it should be at least 6 characters.')
                    }
                }
            } else {
                setError(true)
                setErrorMessage('Confirm password should match the password.')
            }
        } else {
            setError(true)
            setErrorMessage('No input should be left empty.')
        }
    }

    return (
        <SafeAreaView style = { styles.safeAreaContainer }>
            <View style = { styles.container }>

                <Text style = { styles.title }>SIGN UP</Text>

                <View style = { styles.form_container }>

                    <TextInput
                        placeholder = "email"
                        placeholderTextColor = 'white'
                        style = { styles.input }
                        autoCapitalize = "none"
                        keyboardType = 'email-address'
                        textContentType = 'emailAddress'
                        onChangeText = { email => setEmail(email) }
                    />

                    <TextInput
                        placeholder = "password"
                        placeholderTextColor = 'white'
                        style = { styles.input }
                        autoCapitalize = "none"
                        secureTextEntry = {true}
                        textContentType = 'password'
                        onChangeText = { password => setPassword(password) }
                    />

                    <TextInput
                        placeholder = "confirm password"
                        placeholderTextColor = 'white'
                        style = { styles.input }
                        autoCapitalize = "none"
                        secureTextEntry = {true}
                        textContentType = 'password'
                        onChangeText = { confirmPassword => setConfirmPassword(confirmPassword) }
                    />

                    { !!error &&
                        <Text style = {{ color: 'red', marginTop: 20 }}>{ errorMessage }</Text>
                    }

                    <TouchableOpacity
                        style = { styles.button }
                        onPress = { onSubmit }
                    >
                        <Text style = { styles.buttonText } >SIGN UP</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style = {{ marginTop: 10 }}
                        onPress = { () => navigation.navigate('SignIn')}
                    >
                        <Text style = {{ color: 'white' }} >Already got an account? Sign In</Text>
                    </TouchableOpacity>


                </View>

            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({

    container: {
        padding: 15,
    },

    safeAreaContainer: {
        backgroundColor: '#012445',
        flex: 1,
        paddingHorizontal: 10,
    },

    title: {
        color: 'white',
        fontFamily: 'Helvetica',
        fontSize: 40,
        fontWeight: 'bold',
        marginBottom: 20,
    },

    form_container: {
        backgroundColor: '#00000051',
        borderRadius: 5,
        paddingHorizontal: 30,
        paddingBottom: 40,
    },

    input: {
        borderBottomColor: 'white',
        borderBottomWidth: 1,
        color: 'white',
        fontSize: 16,
        marginTop: 30,
    },

    button: {
        backgroundColor: 'white',
        borderRadius: 3,
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

export default SignUpScreen;
