/**
 * 主页面
 * */
import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View} from 'react-native';

// ES5
export default class Main extends Component {
  render(): React.ReactNode {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Main</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
