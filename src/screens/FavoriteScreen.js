import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import AuthStack from '../navigation/AuthStack';
import { useAuth } from '../hooks/useAuth';
import Icon from 'react-native-vector-icons/Ionicons';

const FavoriteScreen = () => {

	const { user, signout } = useAuth();

	return (
		<SafeAreaView style = { styles.safeAreaContainer }>
			{ user ? 
			<View style = {{ padding: 15 }}>
				<Text style = { styles.title }>Favorites</Text>

				<TouchableOpacity
					style = {{ flexDirection: 'row', alignItems: 'center' }}
					onPress = { () => signout() }
				>
					<Icon 
						name = 'power'
						size = { 30 }
						color = 'red'
					/>
					<Text style = {{ color: 'red', marginLeft: 10 }}>Sign Out</Text>
				</TouchableOpacity>

			</View> 
			
			: <AuthStack/> }
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({

	safeAreaContainer: {
		backgroundColor: '#012445',
		flex: 1,
	},

	title: {
        color: 'white',
        fontFamily: 'Helvetica',
        fontSize: 40,
        fontWeight: 'bold',
        marginBottom: 50
    },

})

export default FavoriteScreen;
