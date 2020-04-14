import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Platform,
} from 'react-native';

export default class CommonMyCell extends Component {
  static defaultProps = {
    leftIconName: require('../../image/money.png'), // cell左侧图标
    leftTitle: '', // cell左侧标题
    rightIconName: require('../../image/money.png'), //cell右侧图标
    rightTitle: '', //cell右侧标题
  };
  constructor(props) {
    super(props);
    this.state = {
      money: 0,
    };
  }
  render(): React.ReactNode {
    return (
      <View style={styles.container}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <TouchableOpacity
            onPress={() => {
              this.setState({
                money: this.state.money + 1,
              });
            }}>
            <Image
              source={this.props.leftIconName}
              style={{width: 25, height: 25, marginStart: 10}}
            />
          </TouchableOpacity>
          <Text style={{color: 'blue', fontSize: 20, marginStart: 10}}>
            {this.props.leftTitle}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <TouchableOpacity
            onPress={() => {
              this.setState({
                money: this.state.money - 1,
              });
            }}>
            <Image
              source={this.props.rightIconName}
              style={{
                width: 24,
                height: 24,
              }}
            />
          </TouchableOpacity>
          <Text
            style={{
              color: 'green',
              fontSize: 16,
              marginStart: 10,
              marginEnd: 10,
            }}>
            {this.props.rightTitle + ':' + this.state.money}
          </Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    alignItems: 'center',
    height: Platform.OS === 'ios' ? 40 : 36,
    borderColor: 'red',
    borderRadius: 20,
    margin: 10,
    borderWidth: 1,
  },
});
