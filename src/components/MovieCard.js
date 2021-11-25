import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Colors from '../constant/Colors';

const MovieCard = () => {
    return (
        <View style={styles.container}>
            <Text> MovieCard</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: Colors.ACTIVE,
        height: 340,
        width: 230,
        borderRadius: 12,
        elevation: 5,
        marginVertical: 2,
    }
})

export default MovieCard;
