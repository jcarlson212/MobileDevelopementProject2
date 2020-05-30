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
          <Stack.Screen name="Search" component={HomeScreen} options={{
            headerTitle: 'Welcome',
            headerTitleStyle: {
                alignSelf: 'center',
                color: 'tomato',
            },
            }} />
          <Stack.Screen name="Search Results" component={SearchResultsScreen} options={{
            headerTitle: 'Search Results',
            headerTitleStyle: {
                alignSelf: 'center',
                color: 'tomato',
            },
            }}/>
          <Stack.Screen name="Movie" component={Movie} options={{
            headerTitle: 'Movie Details',
            headerTitleStyle: {
                alignSelf: 'center',
                color: 'tomato',
            },
            }}/>
        </Stack.Navigator>);
    }
  }