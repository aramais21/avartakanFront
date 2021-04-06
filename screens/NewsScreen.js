import { StyleSheet, Text, View } from 'react-native';

const NewsScreen = () => {
    return (
        <View style = {styles.main} >
            <Text>News Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        flex:1,
    }
})

export default NewsScreen;