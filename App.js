import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomTab from './src/navigation/BottomTab';
import { AuthProvider } from './src/hooks/useAuth';

const App = () => {
	return (
		<NavigationContainer>
			<AuthProvider>
				<BottomTab />
			</AuthProvider>
		</NavigationContainer>
	);
};

export default App;
