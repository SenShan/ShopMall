/**
 * 更多
 * */
import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Platform,
  ToastAndroid,
} from 'react-native';
import CommonCell from './CommonCell';
import {themeColor, toolBarHeight} from '../Param';
export default class More extends Component {
  render(): React.ReactNode {
    return (
      <View style={styles.container}>
        {/*导航条*/}
        {this.renderNavBar()}
        <ScrollView>
          <CommonCell title="省流量模式" isSwitch={true} />
          <CommonCell title="清空缓存" rightTitle="1.99M" />
          <CommonCell
            title="扫一扫"
            onclick={() => {
              ToastAndroid.show('点击', ToastAndroid.SHORT);
            }}
          />
        </ScrollView>
      </View>
    );
  }
  renderNavBar() {
    return (
      <View style={styles.navOutViewStyle}>
        <Text style={{color: 'white', fontSize: 16, fontWeight: 'bold'}}>
          更多
        </Text>
        <TouchableOpacity
          onPress={() => {
            alert('点击了');
          }}
          style={styles.rightViewStyle}>
          <Image
            source={require('../../image/setting.png')}
            style={styles.navImgStyle}
          />
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  // 导航条视图
  navOutViewStyle: {
    height: Platform.OS === 'ios' ? 74 : toolBarHeight,
    backgroundColor: themeColor,
    // 主轴方向
    flexDirection: 'row',
    // 侧轴对齐方式 垂直居中
    alignItems: 'center',
    // 主轴方向居中
    justifyContent: 'center',
  },
  // 导航栏右侧
  rightViewStyle: {
    // 绝对定位
    position: 'absolute',
    right: 10,
    bottom: 15,
  },
  // 导航条上图片
  navImgStyle: {
    width: Platform.OS === 'ios' ? 28 : 24,
    height: Platform.OS === 'ios' ? 28 : 24,
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
