import React, {Component} from 'react';
import {
  AppRegistry,
  Image,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';
import {screenW} from '../Launch';

export default class MineHeaderView extends Component {
  render(): React.ReactNode {
    return (
      <View style={styles.container}>
        {this.renderTopView()}
        {this.renderBottomView()}
      </View>
    );
  }

  renderTopView() {
    return (
      <View style={styles.topViewStyle}>
        <Image
          source={require('../../image/home.png')}
          style={styles.leftIconStyle}
        />
        <View style={styles.conterViewStyle}>
          <Text style={{fontSize: 18, color: 'white', fontWeight: 'bold'}}>
            京东电商
          </Text>
          <Image
            source={require('../../image/home.png')}
            style={{width: 8, height: 13, marginRight: 8}}
          />
        </View>
      </View>
    );
  }
  renderBottomView() {
    return (
      <View style={styles.bottomViewStyle}>{this.renderBottomItem()}</View>
    );
  }
  renderBottomItem() {
    //组件数据
    var items = [];
    //数据
    var dataArr = [
      {number: '100', title: '购物券'},
      {number: '12', title: '评价'},
      {number: '50', title: '收藏'},
    ];
    //遍历创建组件转入数组
    for (var i = 0; i < dataArr.length; i++) {
      var data = dataArr[i];
      items.push(
        <TouchableOpacity key={i}>
          <View style={styles.bottomInnerViewStyle}>
            <Text style={{color: 'white'}}>{data.number}</Text>
            <Text style={{color: 'white'}}>{data.title}</Text>
          </View>
        </TouchableOpacity>,
      );
    }
    return items;
  }
}
const styles = StyleSheet.create({
  container: {
    height: 200,
    backgroundColor: 'rgb(255,96,0)',
  },
  topViewStyle: {
    flexDirection: 'row',
    marginTop: 80,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  leftIconStyle: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 3,
    borderColor: 'rgba(0,0,0,2)',
  },
  conterViewStyle: {
    flexDirection: 'row',
    width: screenW * 0.6,
  },
  bottomViewStyle: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
  },
  bottomInnerViewStyle: {
    width: screenW / 3 + 1,
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 1,
    borderRightColor: 'white',
  },
});
