/**
 * 购物车
 * */
import React, {Component} from 'react';
import {StyleSheet, View, Button, ToastAndroid} from 'react-native';
import Dialog from '../view/Dialog';
import {toolBarHeight} from '../Param';
import {screenW} from '../Launch';
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
            backgroundColor: 'red',
          }}
        />
        <View
          style={{
            width: 90,
            height: 40,
            marginTop: 30,
            borderRadius: 10,
            borderWidth: 2,
            borderColor: 'red',
          }}>
          <Button
            title="展示"
            color={'red'}
            onPress={() => {
              this.refs.custom && this.refs.custom.show();
            }}
          />
        </View>
      </View>
    );
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
