import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
export default class HomeDetail extends Component {
  render(): React.ReactNode {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            this.popToHome();
          }}>
          <Text style={styles.welcome}>Home详情</Text>
        </TouchableOpacity>
      </View>
    );
  }
  popToHome() {
    this.props.navigator.pop();
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
