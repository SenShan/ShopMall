import React, {Component} from 'react';
import {StyleSheet, Modal, Dimensions, View, Text} from 'react-native';
import PropTypes from 'prop-types';

const {width} = Dimensions.get('window');
export default class Dialog extends Component {
  static propTypes = {
    title: PropTypes.string,
    content: PropTypes.string,
    cancel: PropTypes.string,
    sure: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {
      isShow: false,
      animationType: 'fade', //none slide fade
      modalVisible: false, //模态场景是否可见
      transparent: true, //是否透明显示
    };
  }

  render(): React.ReactNode {
    if (this.state.isShow) {
      return (
        <Modal
          animationType={this.state.animationType}
          transparent={this.state.transaction}
          visible={this.state.isShow}
          onRequestClose={() => {}}>
          <View style={styles.containerStyle}>{this.renderView()}</View>
        </Modal>
      );
    } else {
      return null;
    }
  }

  //绘制 alert
  renderView() {
    return (
      <View style={styles.viewStyle}>
        <Text style={styles.titleStyle}>{this.props.title}</Text>
        <Text style={styles.contentStyle}>{this.props.content}</Text>
        <View style={{height: 2, backgroundColor: 'red'}} />

        <View style={styles.bottomStyle}>
          <View style={styles.buttonStyle}>
            <Text
              style={styles.sureStyle}
              onPress={() => {
                this.props.clickSure ? this.props.clickSure() : null;
              }}>
              {this.props.sure}
            </Text>
          </View>
          <View style={{height: 50, width: 2, backgroundColor: 'green'}} />
          <View style={styles.buttonStyle}>
            <Text
              style={styles.cancelStyle}
              onPress={() => {
                this.dismiss();
                this.props.cancelClick ? this.props.cancelClick() : null;
              }}>
              {this.props.cancel}
            </Text>
          </View>
        </View>
      </View>
    );
  }

  //隐藏
  dismiss() {
    this.setState({
      isShow: false,
    });
  }

  //显示
  show() {
    this.setState({
      isShow: true,
    });
  }
}
const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    position: 'absolute',
    justifyContent: 'center',
    backgroundColor: 'rgba(52,52,52,0.5)',
  },
  viewStyle: {
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 1,
    height: 160,
    marginLeft: 50,
    marginRight: 50,
    borderColor: 'red',
  },
  titleStyle: {
    alignSelf: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  contentStyle: {
    alignSelf: 'center',
    margin: 20,
    fontSize: 14,
  },
  bottomStyle: {
    flexDirection: 'row',
    height: 50,
    width: width - 100,
  },

  buttonStyle: {
    flex: 1,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },

  sureStyle: {
    fontSize: 16,
    color: '#157efb',
    fontWeight: '700',
  },

  cancelStyle: {
    fontSize: 16,
    color: '#157efb',
  },
});
