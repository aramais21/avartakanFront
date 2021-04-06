import { StyleSheet, Text, View } from 'react-native';

const FindMe = () => {
    return (
        <View style = {styles.main} >
            <Text> Find Me</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        flex:1,
    }
})

export default FindMe;