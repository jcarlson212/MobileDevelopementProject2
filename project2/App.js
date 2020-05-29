import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();


class HomeScreen extends React.Component {

  render() {
    return(<View style={styles.container}>
          <Text>Search for a movie</Text>
          <TextInput style={styles.searchInput} onChange={text => handleSearchChange(text)} value={() => this.state.searchText}/>
          <Button title="Submit" onPress={() => this.search()}/>
        </View>);
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
        <Tab.Screen name="Home" component={HomeScreen} />
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
  }
});
