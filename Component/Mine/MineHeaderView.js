import React, {Component} from 'react';
import {
  Image,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Dimensions,
} from 'react-native';
import {themeColor} from '../Param';
const screenW = Dimensions.get('window').width;
export default class MineHeaderView extends Component {
  render(): React.ReactNode {
    return (
      <View style={styles.headContainer}>
        {this.renderTopView()}
        {this.renderBottomView()}
      </View>
    );
  }

  renderTopView() {
    return (
      <View style={styles.headViewStyle}>
        <Image
          style={styles.headImageStyle}
          source={require('../../image/head.jpg')}
        />
        <View style={styles.headTextStyle}>
          <Text style={{fontSize: 18, color: 'white', fontWeight: 'bold'}}>
            路成
          </Text>
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
    const items = [];
    //数据
    const dataArr = [
      {number: '100', title: '购物券'},
      {number: '12', title: '评价'},
      {number: '50', title: '收藏'},
    ];
    //遍历创建组件转入数组
    for (let i = 0; i < dataArr.length; i++) {
      const data = dataArr[i];
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
  headContainer: {
    height: 200,
    backgroundColor: themeColor,
  },
  headViewStyle: {
    flexDirection: 'row',
    marginTop: 40,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  headImageStyle: {
    width: 80,
    height: 80,
    borderRadius: 45,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,2)',
  },
  headTextStyle: {
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
    height: 50,
    backgroundColor: 'rgba(255,255,255,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 1,
    borderRightColor: 'white',
  },
});
