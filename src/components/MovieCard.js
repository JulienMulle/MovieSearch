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
        backgroundColor: Colors.ACTIVE
    }
})

export default MovieCard;
