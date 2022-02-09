import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from '../screens/Auth/SignInScreen';
import SignUpScreen from '../screens/Auth/SignUpScreen';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
	return (
		<Stack.Navigator screenOptions = {{ headerShown: false }}>
			<Stack.Screen
				name = 'SignIn'
				component = { SignInScreen }
			/>
			<Stack.Screen
				name = 'SignUp'
				component = { SignUpScreen }
			/>
		</Stack.Navigator>
	);
};

export default AuthStack;
