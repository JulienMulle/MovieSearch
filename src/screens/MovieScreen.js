/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, ScrollView, Dimensions, Image} from 'react-native';
import ItemSeparator from '../components/ItemSeparator';
import {LinearGradient} from 'react-native-linear-gradient'

//Components
import Colors from '../constant/Colors';
import { getMovieById, getPoster } from '../services/RequetesAxios';

const {height, width} = Dimensions.get('screen');
const setHeight = (h)=> (height/100) * h;
const setWidth = (w)=> (width/100) * w;

const MovieScreen = ({route,navigation}) => {
  const { movieId } = route.params;
  const [movie, setMovie] = useState({});

  useEffect(() => {
    getMovieById(movieId).then((response) => setMovie(response.data));
    
  }, []); 

  return (
    <ScrollView >
      <LinearGradient 
      color={}
      />
    <View style={styles.moviePosterImageContainer}>     
      <Image style={styles.moviePosterImage} 
      resizeMode="cover"
      source={{uri: getPoster(movie.backdrop_path)}}
      />
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
  },
  moviePosterImage: {
    borderBottomRightRadius: 300,
    borderBottomLeftRadius: 300,
    height: setHeight(35),
    width: setWidth(145),
  }
})

export default MovieScreen;
