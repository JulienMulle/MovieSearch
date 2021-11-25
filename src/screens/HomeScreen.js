/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, ScrollView, StyleSheet, View, FlatList} from 'react-native';
import GenreCard from '../components/GenreCard';
import Colors from '../constant/Colors';

const Genres = ["All", "Action", "Comedy", "Romance", "Horror", "Sci-Fi"];

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}> Now Playing</Text>
        <Text style={styles.headerSubTitle}> View All</Text>
      </View>
      <FlatList 
      data={Genres}
      horizontal
      keyExtractor={(item)=>item}
      renderItem={({item})=><GenreCard />}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BASIC_BACKGROUND,
  },
  headerContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  headerTitle:{
    fontSize: 28,
  },
  headerSubTitle:{
    fontSize: 13,
    color: Colors.ACTIVE,
  },
});

export default HomeScreen;
