import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Colors from '../constant/Colors';
//ne pas oublié de faire npx react-native link 
import Icon from 'react-native-vector-icons/FontAwesome';

const myIcon= <Icon name="heart" size={15} color="#f51637" style={{marginRight: 5}} />;

const MovieCard = () => {
    return (
        <TouchableOpacity>
            <View style={styles.container}>
            <Text> MovieCard</Text>
            </View>
            <View>
                <Text style={styles.movieTitle} numberOfLines={3}>l'ami du bon gout l'ami du bon gout</Text>
                <View style={styles.movieSubTitleContainer}>
                    <Text style={styles.movieSubTitle}>origine defake</Text>                
                <View style={styles.rowAndCenter}>
                    {myIcon}
                    <Text> 90%</Text>   
                </View>
                </View>
            </View>
        </TouchableOpacity>
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
    },
    movieTitle:{
        fontFamily: "NunitoSans-ExtraBold",
        color: Colors.GRAY,
        paddingVertical: 2,
        marginTop: 5,
        width: 230,
    },
    movieSubTitleContainer:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    movieSubTitle:{
        fontSize: 12,
        fontFamily: "NunitoSans-Regular"
    },
    rowAndCenter:{
        flexDirection: "row",
        alignItems: "center",
    },
})

export default MovieCard;
