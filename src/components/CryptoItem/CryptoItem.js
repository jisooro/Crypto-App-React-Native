import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import CryptoItemHeader from './CryptoItemHeader';
import CryptoItemPricing from './CryptoItemPricing';
import CryptoItemMarket from './CryptoItemMarket';
import CryptoItemAddFavorite from './CryptoItemAddFavorite';

const CryptoItem = () => {

    const imageUri = 'https://s2.coinmarketcap.com/static/img/coins/128x128/1.png';

    return (
        <View style = { styles.container }>
            
            <CryptoItemHeader 
                imageUri = { imageUri } 
                name = { 'Bitcoin' }
            />
            <CryptoItemPricing />
            <CryptoItemMarket />
            <CryptoItemAddFavorite />

        </View>
    );
};

const styles = StyleSheet.create({

    container: {
        backgroundColor: '#00000050',
        borderRadius: 3,
        padding: 15,
    }

})

export default CryptoItem;
