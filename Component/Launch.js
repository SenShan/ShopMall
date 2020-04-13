import React, {Component} from 'react';
import {StyleSheet, Image} from 'react-native';
import Main from './Main/Main';
export default class Launch extends Component {
  render(): React.ReactNode {
    return (
      <Image
        source={require('../image/launch.jpg')}
        style={styles.launchStyle}
      />
    );
  }
  componentDidMount(): void {
    setTimeout(() => {
      this.props.navigator.replace({
        component: Main,
      });
    }, 2000);
  }
}

const styles = StyleSheet.create({
  launchStyle: {
    flex: 1,
    width: null,
    height: null,
  },
});
