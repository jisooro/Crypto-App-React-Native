import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { globalStyles } from '../../theme/appTheme';

const CryptoItemMarket = ({ volume_24h, market_cap }) => {

    return (
        <View style = { styles.container }>
            <View style = { styles.column }>
                <Text
                    style = {[ 
                        globalStyles.whiteText,
                        styles.percentage
                    ]}
                >
                    ${ market_cap }
                </Text>
                <Text style = { globalStyles.subtitle }>market cap</Text>
            </View>
            <View style = { styles.column }>
                <Text
                    style = {[ 
                        globalStyles.whiteText,
                        styles.percentage
                    ]}
                >
                    ${ volume_24h }
                </Text>
                <Text style = { globalStyles.subtitle }>volume 24hr</Text>
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
        fontSize: 13,
        // fontWeight: 'bold',
    },

})

export default CryptoItemMarket;
