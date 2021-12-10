/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {Text, ScrollView, StyleSheet, View, FlatList, StatusBar} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';

//components
import GenreCard from '../components/GenreCard';
import ItemSeparator from '../components/ItemSeparator';
import MovieCard from '../components/MovieCard';
import Colors from '../constant/Colors';
import { getAllGenres, getNowPlayingMovies, getUpComingMovies } from '../services/RequetesAxios';



const HomeScreen = ({navigation}) => {
  const [activeGenre, setActiveGenre] = useState("all");
  const [nowPlayingMovies, setNowPlayingMovies] = useState({});
  const [upComingMovies, setUpComingMovies] = useState({});
  const [genres, setGenres] = useState([{id: 10110, name: "All"}]);

  useEffect(() => {
    getNowPlayingMovies()
    .then(movieResponse => setNowPlayingMovies(movieResponse.data))
  }, []);

  useEffect(()=>{
    getUpComingMovies()
    .then(movieResponse=> setUpComingMovies(movieResponse.data))
  }, []);

  useEffect(()=>{
    getAllGenres()
    .then(genreResponse=> setGenres([...genres,...genreResponse.data.genres]))
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light" />
    <ScrollView >
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}> Now Playing</Text>
        <Text style={styles.headerSubTitle}> View All</Text>
      </View>
      <View style={styles.genreListContainer}>
      <FlatList 
      data={genres}
      horizontal
      keyExtractor={(item)=>item.id.toString()}
      showsHorizontalScrollIndicator={false}
      ItemSeparatorComponent={()=> <ItemSeparator width={10}/>}
      renderItem={({item})=>(
      <GenreCard 
      genreName={item.name} 
      active={item.name === activeGenre ? true : false}
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
        renderItem={({item})=> (
        <MovieCard 
        title={item.title} 
        language={item.original_language} 
        voteAverage={item.vote_average}
        voteCount={item.vote_count}
        poster={item.poster_path}
        heartLess={false}
        onPress={()=>navigation.navigate("Movie", {movieId: item.id})}
        />)}
        />
      </View>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}> Coming Soon</Text>
        <Text style={styles.headerSubTitle}> View All</Text>
      </View>
      <View>
        <FlatList
        data={upComingMovies.results}
        keyExtractor={(item)=>item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={()=> <ItemSeparator width={10}/>}
        renderItem={({item})=> (
        <MovieCard 
        title={item.title} 
        language={item.original_language} 
        voteAverage={item.vote_average}
        voteCount={item.vote_count}
        poster={item.poster_path}
        size={0.5}
        onPress={()=>navigation.navigate("Movie", {movieId: item.id})}
        />)}
        />
      </View>
    </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
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
