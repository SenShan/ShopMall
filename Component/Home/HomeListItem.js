import React, {Component} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import HomeListItemView from './HomeListItemView';
import TopMenuJson from '../Json/TopMenu.json';

export default class HomeListItem extends Component {
  render(): React.ReactNode {
    return (
      // <View>{this.renderScrollItem()}</View>
      <ScrollView
        style={styles.container}
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={this.onScrollEnd}>
        {this.renderScrollItem()}
      </ScrollView>
    );
  }
  onScrollEnd: {};
  // 返回子视图
  renderScrollItem() {
    const itemArr = [];
    const dataArr = TopMenuJson.data;
    for (let i = 0; i < dataArr.length; i++) {
      itemArr.push(<HomeListItemView key={i} dataArr={dataArr[i]} />);
    }
    return itemArr;
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
});
