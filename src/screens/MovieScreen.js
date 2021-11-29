/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const MovieScreen = ({route,navigation}) => {
  const {movieId} = route.params;

  return (
    <View style={styles.container}>
      <Text>MovieScreen {movieId}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:"center",
    alignItems: "center",
  }
})

export default MovieScreen;
