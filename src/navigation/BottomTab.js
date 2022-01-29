import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import CryptoScreen from '../screens/CryptoScreen';

const Tab = createBottomTabNavigator();

export const BottomTab = () => {

    return (
        <Tab.Navigator
            screenOptions = {{
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: '#00162A',
                },
                tabBarLabelStyle: {
                    color: 'white',
                }
            }}
        >
            <Tab.Screen name = 'CryptoScreen' component = { CryptoScreen } />
        </Tab.Navigator>
    );

}