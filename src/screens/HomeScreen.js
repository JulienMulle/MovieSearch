/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, ScrollView, StyleSheet, View} from 'react-native';
import Colors from '../constant/Colors';

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}> Now Playing</Text>
        <Text style={styles.headerSubTitle}> View All</Text>
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
});

export default HomeScreen;
