import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import useFetch from '../hooks/useFetch';

const NewsScreen = () => {
    const {loading, data, error, request } = useFetch();

    useEffect(() => {
        request('/concert','GET',{},{})
    },[])
    return (
        <ScrollView style = {styles.main} >
            {!loading && data && !error && data.map((item) => {
                return (
                    <View key = {item._id}>
                        <Text>{item.name}</Text>
                        <Text>{item.group}</Text>
                        <Text>{item.genre}</Text>
                        <View>
                            <Text>{item.date}</Text>
                            <Text>{item.price}AMD</Text>
                        </View>
                    </View>
                )
            })}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    main: {
        flex:1,
    },
    item: {
        width: '80%'
    }
})

export default NewsScreen;