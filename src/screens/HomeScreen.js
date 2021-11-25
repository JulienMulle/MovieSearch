/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {Text, ScrollView, StyleSheet, View, FlatList} from 'react-native';
import GenreCard from '../components/GenreCard';
import ItemSeparator from '../components/ItemSeparator';
import Colors from '../constant/Colors';

const Genres = ["All", "Action", "Comedy", "Romance", "Horror", "Sci-Fi"];

const HomeScreen = () => {
  const [activeGenre, setActiveGenre] = useState("all")

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}> Now Playing</Text>
        <Text style={styles.headerSubTitle}> View All</Text>
      </View>
      <View style={styles.genreListContainer}>
      <FlatList 
      data={Genres}
      horizontal
      keyExtractor={(item)=>item}
      showsHorizontalScrollIndicator={false}
      ItemSeparatorComponent={()=> <ItemSeparator width={10}/>}
      renderItem={({item})=><GenreCard genreName={item}/>}
      />
      </View>
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
  genreListContainer:{
    paddingVertical: 10,
  }
});

export default HomeScreen;
