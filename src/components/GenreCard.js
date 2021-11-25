import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import Colors from '../constant/Colors';

const {width} = Dimensions.get("screen");
const setWidth = (w) => (width / 100) * w;

const GenreCard = ({ genreName, active, onPress }) => {
    return (
        <TouchableOpacity 
        activeOpacity={0.5} 
        onPress={()=> onPress(genreName)}
        style={{...styles.container, 
            backgroundColor: active ? Colors.ACTIVE : Colors.WHITE}} >
            <Text style={{...styles.genreText, 
                color: active ? Colors.WHITE : Colors.BLACK}}>
                {genreName}
            </Text>
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
        color: Colors.ACTIVE,
        fontFamily: 'NunitoSans-Bold',
    }
})

export default GenreCard
