import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Platform,
  Dimensions,
} from 'react-native';
import ListView from 'deprecated-react-native-listview';
import {themeColor} from '../Param';
import HomeDetail from './HomeDetail';
const screenW = Dimensions.get('window').width;
const cols = 5;
const cellW = Platform.OS === 'ios' ? 70 : 60;
const cellH = 70;
const vMargin = (screenW - cellW * cols) / (cols + 1);
export default class HomeTopListView extends Component {
  static defaultProps = {
    dataArr: [],
  };
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(this.props.dataArr),
    };
  }
  render(): React.ReactNode {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderRow}
        contentContainerStyle={styles.contentViewStyle}
        scrollEnabled={false}
      />
    );
  }
  _onPress(rowData) {
    this.props.navigator.push({
      component: HomeDetail, // 要跳转过去的组件
      title: '商品详细页',
      passProps: {
        //将输入框的内容 传递给下一个页面
        name: rowData,
      },
    });
  }
  // 返回具体的一行
  renderRow(rowData) {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => this._onPress.bind(this, rowData)}>
        <View style={styles.cellStyle}>
          <Image
            // source={{uri: rowData.image}}
            source={require('../../image/label.jpg')}
            style={{width: 52, height: 52}}
          />
          <Text style={styles.titleStyle}>{rowData.title}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  contentViewStyle: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: screenW,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cellStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    width: cellW,
    height: cellH,
    marginLeft: vMargin,
  },
  titleStyle: {
    fontSize: Platform.OS === 'ios' ? 14 : 12,
    color: themeColor,
  },
});
