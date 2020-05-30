import 'react-native-gesture-handler';
import React from 'react';
import { Text, View } from 'react-native';
import { styles } from '../App.js';

export default class SettingsScreen extends React.Component {

    render() {
      return(<View style={styles.container}>
            <Text>Settings</Text>
          </View>);
    }
  }
  