import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import Colors from '../constant/Colors';
import { getPoster } from '../services/RequetesAxios';
import IMAGES from "../constant/Images";


const CastCard = ({ image, originalName, characterName }) => {
    return (
        <View style={styles.container}>
            {/*si l'image n'est pas dispo via tmdb, je choisi une image perso */}
            <Image 
                source={image ? {uri: getPoster(image)} : IMAGES.NO_IMAGE}
                resizeMode={image ? "cover" : "contain"}
                style={styles.image}    
            />
            <Text style={styles.originalName} numberOfLines={2}>{originalName}</Text>
            <Text style={styles.characterName} numberOfLines={2}>{characterName}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    image:{
        height: 120,
        width: 80,
        borderRadius: 10
    },
    originalName:{
        width: 80,
        color: Colors.BLACK,
        fontFamily: "NunitoSans-Bold",
        fontSize: 12,
    },
    characterName:{
        width: 80, 
        color: Colors.LIGHT_GRAY,
        fontFamily: "NunitoSans-Bold",
        fontSize: 10,
    },
})

export default CastCard;
