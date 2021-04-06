import { StyleSheet, Text, View } from 'react-native';

const LetsRock = () => {
    return (
        <View style = {styles.main} >
            <Text> Lets Rock</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        flex:1,
    }
})

export default LetsRock;