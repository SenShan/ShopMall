/**
 * 首页
 * */
import React, {Component} from 'react';
import {
  StyleSheet,
  Image,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Platform,
  ToastAndroid,
} from 'react-native';
// const Dimensions = require('Dimensions'); //必须要写这一行，否则报错，无法找到这个变量
const screenW = 660;
// const screenH = Dimensions.get('window').height;
import HomeDetail from './HomeDetail';
export default class Home extends Component {
  render(): React.ReactNode {
    return (
      <View style={styles.container}>
        {this.renderNavBar()}
        <TouchableOpacity
          onPress={() => {
            this.pushToDetail();
          }}>
          <Text style={styles.welcome}>Home</Text>
        </TouchableOpacity>
      </View>
    );
  }
  renderNavBar() {
    return (
      <View style={styles.navOutViewStyle}>
        <TouchableOpacity
          onPress={() => {
            this.pushToDetail();
          }}>
          <Text style={styles.leftTitleStyle}>上海</Text>
        </TouchableOpacity>
        <TextInput placeholder="输入商家" style={styles.topInputStyle} />
        <View style={styles.rightNavViewStyle}>
          <TouchableOpacity
            onPress={() => {
              ToastAndroid.show('通知', ToastAndroid.SHORT);
            }}>
            <Image
              source={require('../../image/notify.png')}
              style={styles.navRightImgStyle}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              ToastAndroid.show('扫码', ToastAndroid.SHORT);
            }}>
            <Image
              source={require('../../image/scan.png')}
              style={styles.navRightImgStyle}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  pushToDetail() {
    this.props.navigator.push({
      component: HomeDetail, // 要跳转过去的组件
      title: '首页详细页',
    });
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
  leftTitleStyle: {
    color: 'white',
    paddingEnd: 10,
  },
  topInputStyle: {
    width: screenW * 0.71,
    height: Platform.OS === 'ios' ? 40 : 35,
    backgroundColor: 'white',
    marginTop: Platform.OS === 'ios' ? 18 : 0,
    //圆角
    borderRadius: 18,
    paddingLeft: 10,
  },
  rightNavViewStyle: {
    flexDirection: 'row',
    height: 64,
    alignItems: 'center',
  },
  navRightImgStyle: {
    width: Platform.OS === 'ios' ? 28 : 24,
    height: Platform.OS === 'ios' ? 28 : 24,
    marginLeft: 10,
  },
  container: {
    flex: 1,
    backgroundColor: '#e8e8e8',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
