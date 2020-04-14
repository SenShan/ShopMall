import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
} from 'react-native';
import {screenW} from './Home';
import HomeTopListView from './HomeTopListView';
const TopMenuJson = require('./TopMenu.json');
export default class HomeTopView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: 0,
    };
  }
  render(): React.ReactNode {
    return (
      <View style={styles.container}>
        {/*内容部分*/}
        <ScrollView
          horizontal={true}
          pagingEnabled={true}
          showHorizontalScrollIndicator={false}
          onMomentumScrollEnd={this.onScrollAnimationEnd}>
          {this.renderScrollItem()}
        </ScrollView>
        {/*页码*/}
        <View style={styles.indicatorViewStyle}>{this.renderIndicator()}</View>
      </View>
    );
  }
  onScrollAnimationEnd(e) {
    // 计算当前页码
    var currentPage = Math.floor(e.nativeEvent.contentOffset.x / screenW);
    //更新状态机
    // this.setState({
    //   activePage: currentPage,
    // });
  }
  // 返回子视图
  renderScrollItem() {
    var itemArr = [];
    var dataArr = TopMenuJson.data;
    for (var i = 0; i < dataArr.length; i++) {
      itemArr.push(<HomeTopListView key={i} dataArr={dataArr[i]} />);
    }
    return itemArr;
  }
  // 返回页码视图
  renderIndicator() {
    var indicatorArr = [],
      style;
    for (var i = 0; i < 2; i++) {
      //设置圆点样式
      style = (i === this.state.activePage) ? {color: 'orange'} : {color: 'gray'};
      indicatorArr.push(
        <Text key={i} style={[{fontSize: 25}, style]}>
          •
        </Text>,
      );
    }
    return indicatorArr;
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
