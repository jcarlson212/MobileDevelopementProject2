import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createStackNavigator } from '@react-navigation/stack';
import { ScrollView } from 'react-native-gesture-handler';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

class HomeScreen extends React.Component {

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

async function getSearchResultsFromAPI(text) {
  try {
    const response = await fetch('https://api.themoviedb.org/3/search/movie?api_key=3048ad741820d1bdfd364868f03dfcd5&language=en-US&query=' + text, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      mode: "cors"
    })
    const result = await response.text()
    console.log(result)
    return parseSearchResultsFromAPI(result)
  }catch(err){
    console.log(err)
  }
}

function parseSearchResultsFromAPI(response) {
  const res = JSON.parse(response)
  const results = res.results

  return results.map((obj) => 
    (
    <ScrollView style={styles.searchResult}>
      <Text style={styles.searchText}>{obj.title}</Text>
      <Text style={styles.searchText}>{obj.release_date}</Text>
      <Text style={styles.searchText}>{obj.popularity}</Text>
      <Text style={styles.searchText}>{obj.vote_average}</Text>
      <Text style={styles.searchText}>{obj.vote_count}</Text>
    </ScrollView>)
  )
}



class SearchResultsScreen extends React.Component {
  //({ route, navigation })
  state = {
    posts: []
  }

  async componentDidMount() {
    const newPosts = await getSearchResultsFromAPI(this.props.route.params.searchText)
    this.setState((prevState) => ({ ...prevState, posts: newPosts}))
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


class HomeStack extends React.Component {

  render() {
    return(
      <Stack.Navigator>
        <Stack.Screen name="Search" component={HomeScreen} />
        <Stack.Screen name="Search Results" component={SearchResultsScreen} />
      </Stack.Navigator>);
  }
}

class SettingsScreen extends React.Component {

  render() {
    return(<View style={styles.container}>
          <Text>Settings</Text>
        </View>);
  }
}

export default class App extends React.Component {

  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>




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
  },
  searchResult: {
    height: 200,
    alignSelf: 'center',
  },
  searchText: {
    alignSelf: 'center',
  }
});
