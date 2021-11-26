/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {Text, ScrollView, StyleSheet, View, FlatList} from 'react-native';

//components
import GenreCard from '../components/GenreCard';
import ItemSeparator from '../components/ItemSeparator';
import MovieCard from '../components/MovieCard';
import Colors from '../constant/Colors';
import { getNowPlayingMovies } from '../services/RequetesAxios';

const Genres = ["All", "Action", "Comedy", "Romance", "Horror", "Sci-Fi"];

const HomeScreen = () => {
  const [activeGenre, setActiveGenre] = useState("all");
  const [nowPlayingMovies, setNowPlayingMovies] = useState({})

  useEffect(() => {
    getNowPlayingMovies()
    .then(movieResponse => setNowPlayingMovies(movieResponse.data))
  }, [])

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
      renderItem={({item})=>(
      <GenreCard 
      genreName={item} 
      active={item === activeGenre ? true : false}
      onPress={setActiveGenre}
      />
      )}
      />
      </View>
      <View>
        <FlatList
        data={nowPlayingMovies.results}
        keyExtractor={(item)=>item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={()=> <ItemSeparator width={10}/>}
        renderItem={({item})=> <MovieCard 
        title={item.title} 
        language={item.original_language} 
        voteAverage={item.vote_average}
        voteCount={item.vote_count}
        poster={item.poster_path}
        />}
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
    fontFamily: 'NunitoSans-Regular',
  },
  headerSubTitle:{
    fontSize: 13,
    color: Colors.ACTIVE,
    fontFamily: 'NunitoSans-Bold',
  },
  genreListContainer:{
    paddingVertical: 10,
  }
});

export default HomeScreen;
