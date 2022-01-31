import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { globalStyles } from '../../theme/appTheme';

const CryptoItemPricing = ({ percent_change_24h, percent_change_7d }) => {

    return (
        <View style = { styles.container }>
            <View style = { styles.column }>
                <Text
                    style = {[ 
                        (percent_change_24h >= 0) ? globalStyles.greenText : globalStyles.redText,
                        styles.percentage
                    ]}
                >
                    { percent_change_24h }%
                </Text>
                <Text style = { globalStyles.subtitle }>24hr change</Text>
            </View>
            <View style = { styles.column }>
                <Text
                    style = {[ 
                        (percent_change_7d  >= 0) ? globalStyles.greenText : globalStyles.redText,
                        styles.percentage
                    ]}
                >
                    { percent_change_7d }%
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
