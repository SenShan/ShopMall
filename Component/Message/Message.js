/**
 * 消息
 * */
import React, {Component} from 'react';
import {StyleSheet, View, Text, Platform} from 'react-native';
export default class Message extends Component {
  render(): React.ReactNode {
    return (
      <View style={styles.container}>
        {this.renderNavBar()}
        <Text style={styles.welcome}>消息</Text>
      </View>
    );
  }
  renderNavBar() {
    return (
      <View style={styles.navOutViewStyle}>
        <Text style={{color: 'white', fontSize: 16, fontWeight: 'bold'}}>
          消息
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  navOutViewStyle: {
    height: Platform.OS === 'ios' ? 74 : 64,
    backgroundColor: '#468AFF',
    //主轴方向
    flexDirection: 'row',
    //两侧对齐方式 垂直居中
    alignItems: 'center',
    //主轴方向居中
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
