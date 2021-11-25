import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import Colors from '../constant/Colors';

const {width} = Dimensions.get("screen");
const setWidth = (w) => (width / 100) * w;

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
        width: setWidth(25),
    },
})

export default GenreCard
