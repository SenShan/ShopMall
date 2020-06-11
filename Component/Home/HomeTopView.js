import React, {Component} from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import HomeTopListView from './HomeTopListView';
import TopMenuJson from '../Json/TopMenu.json';

export default class HomeTopView extends Component {
  render(): React.ReactNode {
    return (
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
      itemArr.push(<HomeTopListView key={i} dataArr={dataArr[i]} />);
    }
    return itemArr;
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  indicatorViewStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
