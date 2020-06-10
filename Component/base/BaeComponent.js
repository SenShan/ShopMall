import React, {Component} from 'react';
import {BackHandler} from 'react-native';
export default class BaseComponent extends Component {
  constructor(props) {
    super(props);
    BackHandler.addEventListener('hardwareBackPress', () => {
      this.props.navigator.pop();
      return true;
    });
  }
}
