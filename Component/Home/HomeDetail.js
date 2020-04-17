import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {DetailStyle} from './style/DetailStyle';
export default class HomeDetail extends Component {
  render(): React.ReactNode {
    return (
      <View style={DetailStyle.container}>
        <TouchableOpacity
          onPress={() => {
            this.popToHome();
          }}>
          <Text style={DetailStyle.welcome}>Home详情</Text>
        </TouchableOpacity>
      </View>
    );
  }
  popToHome() {
    this.props.navigator.pop();
  }
}
