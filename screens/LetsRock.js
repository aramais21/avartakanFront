import React from 'react';
import { useEffect } from 'react';
import { useMemo } from 'react';
import { useState } from 'react';
import { Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import Loading from '../components/Loading';
import { BLACK_HEX, GREY_HEX, RED_HEX } from '../config/constants';
import useFetch from '../hooks/useFetch';

const LetsRock = () => {
    const {loading, data, error, request } = useFetch();
    const [id, setId] = useState(null);
    const chosenItem = useMemo(() => {
        if(id === null || data === null) {
            return id;
        }

        return data.find((item) => item._id === id );
    },[id, data])

    useEffect(() => {
        request('/song', 'GET', {}, {});
    },[])

    return (
        <>
            {loading && <Loading />}
            
            {!loading && !error && data && (
                <ScrollView contentContainerStyle = {styles.main} >
                    {data.map((item) => {
                        return (
                            <View style = {styles.item} key = {item._id} onTouchStart = { () => setId(item._id)} >
                                <Text style = {styles.redText} >{item.group}</Text>
                                <Text style = {styles.greyText} >{item.song}</Text>
                            </View>
                        )
                    })}
                </ScrollView>
            )}
            
            {id && (
            <Modal
            animationType="slide"
            visible={id !== null}
            onRequestClose={() => {}}
            presentationStyle = 'fullScreen'
            animated={true}
            style={styles.modal}
            >
                <View style = {styles.modalInner} >
                    <View style = {styles.topCont} >
                        <TouchableOpacity onPress = {() => setId(null)}>
                            <Image style = {styles.icon} source = {{uri: 'https://icons-for-free.com/iconfiles/png/512/close+icon-1320184117228553763.png'}} ></Image>
                        </TouchableOpacity>
                    </View>
                    <View style = {styles.imageCont} >
                        <Image source = {{uri: chosenItem.tabs}} style = {styles.image} />
                        <Image source = {{uri: chosenItem.chords}} style = {styles.image} />
                    </View>
                    <ScrollView style = {styles.lyricCont} contentContainerStyle = {styles.center} >
                        <Text style = {styles.lyrics} >{chosenItem.lyrics}</Text>
                    </ScrollView>
                </View>
            </Modal>)}
        </>
    )
}

const styles = StyleSheet.create({
    main: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'nowrap',
        alignItems: 'center',
    },
    modal: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(44, 54, 63, 0.6)'
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
    redText: {
        fontSize: 16,
        fontWeight: 'normal',
        color: RED_HEX
    },
    greyText: {
        fontSize: 16,
        fontWeight: 'normal',
        color: GREY_HEX
    },
    modalInner: {
        backgroundColor: RED_HEX,
        borderWidth: 2,
        borderRadius: 16,
        borderStyle: 'solid',
        borderColor: GREY_HEX,
        paddingHorizontal: 10,
        paddingVertical: 20
    },
    topCont: {
        display: 'flex',
        justifyContent: 'flex-end',
        flexDirection: 'row',
        marginBottom: 20
    },
    icon: {
        width: 20,
        height: 20,
        backgroundColor: GREY_HEX,
        borderRadius: 100,
        overflow: 'hidden'
    },
    imageCont: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginBottom: 20
    },
    image: {
        width: '40vw',
        height: '40vw',
        borderRadius: 16,
        overflow: 'hidden',
        backgroundColor: GREY_HEX,
        marginHorizontal: 5
    },
    lyricCont: {
        width: '100%',
        height: '40vw',
    },
    center: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    lyrics: {
        color: GREY_HEX,
        textAlign: 'center',
        fontSize: 17
    }
})

export default LetsRock;