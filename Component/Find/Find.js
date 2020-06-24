/**
 * 发现
 * */
import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Platform} from 'react-native';
export default class Find extends Component {
  render(): React.ReactNode {
    return (
      <View style={styles.container}>
        {this.renderNavBar()}
        <TouchableOpacity
          onPress={() => {
            this.props.navigator.pop();
          }}>
          <Text style={styles.welcome}>返回</Text>
        </TouchableOpacity>
      </View>
    );
  }
  renderNavBar() {
    return (
      <View style={styles.navOutViewStyle}>
        <Text style={{color: 'white', fontSize: 16, fontWeight: 'bold'}}>
          发现
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
