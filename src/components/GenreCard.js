import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Colors from '../constant/Colors';


const GenreCard = () => {
    return (
        <View style={styles.container}>
            <Text>GenreCard</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
        backgroundColor: Colors.WHITE,
        paddingVertical:8,
        elevation: 3,
        marginVertical: 2,
    },
})

export default GenreCard
