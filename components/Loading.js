import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { BLACK_HEX, RED_HEX } from '../config/constants';

const Loading = () => (
    <View style = {styles.main} >
        <Text style = {styles.text} >Loading ...</Text>
    </View>
);

const styles = StyleSheet.create({
    main: {
        width: '100%',
        height: '100vh',
        backgroundColor: BLACK_HEX,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        textAlign: 'center',
        fontSize: 24,
        color: RED_HEX
    }
})

export default Loading;