/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, ScrollView, Dimensions, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

//Components
import Colors from '../constant/Colors';
import { getMovieById, getPoster } from '../services/RequetesAxios';
import ItemSeparator from '../components/ItemSeparator';

const {height, width} = Dimensions.get('screen');
const setHeight = (h)=> (height/100) * h;
const setWidth = (w)=> (width/100) * w;
//const chevron = 

const MovieScreen = ({route,navigation}) => {
  const { movieId } = route.params;
  const [movie, setMovie] = useState({});

  useEffect(() => {
    getMovieById(movieId).then((response) => setMovie(response.data));
    
  }, []); 

  return (
    <ScrollView >
    <View style={styles.moviePosterImageContainer}>    
      <Image style={styles.moviePosterImage} 
      resizeMode="cover"
      source={{uri: getPoster(movie.backdrop_path)}}
      />    
    </View>
    <View style={styles.hearderContainer}>
      <TouchableOpacity onPress={()=>navigation.goBack("Home")}>
        < Icon name="chevron-left" size={30} color={Colors.WHITE} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.playButton}>
      < Icon name="play" size={35} color={Colors.WHITE} />
      </TouchableOpacity>
      <Text style={styles.headerText}>Share</Text>
    </View>
    <ItemSeparator height={setHeight(37)} />
    <Text> {movie.title} </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BASIC_BACKGROUND
  },
  moviePosterImageContainer:{
    height: setHeight(35),
    width: setWidth(145),
    alignItems: "center",
    position: "absolute",
    left: setWidth((100 - 145) / 2),
    top: 0,
    borderBottomRightRadius: 300,
    borderBottomLeftRadius: 300,
  },
  moviePosterImage: {
    borderBottomRightRadius: 300,
    borderBottomLeftRadius: 300,
    height: setHeight(35),
    width: setWidth(145),
  },
  hearderContainer:{
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    position: "absolute",
    right: 0,
    left: 0,
    top: 50,
    elevation: 20,
  },
  headerText:{
    color: Colors.WHITE,
    fontFamily: "NunitoSans-Bold"
  },
  playButton:{
    position:"absolute",
    top: 110,
    left: setWidth(50) - 30/2,
    elevation: 10,
  }
})

export default MovieScreen;
