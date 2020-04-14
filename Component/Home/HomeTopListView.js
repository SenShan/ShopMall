import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Platform,
} from 'react-native';
import ListView from 'deprecated-react-native-listview';
import {screenW} from './Home';
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
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
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
  // 返回具体的一行
  renderRow(rowData) {
    return (
      <TouchableOpacity activeOpacity={0.8}>
        <View style={styles.cellStyle}>
          <Image
            // source={{uri: rowData.image}}
            source={require('../../image/home.png')}
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
    color: 'gray',
  },
});
