import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { globalStyles } from '../../theme/appTheme';

const CryptoItemMarket = () => {

    let market = 7172628381;
    let volume = 12838128;

    return (
        <View style = { styles.container }>
            <View style = { styles.column }>
                <Text
                    style = {[ 
                        globalStyles.whiteText,
                        styles.percentage
                    ]}
                >
                    ${ market }
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
                    ${ volume }
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
        fontSize: 18,
        fontWeight: 'bold',
    },

})

export default CryptoItemMarket;
