import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import React from 'react';
import CryptoItem from '../components/CryptoItem/CryptoItem';

const CryptoScreen = () => {
    return (
        <SafeAreaView style = { styles.container }>
            <View style = {{ padding: 15 }}>

                <Text style = { styles.title }>CRYPTO CURRENCIES</Text>

                <CryptoItem />

            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({

    container: {
        backgroundColor: '#012445',
        flex: 1,
    },

    title: {
        color: 'white',
        fontSize: 45,
        fontWeight: 'bold',
        marginBottom: 25,
    }

})

export default CryptoScreen;
