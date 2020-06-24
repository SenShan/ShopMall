/**
 * 购物车
 * */
import React, {Component} from 'react';
import {StyleSheet, View, Button, ToastAndroid} from 'react-native';
import Dialog from '../View/Dialog';
import {themeColor, toolBarHeight} from '../Param';
import {screenW} from '../Launch';
import NavDemo from '../NavDemo';
import ListDemo from '../ListDemo';

export default class Shop extends Component {
  render(): React.ReactNode {
    return (
      <View style={styles.backStyle}>
        <Dialog
          ref="custom"
          sure={'确定'}
          cancel={'取消'}
          title={'删除提示'}
          content={'执行此操作后，将无法关注该联系人，请确认'}
          clickSure={() => {
            this.sure();
          }}
          cancelClick={() => {
            ToastAndroid.show('点击取消', ToastAndroid.SHORT);
          }}
        />
        <View
          style={{
            width: screenW,
            height: toolBarHeight,
            backgroundColor: themeColor,
          }}
        />
        <View
          style={{
            width: 90,
            height: 40,
            marginTop: 0,
            borderRadius: 10,
            borderWidth: 2,
            borderColor: 'red',
          }}>
          <Button
            title="对话框"
            color={'red'}
            onPress={() => {
              this.refs.custom && this.refs.custom.show();
            }}
          />
        </View>
        <Button
          title="对话框"
          color={'red'}
          onPress={() => {
            this.jumpNav();
          }}
        />
      </View>
    );
  }

  jumpNav() {
    this.props.navigator.push({
      component: ListDemo, // 要跳转过去的组件
      title: '导航',
      passParam: {
        //将输入框的内容 传递给下一个页面
        pageValue: '页面传值',
      },
    });
  }

  sure() {
    ToastAndroid.show('点击确定', ToastAndroid.SHORT);
  }
}
const styles = StyleSheet.create({
  backStyle: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 1,
  },
});
