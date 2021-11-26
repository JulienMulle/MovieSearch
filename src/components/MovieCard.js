import React, {useState} from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image, TouchableNativeFeedback, ImageBackground } from 'react-native';
import Colors from '../constant/Colors';
import IMAGES from '../constant/Images';
//ne pas oublié de faire npx react-native link 
import Icon from 'react-native-vector-icons/FontAwesome';
import { getPoster } from '../services/RequetesAxios';



const MovieCard = ({title, poster, language, voteAverage, voteCount}) => {
    
    const [liked, setLiked] = useState(false)

    const myIcon= <Icon name="heart" size={15} color="#f51637" style={{marginRight: 5}} />;
    const HeartClickable = <Icon name= {liked ? "heart" : "heart-o"} size={25} color={ liked ? Colors.HEART : Colors.WHITE} style={{position: "absolute", bottom:10, left:10}}/>;

    return (
        <TouchableOpacity>
            <ImageBackground style={styles.container} imageStyle={{borderRadius: 12}} source={{uri:getPoster(poster)}}>
            <View style={styles.imdbContainer}>
                <Image source={IMAGES.IMDB} resizeMode="cover" style={styles.imdbImage}/>
                <Text style={styles.imdbRating}>{voteAverage}</Text>
            </View>
            <TouchableNativeFeedback onPress={()=> setLiked(!liked)}>
            {HeartClickable}
            </TouchableNativeFeedback>
            </ImageBackground>
            <View>
                <Text style={styles.movieTitle} numberOfLines={3}>{title}</Text>
                <View style={styles.movieSubTitleContainer}>
                    <Text style={styles.movieSubTitle}>{language}</Text>                
                <View style={styles.rowAndCenter}>
                    {myIcon}
                    <Text style={styles.movieSubTitle}> {voteCount}</Text>   
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
    imdbContainer: {
        flexDirection: "row",
        alignItems: "center",
        alignSelf: "flex-end",
        backgroundColor: Colors.YELLOW,
        borderBottomLeftRadius:5,
        borderTopRightRadius: 12,
        paddingVertical:3,
    },
    imdbImage:{
        height: 20,
        width: 50,
        borderBottomLeftRadius: 5,
    },
    imdbRating:{
        marginRight: 5,
        color: Colors.HEART,
        fontFamily: "NunitoSans-ExtraBold",
    }
});

export default MovieCard;
