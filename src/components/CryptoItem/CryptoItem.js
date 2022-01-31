import { View, Text, StyleSheet } from 'react-native';
import React, { useEffect } from 'react';
import CryptoItemHeader from './CryptoItemHeader';
import CryptoItemPricing from './CryptoItemPricing';
import CryptoItemMarket from './CryptoItemMarket';
import CryptoItemAddFavorite from './CryptoItemAddFavorite';
import { useState } from 'react/cjs/react.development';

const CryptoItem = ({ crypto }) => {

    const [imageUri, setImageUri] = useState('')

    const { id, name, symbol, quote } = crypto;
    const { price, percent_change_24h, percent_change_7d, volume_24h, market_cap } = quote.USD;

    useEffect(() => {
        setImageUri(`https://s2.coinmarketcap.com/static/img/coins/128x128/${id}.png`)
    }, [crypto]);

    return (
        <View style = { styles.container }>
            
            <CryptoItemHeader 
                imageUri = { imageUri } 
                name = { name }
                symbol = { symbol }
                price = { price.toFixed(3) }
            />
            <CryptoItemPricing 
                percent_change_24h = { percent_change_24h.toFixed(5) }
                percent_change_7d = { percent_change_7d.toFixed(5) }
            />
            <CryptoItemMarket 
                volume_24h = { volume_24h.toFixed(2) }
                market_cap = { market_cap.toFixed(3) }
            />
            <CryptoItemAddFavorite />

        </View>
    );
};

const styles = StyleSheet.create({

    container: {
        backgroundColor: '#00000050',
        borderRadius: 3,
        marginBottom: 10,
        padding: 15,
    }

})

export default CryptoItem;
