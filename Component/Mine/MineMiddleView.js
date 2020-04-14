import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';

const MiddleData = require('../../Component/Mine/MiddleData.json');
export default class MineMiddleView extends Component {
  render(): React.ReactNode {
    return <View style={styles.container}>{this.renderAllItem()}</View>;
  }
  renderAllItem() {
    var itemArr = [];
    for (var i = 0; i < MiddleData.length; i++) {
      var data = MiddleData[i];
      itemArr.push(
        <InnerView
          key={i}
          position={i}
          iconName={data.iconName}
          title={data.title}
        />,
      );
    }
    return itemArr;
  }
}
class InnerView extends Component {
  static defaultProps = {
    position: 0,
    iconName: '',
    title: '',
  };
  render(): React.ReactNode {
    return (
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => {
          ToastAndroid.show(
            '位置=' + this.props.position + '内容=' + this.props.title,
            ToastAndroid.SHORT,
          );
        }}>
        <View style={styles.innerViewStyle}>
          <Image
            source={{uri: this.props.iconName}}
            style={{width: 40, height: 30, marginBottom: 3}}
          />
          <Text style={{color: 'gray'}}>{this.props.title}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'space-around',
  },
  innerViewStyle: {
    width: 70,
    height: 70,
    //水平和垂直居中
    justifyContent: 'center',
    alignItems: 'center',
  },
});
