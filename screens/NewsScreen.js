import React, {useEffect} from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Loading from '../components/Loading';
import { BLACK_HEX, GREY_HEX, RED_HEX } from '../config/constants';

import useFetch from '../hooks/useFetch';

const NewsScreen = () => {
    const {loading, data, error, request } = useFetch();

    useEffect(() => {
        request('/concert','GET',{},{})
    },[])
    return (
        <ScrollView style = {styles.wrapper} contentContainerStyle = {styles.main} >
            {
                loading && <Loading/>
            }
            {!loading && data && !error && data.map((item) => {
                return (
                    <View key = {item._id} style = {styles.item} >
                        <View>
                            <Text style = {styles.redText} >{item.name}</Text>
                            <View style = {styles.textWrapper} >
                                <Text style = {styles.redText} >group name: </Text>
                                <Text style = {styles.greyText} >{item.group}</Text>
                            </View>
                            <View style = {styles.textWrapper} >
                                <Text style = {styles.redText} >genre: </Text>
                                <Text style = {styles.greyText} >{item.genre}</Text>
                            </View>
                        </View>
                        <View>
                            <Text style = {styles.redText} >{item.date.slice(0,12)}</Text>
                            <Text style = {styles.redText} >{item.price}AMD</Text>
                        </View>
                    </View>
                )
            })}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        marginTop: 20
    },
    main: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'nowrap',
        alignItems: 'center',
    },
    item: {
        width: '90%',
        backgroundColor: BLACK_HEX,
        color: RED_HEX,
        borderWidth: 2,
        borderRadius: 16,
        borderStyle: 'solid',
        borderColor: RED_HEX,
        marginVertical: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 10,
        paddingHorizontal: 20
    },
    textWrapper: {
        display: 'flex',
        flexDirection: 'row',

    },
    redText: {
        fontSize: 16,
        fontWeight: 'normal',
        color: RED_HEX
    },
    greyText: {
        fontSize: 16,
        fontWeight: 'normal',
        color: GREY_HEX
    }
})

export default NewsScreen;