import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { globalStyles } from '../../theme/appTheme';

const CryptoItemPricing = () => {

    let volume_24hr = -1.5000;
    let volume_7d = 10.5;

    return (
        <View style = { styles.container }>
            <View style = { styles.column }>
                <Text
                    style = {[ 
                        (volume_24hr >= 0) ? globalStyles.greenText : globalStyles.redText,
                        styles.percentage
                    ]}
                >
                    { volume_24hr }%
                </Text>
                <Text style = { globalStyles.subtitle }>24hr change</Text>
            </View>
            <View style = { styles.column }>
                <Text
                    style = {[ 
                        (volume_7d >= 0) ? globalStyles.greenText : globalStyles.redText,
                        styles.percentage
                    ]}
                >
                    { volume_7d }%
                </Text>
                <Text style = { globalStyles.subtitle }>7d change</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({

    container: {
        flexDirection: 'row',
        marginBottom: 20,
    },

    column: {
        flex: 1,
    },

    percentage: {
        fontSize: 18,
        fontWeight: 'bold',
    },

})

export default CryptoItemPricing;
