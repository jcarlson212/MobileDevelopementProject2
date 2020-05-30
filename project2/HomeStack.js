import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Movie from './screens/Movie.js';
import HomeScreen from './screens/HomeScreen';
import SearchResultsScreen from './screens/SearchResultsScreen.js'

const Stack = createStackNavigator();

export default class HomeStack extends React.Component {

    render() {
      return(
        <Stack.Navigator>
          <Stack.Screen name="Search" component={HomeScreen} />
          <Stack.Screen name="Search Results" component={SearchResultsScreen} />
          <Stack.Screen name="Movie" component={Movie} />
        </Stack.Navigator>);
    }
  }