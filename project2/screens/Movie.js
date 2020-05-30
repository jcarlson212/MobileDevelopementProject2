
import 'react-native-gesture-handler';
import React from 'react';
import { Text, View } from 'react-native';
import { styles } from '../App.js';

export default class Movie extends React.Component {
  
    render() {
      const { genre_ids, id, original_title, overview, popularity, title, vote_average, vote_count } = this.props.route.params.movie
      this.props.navigation.setOptions({
        headerTitle: title,
        headerTitleStyle: {
            alignSelf: 'center',
            color: 'tomato',
        },
        })
      return (
        <View style={styles.movieContainer}>
          <View style={{padding: 10}}>
            <Text style={styles.searchText}>Information about {title}</Text>
          </View>
          <View style={{padding: 10}}>
            <Text style={styles.searchText}>Original title: {original_title}</Text>
          </View>
          <View style={{padding: 10}}>
            <Text style={styles.searchText}>Overview: {overview}</Text>
          </View>
          <View style={{padding: 10}}>
            <Text style={styles.searchText}>Popularity: {popularity}</Text>
          </View>
          <View style={{padding: 10}}>
            <Text style={styles.searchText}>Genre id's: {genre_ids}</Text>
          </View>
          <View style={{padding: 10}}>
            <Text style={styles.searchText}>Vote average: {vote_average}</Text>
          </View>
          <View style={{padding: 10}}>
            <Text style={styles.searchText}>Vote count: {vote_count}</Text>
          </View>
          <View style={{padding: 10}}>
            <Text style={styles.searchText}>Movie id: {id}</Text>
          </View>
        </View>
      )
    }
  }
  