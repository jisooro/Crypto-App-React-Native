import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import { globalStyles } from '../../theme/appTheme';

const CryptoItemHeader = ({ imageUri, name, price, symbol }) => {

    return (
        <View style = { styles.container }>
            {  (imageUri !== '') && (

                <Image
                    source = {{ uri: imageUri }}
                    style = { styles.logo }
                />

            )}
            <Text style = { globalStyles.whiteText }>{ symbol } | { name }</Text>
            <View style = { styles.priceContainer }>
                <Text style = {[ globalStyles.greenText, styles.price ]}>${ price }</Text>
                <Text style = {[ globalStyles.subtitle, styles.currentPriceText ]}>current price</Text>
            </View>
        </View>
    );

};

const styles = StyleSheet.create({

    container: {
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: 20,
    },

    logo: {
        height: 35,
        marginEnd: 15,
        width: 35,
    },

    priceContainer: {
        flexGrow: 1,
    },

    price: {
        fontSize: 23,
        fontWeight: 'bold',
        textAlign: 'right',
    },

    currentPriceText: {
        textAlign: 'right',
    },

})

export default CryptoItemHeader;
