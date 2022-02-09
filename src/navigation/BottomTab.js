import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from 'react-native-vector-icons/Ionicons';
import CryptoScreen from "../screens/CryptoScreen";
import FavoriteScreen from '../screens/FavoriteScreen';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
    return (
        <Tab.Navigator
            screenOptions = {{
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: '#00162A',
                
                },
                tabBarLabelStyle: {
                    color: 'white',
                },
            }}
        >
            <Tab.Screen 
                name = "Crypto" 
                component = { CryptoScreen }
                options = {{
                    tabBarIcon: ({ focused }) => (
                        <Icon name = "card-outline" color = { focused ? '#FFFFFF' : '#C8C8C8' }  size = { 20 }/>
                    ),
                }}
                
            />

            <Tab.Screen
                name = "Favorites"
                component = { FavoriteScreen }
                options = {{
                    tabBarIcon: ({ focused }) => (
                        <Icon name = "star" color = { focused ? '#FFFFFF': '#C8C8C8' } size = { 20 } />
                    ),
                }}
            />
        
        </Tab.Navigator>
    );
}

export default BottomTab;