import React, {Component} from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import {DetailStyle} from './style/DetailStyle';
import Message from '../Message/Message';
export default class Location extends Component {
  render(): React.ReactNode {
    return (
      <View style={DetailStyle.container}>
        <TouchableOpacity
          onPress={() => {
            this.goBack();
          }}>
          <Text style={DetailStyle.welcome}>定位</Text>
        </TouchableOpacity>
      </View>
    );
  }
  jump() {
    this.props.navigator.push({
      component: Message, // 要跳转过去的组件
    });
  }

  goBack() {
    this.props.navigator.pop();
  }
}
