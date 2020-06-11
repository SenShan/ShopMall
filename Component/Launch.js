import React, {Component} from 'react';
import {StyleSheet, Image, Dimensions} from 'react-native';
import Main from './Main/Main';
import BaseComponent from './Base/BaseComponent';
export const screenW = Dimensions.get('window').width;
export const screenH = Dimensions.get('window').height;
export default class Launch extends BaseComponent {
  render(): React.ReactNode {
    return (
      <Image
        source={require('../image/launch.jpg')}
        style={styles.launchStyle}
      />
    );
  }
  componentDidMount(): void {
    this.timer = setTimeout(() => {
      this.props.navigator.replace({
        component: Main,
      });
      // this.props.navigator.push({
      //   component: Main,
      // });
    }, 1200);
  }
  componentWillUnmount() {
    this.timer && clearTimeout(this.timer);
  }
}

const styles = StyleSheet.create({
  launchStyle: {
    flex: 1,
    width: screenW,
    height: screenH,
  },
});
