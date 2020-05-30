import 'react-native-gesture-handler';
import React from 'react';
import { Text, Button } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { getSearchResultsFromAPI } from '../api.js'
import { styles } from '../App.js';

export default class SearchResultsScreen extends React.Component {
    //({ route, navigation })
    state = {
      posts: []
    }
  
    
    async componentDidMount() {
        try{
            const response = await getSearchResultsFromAPI(this.props.route.params.searchText)
            const res = JSON.parse(response)
            const results = res.results
        
            const newPosts = results.map((obj) => 
                (
                <ScrollView key={obj.id} style={styles.searchResult}>
                <Text style={styles.searchText}>{obj.title}</Text>
                <Text style={styles.searchText}>{obj.release_date}</Text>
                <Text style={styles.searchText}>{obj.popularity}</Text>
                <Text style={styles.searchText}>{obj.vote_average}</Text>
                <Text style={styles.searchText}>{obj.vote_count}</Text>
                <Button onPress={() => this.selectMovie(obj)} title='Select' style={styles.selectButton}>Select</Button>
                </ScrollView>)
            )
            this.setState((prevState) => ({ ...prevState, posts: newPosts}))
        }catch(error){
            console.log(error);
        }
      
    }
  
    selectMovie = (movieObject) => {
      this.props.navigation.navigate('Movie', { movie: movieObject })
    }
  
  
    render() {
      return(
          <ScrollView>
            {console.log(this.props.route.params.searchText)}
            <Text style={styles.searchText}>Search Results for {this.props.route.params.searchText}</Text>
            {this.state.posts}
          </ScrollView>);
    }
    
  }