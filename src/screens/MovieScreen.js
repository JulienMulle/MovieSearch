/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, ScrollView, Dimensions, Image, TouchableOpacity, Linking, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

//Components
import Colors from '../constant/Colors';
import { getLanguage, getMovieById, getPoster, getVideo } from '../services/RequetesAxios';
import ItemSeparator from '../components/ItemSeparator';
import { APPEND_TO_RESPONSE as AR} from '../constant/Urls';
import CastCard from "../components/CastCard";
import MovieCard from '../components/MovieCard';


const {height, width} = Dimensions.get('screen');
const setHeight = (h)=> (height/100) * h;
const setWidth = (w)=> (width/100) * w;


//const chevron = 

const MovieScreen = ({route,navigation}) => {
  const { movieId } = route.params;
  const [movie, setMovie] = useState({});
  const [isCastSelected, setIsCastSelected] = useState(true);

  useEffect(() => {
    getMovieById
    (movieId,
      `${AR.VIDEOS},${AR.CREDITS},${AR.RECOMMENDATIONS},${AR.SIMILAR}`
       ).then((response) => setMovie(response?.data));
  }, []); 

  return (
    <ScrollView >
    <View style={styles.moviePosterImageContainer}>    
      <Image style={styles.moviePosterImage} 
      resizeMode="cover"
      source={{uri: getPoster(movie?.backdrop_path)}}
      />    
    </View>
    <View style={styles.hearderContainer}>
      <TouchableOpacity onPress={()=>navigation.goBack()}>
        < Icon name="chevron-left" size={30} color={Colors.WHITE} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.playButton} onPress={()=> Linking.openURL(getVideo(movie?.videos?.results[0].key))}>
      < Icon name="play" size={35} color={Colors.WHITE} />
      </TouchableOpacity>
      <Text style={styles.headerText}>Share</Text>
    </View>
    <ItemSeparator height={setHeight(37)} />
    <View style={styles.movieTitleContainer}>
      <Text style={styles.movieTitle} numberOfLines={2}> {movie?.title} </Text>
      <View style={styles.row}>
        <Icon name="heart" size={22} color={Colors.HEART} />
        <Text style={styles.ratingText}>{movie?.vote_average}</Text>
      </View>
    </View>
    <Text style={styles.genreText}>
      {/*sans le ? j'ai des erreurs */}
    {movie?.genres?.map((genre) => genre?.name)?.join(", ")} |{" "} 
    {movie?.runtime}min
    </Text>
    <Text style={styles.genreText}>
      {getLanguage(movie?.original_language)?.english_name}
    </Text>
    <View style={styles.overviewContainer}>
      <Text style={styles.overviewTitle}>Overview</Text>
      <Text style={styles.overvieuwText}>{movie?.overview}</Text>
    </View>
    <View>
      <Text style={styles.castTitle}>Casting</Text>
      <View style={styles.castSubMenuContainer}>
        <TouchableOpacity onPress={() => setIsCastSelected(true)}>
          <Text style={{...styles.castSubMenuText, 
          color: isCastSelected ? Colors.BLACK : Colors.LIGHT_GRAY }}>
              Cast
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setIsCastSelected(false)}>
          <Text style={{...styles.castSubMenuText, 
          color: isCastSelected ? Colors.LIGHT_GRAY : Colors.BLACK }}>
            Crew
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList 
        style={{ marginVertical: 5 }}
        data={ isCastSelected ? movie?.credits?.cast : movie?.credits?.crew}
        keyExtractor={(item)=> item?.credit_id}
        horizontal
        showsHorizontalScrollIndicator={false}
        ListHeaderComponent={() => <ItemSeparator width={20}/>}
        ItemSeparatorComponent={() => <ItemSeparator width={20} />}
        renderItem={({item})=> (
          <CastCard 
            image={item?.profile_path}
            originalName={item?.name}
            characterName={isCastSelected ? item?.character : item?.job}
          />
        )}
      />
    </View>
    <Text style={styles.extraListTitle}>Recommanded Movies</Text>
      <FlatList 
        data={movie?.recommendations?.results}
        keyExtractor={(item)=> item?.id?.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        ListHeaderComponent={() => <ItemSeparator width={20}/>}
        ItemSeparatorComponent={() => <ItemSeparator width={20} />}
        renderItem={({item})=> (
          <MovieCard 
            title={item.title}
            language={item.original_language}
            voteAverage={item.vote_average}
            voteCount={item.vote_count}
            poster={item.poster_path}
            size={0.6}
            onPress={() => navigation.navigate("movie", { movieId: item.id })}
          />
        )}
      />
    <Text style={styles.extraListTitle}>Similar Movies</Text>
      <FlatList 
        data={movie?.similar?.results}
        keyExtractor={(item)=> item?.id?.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        ListHeaderComponent={() => <ItemSeparator width={20}/>}
        ItemSeparatorComponent={() => <ItemSeparator width={20} />}
        renderItem={({item})=> (
          <MovieCard 
            title={item.title}
            language={item.original_language}
            voteAverage={item.vote_average}
            voteCount={item.vote_count}
            poster={item.poster_path}
            size={0.6}
            onPress={() => navigation.navigate("movie", { movieId: item.id })}
          />
        )}
      />
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
  },
  movieTitleContainer:{
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  movieTitle:{
    paddingTop: 5,
    color: Colors.BLACK,
    fontFamily: "NunitoSans-ExtraBold",
    fontSize: 18,
    width: setWidth(60),
  },
  ratingText:{
    marginLeft: 5,
    color: Colors.BLACK,
    fontFamily: "NunitoSans-ExtraBold",
    fontSize: 15
  },
  row:{
    flexDirection: "row",
    alignItems: "center",
  },
  genreText:{
    color: Colors.LIGHT_GRAY,
    paddingHorizontal: 10,
    paddingTop: 5,
    fontFamily: "NunitoSans-Bold",
    fontSize: 13,
  },
  overviewContainer:{
    backgroundColor: Colors.EXTRA_LIGHT_GRAY,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10,
  },
  overviewTitle:{
    color: Colors.BLACK,
    fontFamily: "NunitoSans-Bold",
    fontSize: 18,
  },
  overvieuwText:{
    color: Colors.LIGHT_GRAY,
    paddingVertical: 5,
    fontFamily: "NunitoSans-Bold",
    fontSize: 13,
    textAlign: "justify",
  }, 
  castTitle:{
    marginLeft: 20, 
    color: Colors.BLACK,
    fontFamily: "NunitoSans-Bold",
    fontSize: 18,
  },
  castSubMenuContainer:{
    marginLeft: 20,
    flexDirection: "row",
    marginVertical: 5
  },
  castSubMenuText: {
    marginRight: 10,
    color: Colors.BLACK,
    fontFamily: "NunitoSans-Bold",
    fontSize: 13,
  },
  extraListTitle:{
    marginLeft: 20,
    color: Colors.BLACK,
    fontFamily: "NunitoSans-Bold",
    fontSize: 18,
    marginVertical: 8,
  },
  movieListContainer:{
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  }
})

export default MovieScreen;
