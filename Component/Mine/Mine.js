/**
 * 我的
 * */
import React, {Component} from 'react';
import {ScrollView, View, Text} from 'react-native';
import CommonMyCell from './CommonMyCell';
import MineMiddleView from './MineMiddleView';
import MineHeaderView from './MineHeaderView';
export default class Mine extends Component {
  render(): React.ReactNode {
    return (
      <ScrollView>
        <View style={{marginTop: 20}}>
          <MineHeaderView />
          <CommonMyCell
            leftIconName={require('../../image/money.png')}
            rightIconName={require('../../image/next.png')}
            leftTitle="钱包"
            rightTitle="账户余额"
          />
          <MineMiddleView />
        </View>
      </ScrollView>
    );
  }
}
