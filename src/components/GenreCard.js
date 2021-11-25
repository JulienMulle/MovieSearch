import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import Colors from '../constant/Colors';

const {width} = Dimensions.get("screen");
const setWidth = (w) => (width / 100) * w;

const GenreCard = ({ genreName }) => {
    return (
        <TouchableOpacity activeOpacity={0.5} style={styles.container} >
            <Text style={styles.genreText}>{genreName}</Text>
        </TouchableOpacity>
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
    genreText: {
        fontSize: 13,
        color: Colors.ACTIVE
    }
})

export default GenreCard
