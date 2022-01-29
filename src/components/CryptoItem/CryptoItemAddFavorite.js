import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { globalStyles } from '../../theme/appTheme';

const CryptoItemAddFavorite = () => {
    return (
        <TouchableOpacity>
            <Text style = {[ globalStyles.whiteText, styles.cta ]}>
                ❤️ Add to favorites
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({

    cta: {
        fontSize: 17,
        fontWeight: 'bold',
    },

})

export default CryptoItemAddFavorite;
