import React, {Component} from 'react';
import Swiper from 'react-native-swiper';
import {StyleSheet, View, Image, Dimensions, Platform} from 'react-native';
import {screenW} from '../Launch';
export default class Swipe extends Component {
  render(): React.ReactNode {
    return (
      <Swiper
        style={styles.swipeStyle} //样式
        height={190} //组件高度
        loop={true} //如果设置为false，那么滑动到最后一张时，再次滑动将不会滑到第一张图片。
        autoplay={true} //自动轮播
        autoplayTimeout={4} //每隔4秒切换
        horizontal={true} //水平方向，为false可设置为竖直方向
        paginationStyle={{bottom: 10}} //小圆点的位置：距离底部10px
        showsButtons={false} //为false时不显示控制按钮
        showsPagination={true} //为false不显示下方圆点
        onMomentumScrollEnd={(e, state, context) => {
          // console.log(context.state);
        }}
        dot={
          <View
            style={{
              //未选中的圆点样式
              backgroundColor: 'rgba(0,0,0,.2)',
              width: 9,
              height: 9,
              borderRadius: 45,
              marginLeft: 10,
              marginRight: 9,
              marginTop: 9,
              marginBottom: 9,
            }}
          />
        }
        activeDot={
          <View
            style={{
              //选中的圆点样式
              backgroundColor: '#007aff',
              width: 9,
              height: 9,
              borderRadius: 45,
              marginLeft: 10,
              marginRight: 9,
              marginTop: 9,
              marginBottom: 9,
            }}
          />
        }>
        <Image
          source={require('../../image/girl/one.jpg')}
          style={styles.imageStyle}
        />
        <Image
          source={require('../../image/girl/two.jpg')}
          style={styles.imageStyle}
        />
        <Image
          source={require('../../image/girl/three.jpg')}
          style={styles.imageStyle}
        />
      </Swiper>
    );
  }
}
const styles = StyleSheet.create({
  swipeStyle: {},
  imageStyle: {
    width: screenW,
    height: 200,
  },
});
