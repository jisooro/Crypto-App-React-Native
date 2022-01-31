import { View, Text, StyleSheet, SafeAreaView, FlatList } from 'react-native';
import React from 'react';
import CryptoItem from '../components/CryptoItem/CryptoItem';
import { useCrypto } from '../hooks/useCrypto';

const CryptoScreen = () => {

    const { crypto, loading } = useCrypto();

    return (
        <SafeAreaView style = { styles.container }>
            <View style = {{ padding: 15 }}>

                <Text style = { styles.title }>CRYPTO CURRENCIES</Text>

                {
                    (loading) && <Text>Cargando</Text>
                }
                {
                    (!loading) && 
                        <FlatList
                            data = { crypto }
                            keyExtractor = {(item) => item.id}
                            renderItem = {({item, index}) => <CryptoItem crypto = { item } />}
                        />
                }

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
