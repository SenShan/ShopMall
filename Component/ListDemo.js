import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  RefreshControl,
  View,
} from 'react-native';
import ListView from 'deprecated-react-native-listview';
import HomeDetail from './Home/HomeDetail';
import ListData from './Json/ListData.json';
const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
export default class ListDemo extends Component {
  constructor(props) {
    super(props);
    this.onRefresh();
  }
  // 刷新的状态，时间2s
  onRefresh() {
    this.state = {
      dataSource: ds.cloneWithRows(ListData.result),
      isLoading: true,
    };
    setTimeout(() => {
      this.setState({
        isLoading: false,
      });
    }, 2000);
  }

  // 渲染listView
  render() {
    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.state.dataSource} //关联state中的dataSource
          renderRow={(item, sectionID, rowID) =>
            this.renderRow(item, sectionID, rowID)
          } //制定listView的显示效果
          //行与行之间的分割线，用renderSeparator实现
          renderSeparator={(sectionID, rowID, adjacentRowHighlighted) =>
            this.renderSeparator(sectionID, rowID, adjacentRowHighlighted)
          }
          //页脚，底部的图片和文字，提示性，图片和文字都可以
          renderFooter={() => this.renderFooter()}
          // 下拉刷新，要用到RefreshControl，需要导入
          refreshControl={
            <RefreshControl
              refreshing={this.state.isLoading}
              onRefresh={() => this.onRefresh()}
            />
          }
        />
      </View>
    );
  }
  //三个全传递 rowID才为index
  renderRow(item, sectionID, rowID) {
    return (
      <View style={styles.row}>
        <TouchableOpacity
          onPress={() => {
            if (rowID === '0') {
              this.props.navigator.pop();
            } else {
              this.props.navigator.push({
                component: HomeDetail,
                title: '商品详细页',
                passParam: {
                  value: item.time + 'secID=' + sectionID,
                  name: item.fullName + 'rowID=' + rowID,
                },
              });
            }
          }}>
          <Text style={styles.text1}>姓名：{item.fullName}</Text>
          <Text style={styles.text2}>邮箱：{item.email}</Text>
          <Text style={styles.text3}>time：{item.time}</Text>
        </TouchableOpacity>
      </View>
    );
  }
  renderSeparator(sectionID, rowID, adjacentRowHighlighted) {
    return <View key={rowID} style={styles.line} />;
  }

  renderFooter() {
    return (
      <View
        style={{justifyContent: 'center', height: 20, alignItems: 'center'}}>
        <Text style={styles.footTip}>我是有底线的</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text1: {
    fontSize: 15,
    marginLeft: 10,
    marginTop: 7,
  },
  text2: {
    fontSize: 15,
    marginLeft: 10,
    marginTop: 7,
  },
  text3: {
    fontSize: 14,
    marginLeft: 250,
    marginTop: -16,
  },
  icon: {
    height: 22,
    width: 22,
  },
  row: {
    height: 60,
  },
  line: {
    height: 1,
    backgroundColor: 'red',
  },
  footTip: {
    fontSize: 14,
    color: 'green',
  },
});
