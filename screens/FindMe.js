import React from 'react';
import { useEffect } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Loading from '../components/Loading';
import { BLACK_HEX, RED_HEX } from '../config/constants';
import useFetch from '../hooks/useFetch';

const FindMe = () => {
    const {loading, data, error, request } = useFetch();

    useEffect(() => {
        request('/post', 'GET', {}, {});
    },[])

    return (
        <ScrollView contentContainerStyle = {styles.main} >
            <View style = {styles.topCont} >
                <Text style = {styles.topContText} >Become the next James Hetfield by joining this groups</Text>
            </View>

            {loading && <Loading/>}

            {!loading && !error && data && data.map((item) => {
                return (
                    <View style = {styles.item}  key = {item._id} >
                        <Text style = {styles.mainText} >{item.group}</Text>
                        <Text style = {styles.blackText} >{item.number}</Text>
                        <Text style = {styles.blackText} >{item.email}</Text>
                    </View>
                )
            })}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    main: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'nowrap',
        alignItems: 'center',
    },
    topCont: {
        width: '90%',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        backgroundColor: BLACK_HEX,
        borderColor: RED_HEX,
        borderWidth: 3,
        borderStyle: 'solid',
        borderTopWidth: 0,
        height: 80,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    topContText: {
        fontSize: 16,
        color: RED_HEX,
        textAlign: 'center',
        maxWidth: '60%'
    },
    item: {
        width: '90%',
        backgroundColor: RED_HEX,
        borderWidth: 2,
        borderRadius: 16,
        borderStyle: 'solid',
        borderColor: BLACK_HEX,
        marginVertical: 10,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 20
    },
    textWrapper: {
        display: 'flex',
        flexDirection: 'row',

    },
    blackText: {
        fontSize: 16,
        fontWeight: 'normal',
        color: BLACK_HEX
    },
    mainText: {
        fontSize: 24,
        color: BLACK_HEX,
        marginBottom: 10
    }
})

export default FindMe;