import 'react-native-gesture-handler';
import React from 'react';
import { Text, View, TextInput, Button } from 'react-native';
import { styles } from '../App.js';

export default class HomeScreen extends React.Component {

    state = {
      searchText: "",
    }
  
    handleSearchChange = (text) => {
      this.setState(prevState => ({ ...prevState, searchText: text}))
    }
  
    search = () => {
      this.props.navigation.navigate('Search Results', { searchText: this.state.searchText })
    }
  
    render() {
      return(
          <View style={styles.container}>
            <Text>Search for a movie</Text>
            <TextInput style={styles.searchInput} onChangeText={(text) => {this.handleSearchChange(text)}} value={this.state.searchText}/>
            <Button title="Submit" onPress={() => this.search()}/>
          </View>);
    }
  }