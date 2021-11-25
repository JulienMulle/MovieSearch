import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Colors from '../constant/Colors';
import Icon from 'react-native-vector-icons/FontAwesome';

const myIcon= <Icon name="heart" size={20} color="#f51637" style={{marginRight: 5}} />;

const MovieCard = () => {
    return (
        <TouchableOpacity>
            <View style={styles.container}>
            <Text> MovieCard</Text>
            </View>
            <View>
                <Text style={styles.movieTitle}>l'ami du bon gout</Text>
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

    },
    movieSubTitleContainer:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    movieSubTitle:{

    },
    rowAndCenter:{
        flexDirection: "row",
        alignItems: "center",
    },
})

export default MovieCard;
