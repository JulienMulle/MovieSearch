/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View, StyleSheet, ScrollView, Dimensions, Image} from 'react-native';

//Components
import Colors from '../constant/Colors';

const {height, width} = Dimensions.get('screen');
const setHeight = (h)=> (height/100) * h;
const setWidth = (w)=> (width/100) * w;

const MovieScreen = ({route,navigation}) => {
  const {movieId} = route.params;

  return (
    <ScrollView >
    <View style={styles.moviePosterImageContainer}>     
      <Image style={styles.moviePosterImage} resizeMode="cover"/>
    </View>
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
