import React, {Component} from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import {DetailStyle} from './style/DetailStyle';
import Message from '../Message/Message';
export default class HomeDetail extends Component {
  render(): React.ReactNode {
    return (
      <View style={DetailStyle.container}>
        <TouchableOpacity
          onPress={() => {
            this.goBack();
          }}>
          <Image
            style={{
              width: 28,
              height: 22,
              marginStart: 14,
            }}
            resizeMode="stretch"
            source={require('../../image/back.png')}
          />
        </TouchableOpacity>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <TouchableOpacity
            onPress={() => {
              this.jump();
            }}>
            <Text style={DetailStyle.welcome}>
              收到=={this.props.pageValue}
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: 28,
            height: 22,
          }}
        />
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
