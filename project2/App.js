import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

export default class App extends React.Component {

  state = {
    searchText: "",
  }

  handleSearchChange = (text) => {
    this.setState({ ...state, searchText: text})
  }

  search = () => {

  }


  render() {
    return (
      <NavigationContainer>
        <View style={styles.container}>
          <Text>Search for a movie</Text>
          <TextInput style={styles.searchInput} onChange={text => handleSearchChange(text)} value={() => this.state.searchText}/>
          <Button title="Submit" onPress={() => this.search()}/>
        </View>
      </NavigationContainer>
      
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 2,
    justifyContent: "center",
  }
});
