
import 'react-native-gesture-handler';
import React from 'react';
import { Text, View } from 'react-native';
import { styles } from '../App.js';

export default class Movie extends React.Component {

    render() {
      const { genre_ids, id, original_title, overview, popularity, title, vote_average, vote_count } = this.props.route.params.movie
      return (
        <View>
          <Text style={styles.searchText}>Information about {title}</Text>
          <Text style={styles.searchText}>original title: {original_title}</Text>
          <Text style={styles.searchText}>overview: {overview}</Text>
          <Text style={styles.searchText}>popularity: {popularity}</Text>
          <Text style={styles.searchText}>genre id's: {genre_ids}</Text>
          <Text style={styles.searchText}>vote average: {vote_average}</Text>
          <Text style={styles.searchText}>vote count: {vote_count}</Text>
          <Text style={styles.searchText}>movie id: {id}</Text>
        </View>
      )
    }
  }
  